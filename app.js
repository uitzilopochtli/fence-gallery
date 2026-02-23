// Password Protection System
const ACCESS_CODE_KEY = 'gallery_access_code';
const ACCESS_CODE_EXPIRY = 'gallery_access_expiry';

// Check if already authenticated
function checkAuthentication() {
    const storedCode = sessionStorage.getItem(ACCESS_CODE_KEY);
    const expiry = sessionStorage.getItem(ACCESS_CODE_EXPIRY);
    
    if (storedCode && expiry) {
        const expiryTime = parseInt(expiry);
        const now = Date.now();
        
        if (now < expiryTime) {
            // Still valid
            unlockGallery();
            return true;
        }
    }
    
    return false;
}

// Validate access code by calling the API
async function validateAccessCode(code) {
    // Remove spaces
    code = code.replace(/\s/g, '');
    
    // MASTER OVERRIDE CODES - Always work, no time restrictions
    const masterCodes = ['ADMIN2024', 'DESPLAINES', 'MASTER'];
    if (masterCodes.includes(code.toUpperCase())) {
        return { valid: true, code: code };
    }
    
    // Check if code looks like a GHL contact ID (alphanumeric, 15+ chars)
    const ghlContactIdPattern = /^[A-Za-z0-9]{15,}$/;
    if (!ghlContactIdPattern.test(code)) {
        return { valid: false, error: 'Invalid code format. Please check your text message.' };
    }
    
    // Call the API to validate
    try {
        const response = await fetch('https://desplainesfencegalery.netlify.app/api/validate-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ contactId: code })
        });
        
        const data = await response.json();
        
        if (data.valid) {
            return { valid: true, code: code };
        } else {
            return { 
                valid: false, 
                error: data.error || 'Access code is not valid at this time.' 
            };
        }
    } catch (error) {
        console.error('API Error:', error);
        return { 
            valid: false, 
            error: 'Unable to verify code. Please try again or contact us.' 
        };
    }
}

// Unlock the gallery
function unlockGallery() {
    document.getElementById('passwordScreen').style.display = 'none';
    document.getElementById('galleryContent').style.display = 'block';
    document.getElementById('galleryContent').classList.add('unlocked');
}

// Setup password screen
function setupPasswordScreen() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordSubmit = document.getElementById('passwordSubmit');
    const passwordError = document.getElementById('passwordError');
    
    // Handle submit
    const handleSubmit = async () => {
        const code = passwordInput.value.trim();
        
        if (!code) {
            passwordError.textContent = 'Please enter your access code.';
            passwordError.classList.add('show');
            return;
        }
        
        // Show loading state
        passwordSubmit.textContent = 'Validating...';
        passwordSubmit.disabled = true;
        
        const validation = await validateAccessCode(code);
        
        // Reset button
        passwordSubmit.textContent = 'Access Gallery';
        passwordSubmit.disabled = false;
        
        if (validation.valid) {
            // Store in session (expires when browser closes)
            sessionStorage.setItem(ACCESS_CODE_KEY, validation.code);
            // Set expiry for 6 hours from now
            const sixHoursFromNow = Date.now() + (6 * 60 * 60 * 1000);
            sessionStorage.setItem(ACCESS_CODE_EXPIRY, sixHoursFromNow.toString());
            
            // Unlock gallery
            unlockGallery();
            
            // Initialize the gallery
            initializeApp();
            setupEventListeners();
            renderCards();
            updateDots();
        } else {
            passwordError.textContent = validation.error;
            passwordError.classList.add('show');
            passwordInput.classList.add('error');
            
            setTimeout(() => {
                passwordError.classList.remove('show');
                passwordInput.classList.remove('error');
            }, 5000);
        }
    };
    
    // Button click
    passwordSubmit.addEventListener('click', handleSubmit);
    
    // Enter key
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });
    
    // Clear error on input
    passwordInput.addEventListener('input', () => {
        passwordError.classList.remove('show');
    });
}

// App State
let currentIndex = 0;
let currentFilter = 'all';
let filteredFences = [...fenceTypes];
let touchStartX = 0;
let touchEndX = 0;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if already authenticated
    if (!checkAuthentication()) {
        // Show password screen
        setupPasswordScreen();
    } else {
        // Already authenticated, initialize gallery
        initializeApp();
        setupEventListeners();
        renderCards();
        updateDots();
    }
});

// Initialize app
function initializeApp() {
    // Set up filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            applyFilter(btn.dataset.filter);
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Navigation buttons
    document.getElementById('prevBtn').addEventListener('click', () => navigateCard(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateCard(1));
    
    // Touch events for mobile swiping
    const container = document.getElementById('cardsContainer');
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    
    // Close modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('detailModal').addEventListener('click', (e) => {
        if (e.target.id === 'detailModal') {
            closeModal();
        }
    });
}

// Filter fences by category
function filterFences(filter) {
    if (filter === 'all') return [...fenceTypes];
    return fenceTypes.filter(fence => fence.category === filter);
}

