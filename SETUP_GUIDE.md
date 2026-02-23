# 🔐 Password-Protected Fence Gallery - Setup Guide

## ✅ What's Been Built:

Your fence gallery now has **password protection with unique access codes** that:
- ✅ Each customer gets a unique time-based access code
- ✅ Codes are valid for 6 hours (2 hours before → 4 hours after appointment)
- ✅ Codes automatically expire
- ✅ Perfect for back-to-back appointments (no overlap)
- ✅ Session-based (customer doesn't need to re-enter code for 6 hours)

---

## 📋 How Access Codes Work:

### **Code Format (GHL Version):**
```
2024-02-20-1400-12345678
```

**Breaking it down:**
- `2024-02-20` = Date (Year-Month-Day)
- `1400` = Appointment time in 24-hour format (2:00 PM)
- `12345678` = Contact ID (unique per customer)

### **Valid Time Window:**
- **Activates:** 2 hours before appointment
- **Expires:** 4 hours after appointment
- **Total window:** 6 hours

**Example:**
- Appointment: 2:00 PM (Feb 19)
- Code becomes active: 12:00 PM
- Code expires: 6:00 PM
- Customer can access gallery from 12:00 PM - 6:00 PM

---

## 🎯 GoHighLevel Integration - Step by Step:

### **Step 1: Create Custom Field for Access Code**

1. Go to **Settings** → **Custom Fields**
2. Click **Add Custom Field**
3. Configure:
   - **Field Name:** `gallery_access_code`
   - **Field Type:** Text
   - **Placeholder:** Access code for fence gallery

---

### **Step 2: Update Your Appointment Workflow**

1. Go to **Automations** → **Workflows**
2. Find your appointment reminder workflow (or create new one)
3. Add these steps:

#### **Trigger:**
- **Appointment Booked** or **Appointment Reminder** (1 hour before)

#### **Action 1: Set Custom Field**
- **Action Type:** Update Contact Field
- **Field:** `gallery_access_code`
- **Value:** 
  ```
  {{appointment.scheduled_date}}-{{appointment.scheduled_time}}-{{contact.id}}
  ```

**This generates:** `2024-02-20-1400-12345678`
- Date: 2024-02-20
- Time: 14:00 (2:00 PM)
- Contact ID: 12345678 (unique per customer)

#### **Action 2: Send SMS**
**Message template:**
```
Hi {{contact.first_name}},

Reminder: We're meeting in 1 hour for your fence estimate at {{contact.address}}!

While I'm driving to you, check out our fence gallery:
🔗 https://desplainesfencegalery.netlify.app
🔑 Access Code: {{contact.gallery_access_code}}

See you at {{appointment.scheduled_time}}!

- {{user.name}}
Des Plaines Fence
```

**Result customer receives:**
```
Hi John,

Reminder: We're meeting in 1 hour for your fence estimate at 123 Main St!

While I'm driving to you, check out our fence gallery:
🔗 https://desplainesfencegalery.netlify.app
🔑 Access Code: 2024-02-20-1400-12345678

See you at 1400!

- Mike
Des Plaines Fence
```

---

### **Step 3: Alternative Random Code Method**

If GHL doesn't support the date formatting above, use this simpler approach:

**Custom Field Value:**
```
{{workflow.appointment_date | date: "%m%d"}}-{{workflow.appointment_start_time | date: "%H%M"}}-{{contact.id | slice: -4}}
```

This creates codes like: `0219-1400-5678` (still works!)

Or even simpler, just use:
```
{{contact.id}}-{{workflow.appointment_start_time | date: "%H%M"}}
```

Result: `12345678-1400` (contact ID + appointment hour)

**The gallery will parse any of these formats!**

---

## 🧪 Testing Your Codes:

### **Test Codes That Work RIGHT NOW:**

To test the gallery immediately, use these codes (they work for the next 6 hours from current time):

**Format to create a test code:**
1. Get current date: February 19 → `FEB19`
2. Get current hour in 24hr: 3:00 PM → `1500`
3. Add random 4 chars: `TEST`
4. Combine: `FEB19-1500-TEST`

**Test codes for today (Feb 19, 2026):**
- `FEB19-1200-TEST` (works from 10am-4pm)
- `FEB19-1400-TEST` (works from 12pm-6pm)
- `FEB19-1600-TEST` (works from 2pm-8pm)
- `FEB19-1800-TEST` (works from 4pm-10pm)

**Try it:**
1. Go to your gallery URL
2. Enter one of the test codes above (based on current time)
3. Should unlock immediately

---

## 🔧 Troubleshooting:

### **Problem: "Invalid code format"**
**Solution:** Check that code follows pattern: `XXX##-####-XXXX`
- First part: 3 letters + 2 numbers (MMMDD)
- Second part: 4 numbers (HHMM in 24hr format)
- Third part: 4 characters (can be anything)

**Examples of VALID codes:**
- ✅ `FEB19-1400-5678`
- ✅ `MAR05-0900-ABCD`
- ✅ `DEC25-1630-XY12`

**Examples of INVALID codes:**
- ❌ `FEB19-14-TEST` (time must be 4 digits: 1400 not 14)
- ❌ `FEB19-2:00PM-TEST` (use 24hr format: 1400)
- ❌ `02-19-1400-TEST` (month must be letters: FEB not 02)

### **Problem: "This code becomes active X hours before appointment"**
**Solution:** Code is valid, but it's too early. Customer tried to access more than 2 hours before appointment.

### **Problem: "This access code has expired"**
**Solution:** Code is older than 4 hours past appointment time. Generate a new code.

### **Problem: Code works but no phone number on error screen**
**Solution:** Update the phone number in index.html:
- Find: `tel:8475551234`
- Replace with your actual number

---

## 📱 Customer Experience:

### **What Customer Sees:**

1. **Receives text 1 hour before appointment:**
   ```
   Hi John,
   Meeting in 1 hour!
   Gallery: https://desplainesfencegalery.netlify.app
   Access Code: FEB19-1400-5678
   See you soon!
   ```

2. **Clicks link** → Sees password entry screen with:
   - Your logo
   - "Enter Your Access Code" field
   - Helpful hints

3. **Enters code** → Gallery unlocks instantly

4. **Browses gallery** for 1-2 hours while waiting for you

5. **Code stays active** for 6 hours (no re-entry needed if they close/reopen)

---

## 🎨 Customization:

### **Change Phone Number:**
File: `index.html` (line ~25)
```html
<p>❓ Need help? Call us: <a href="tel:YOUR-NUMBER-HERE">(YOUR) NUMBER-HERE</a></p>
```

### **Change Time Windows:**
File: `app.js` (lines ~50-60)

Currently:
- Opens: 2 hours before appointment
- Closes: 4 hours after appointment

To change to 1 hour before / 3 hours after:
```javascript
const oneHourBefore = new Date(appointmentDate.getTime() - (1 * 60 * 60 * 1000));
const threeHoursAfter = new Date(appointmentDate.getTime() + (3 * 60 * 60 * 1000));
```

### **Change Session Duration:**
File: `app.js` (line ~108)

Currently: 6 hours
```javascript
const sixHoursFromNow = Date.now() + (6 * 60 * 60 * 1000);
```

To change to 4 hours:
```javascript
const fourHoursFromNow = Date.now() + (4 * 60 * 60 * 1000);
```

---

## 🚀 Deployment:

1. **Download the updated gallery files**
2. **Upload to Netlify:**
   - Go to your Netlify dashboard
   - Drag the entire folder onto your site
   - Wait for "Published"
   - Done!

3. **Test with a test code:**
   - Use `FEB19-1400-TEST` (adjust for current time)
   - Verify password screen appears
   - Verify code unlocks gallery
   - Verify gallery works normally after unlock

4. **Set up GHL workflow** (instructions above)

5. **Test end-to-end:**
   - Book a test appointment
   - Receive auto-text with code
   - Try the code in the gallery
   - Verify it works

---

## ✅ Success Checklist:

- [ ] Gallery uploaded to Netlify
- [ ] Password screen appears when visiting site
- [ ] Test code unlocks gallery successfully
- [ ] GHL custom field created
- [ ] GHL workflow updated with code generation
- [ ] SMS template includes code
- [ ] Test appointment booked
- [ ] Test SMS received with code
- [ ] Code works in gallery
- [ ] Phone number updated in gallery
- [ ] Tested on mobile device

---

## 🎯 Quick Reference:

**Code Format:** `MMMDD-HHMM-XXXX`

**GHL Code Generator:**
```
{{workflow.appointment_date | date: "%b%d" | upcase}}-{{workflow.appointment_start_time | date: "%H%M"}}-{{contact.id | slice: -4}}
```

**Valid Window:** 2 hours before → 4 hours after appointment

**Session Duration:** 6 hours (no re-entry needed)

---

**Questions? Issues? Let me know and I'll help troubleshoot!**