// Apply filter
function applyFilter(filter) {
    currentFilter = filter;
    currentIndex = 0;
    filteredFences = filterFences(filter);
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    
    renderCards();
    updateDots();
}

// Render fence cards
function renderCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    
    filteredFences.forEach((fence, index) => {
        const card = createCard(fence, index);
        container.appendChild(card);
    });
    
    updateCardPositions();
}

// Create a single fence card
function createCard(fence, index) {
    const card = document.createElement('div');
    card.className = 'fence-card';
    card.dataset.index = index;
    
    const badges = [];
    if (fence.recommended) badges.push('<span class="badge badge-recommended">RECOMMENDED</span>');
    if (fence.badge) badges.push(`<span class="badge badge-special">${fence.badge}</span>`);
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${fence.images[0]}" alt="${fence.name}" loading="lazy">
            <div class="card-badges">${badges.join('')}</div>
        </div>
        <div class="card-content">
            <h2 class="card-title">${fence.name}</h2>
            <p class="card-description">${fence.description}</p>
            
            <div class="card-materials">
                <h3>Materials:</h3>
                <ul>
                    ${Object.entries(fence.materials).map(([key, value]) => 
                        `<li><strong>${formatKey(key)}:</strong> ${value}</li>`
                    ).join('')}
                </ul>
            </div>
            
            ${fence.construction ? `
                <div class="card-highlight">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <p>${fence.construction}</p>
                </div>
            ` : ''}
            
            <div class="card-price">
                <span class="price-label">Price Range:</span>
                <span class="price-value">${fence.priceRange}</span>
            </div>
            
            <button class="btn-details" onclick="showDetails(${index})">
                View Full Details
            </button>
        </div>
    `;
    
    return card;
}

// Format object keys for display
function formatKey(key) {
    return key.split('_').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Update card positions for carousel effect
function updateCardPositions() {
    const cards = document.querySelectorAll('.fence-card');
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentIndex);
    });
    
    // Update arrow visibility
    document.getElementById('prevBtn').style.opacity = currentIndex > 0 ? '1' : '0.3';
    document.getElementById('nextBtn').style.opacity = currentIndex < filteredFences.length - 1 ? '1' : '0.3';
}

// Navigate to next/previous card
function navigateCard(direction) {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filteredFences.length) {
        currentIndex = newIndex;
        updateCardPositions();
        updateDots();
    }
}

// Touch event handlers
function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next card
            navigateCard(1);
        } else {
            // Swipe right - previous card
            navigateCard(-1);
        }
    }
}

// Update navigation dots
function updateDots() {
    const container = document.getElementById('dotsContainer');
    container.innerHTML = '';
    
    filteredFences.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.classList.toggle('active', index === currentIndex);
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCardPositions();
            updateDots();
        });
        container.appendChild(dot);
    });
}

// Show detail modal
function showDetails(index) {
    const fence = filteredFences[index];
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    
    const badges = [];
    if (fence.recommended) badges.push('<span class="badge badge-recommended">RECOMMENDED</span>');
    if (fence.badge) badges.push(`<span class="badge badge-special">${fence.badge}</span>`);
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${fence.name}</h2>
            <div class="modal-badges">${badges.join('')}</div>
        </div>
        
        <div class="modal-images">
            ${fence.images.map(img => `
                <img src="${img}" alt="${fence.name}" loading="lazy">
            `).join('')}
        </div>
        
        <div class="modal-section">
            <h3>Description</h3>
            <p>${fence.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Materials</h3>
            <ul>
                ${Object.entries(fence.materials).map(([key, value]) => 
                    `<li><strong>${formatKey(key)}:</strong> ${value}</li>`
                ).join('')}
            </ul>
        </div>
        
        ${fence.construction ? `
            <div class="modal-section highlight-section">
                <h3>Our Construction Method</h3>
                <div class="highlight-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <p>${fence.construction}</p>
                </div>
            </div>
        ` : ''}
        
        <div class="modal-section pros-cons">
            <div class="pros">
                <h3>✓ Advantages</h3>
                <ul>
                    ${fence.pros.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
            </div>
            <div class="cons">
                <h3>⚠ Considerations</h3>
                <ul>
                    ${fence.cons.map(con => `<li>${con}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Maintenance</h3>
            <p>${fence.maintenance}</p>
        </div>
        
        <div class="modal-section">
            <h3>Price Range</h3>
            <p class="price-display">${fence.priceRange}</p>
            <p class="price-note">$ = Budget-Friendly | $$ = Standard | $$$ = Premium | $$$$ = Luxury | $$$$$ = Ultra-Premium</p>
        </div>
        
        ${fence.notes ? `
            <div class="modal-section">
                <h3>Additional Notes</h3>
                <p>${fence.notes}</p>
            </div>
        ` : ''}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Make showDetails available globally
window.showDetails = showDetails;
