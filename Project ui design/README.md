# Kylie AI Voice Receptionist - Admin Dashboard

## 🎯 Project Overview

This is a professional SaaS-style admin dashboard for **Kylie**, an AI Voice Receptionist System designed for a car detailing business. The system replaces human receptionists with autonomous AI capabilities.

## 🏗️ System Architecture

**Backend Stack:**
- **VAPI** - Voice AI conversation engine
- **n8n (MCP Server)** - Workflow automation & logic orchestration
- **Google Sheets** - CRM database
- **Google Calendar** - Appointment scheduling

**Frontend:**
- Pure HTML, CSS, and JavaScript
- Modern SaaS design aesthetic
- Fully responsive layout

## ✨ Features

### 1. **Authentication**
- Secure login screen
- Clean, minimal design

### 2. **Dashboard (Main)**
- Real-time KPI cards:
  - Total calls today
  - Successful bookings
  - New clients
  - Appointments today
- Call volume charts (7-day trend)
- Booking success rate visualization
- Recent activity feed
- AI status indicator

### 3. **Live Call Monitoring**
- Real-time call tracking
- Call status (Live, Completed, Transferred, Failed)
- AI-generated call summaries
- Call duration tracking
- Caller identification (New/Existing)

### 4. **CRM - Client Management**
- Searchable client database
- Client information:
  - Name, email, phone
  - Client type (New/Returning)
  - Appointment history count
  - Last contact timestamp
- Quick actions for each client

### 5. **Appointment Management**
- Calendar-based scheduling interface
- Hourly time slots (9 AM - 5 PM)
- Visual availability indicators
- Appointment details:
  - Customer name
  - Service type (Interior/Exterior/Full Detail)
- Easy booking/rescheduling

### 6. **Call Logs & Reports**
- Comprehensive call history
- Filterable by date and outcome
- Detailed call summaries
- Export functionality (CSV)
- Outcome tracking (Booked/Inquiry/Transferred/Failed)

### 7. **AI Settings & Configuration**
- AI personality settings
- Business hours configuration
- Service types and pricing
- Call handoff rules
- Automated transfer triggers

### 8. **System Workflow Visualization**
- Visual architecture diagram
- Data flow representation:
  - Caller → VAPI → n8n → CRM/Calendar → Logs
- Integration details
- System component descriptions

## 🎨 Design Features

- **Modern SaaS Aesthetic**: Clean, professional interface
- **Color Palette**: 
  - Primary: Indigo (#4F46E5)
  - Success: Green (#10B981)
  - Warning: Orange (#F59E0B)
  - Error: Red (#EF4444)
- **Typography**: Inter font family
- **Responsive Design**: Desktop-first, mobile-friendly
- **Smooth Animations**: Hover effects and transitions
- **Custom Charts**: Hand-drawn canvas charts (no external libraries)

## 🚀 Getting Started

### Installation

1. Clone or download the project files
2. Open `index.html` in a modern web browser

### Demo Login

- **Email**: admin@cardetailing.com
- **Password**: (any password - demo mode)

### File Structure

```
Project ui design/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 📊 Demo Data

The dashboard includes realistic placeholder data:
- 47 total calls today (+12% increase)
- 23 successful bookings (70% conversion)
- 12 new clients
- 18 appointments scheduled
- Sample client records
- Historical call logs

## 🎓 Academic Use

This UI is designed for:
- Final year engineering project demonstrations
- Project report screenshots
- Viva presentations
- Portfolio showcasing

### Key Highlights for Evaluation:
1. **Industry-grade design** - Professional SaaS appearance
2. **Complete feature set** - All 8 required screens implemented
3. **System architecture visualization** - Clear technical flow diagram
4. **Real-world applicability** - Practical business solution
5. **Modern tech integration** - VAPI, n8n, Google Workspace

## 🔧 Customization

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #4F46E5;
    --success: #10B981;
    /* ... */
}
```

### Adding Data
Update the HTML in `index.html` or modify `script.js` to fetch from an API.

### Extending Features
The modular structure allows easy addition of new screens and components.

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📝 License

This is a student project for academic purposes.

## 👨‍💻 Developer Notes

- No external dependencies required
- Pure vanilla JavaScript
- Custom chart rendering (no Chart.js needed)
- Fully self-contained
- Easy to deploy (just upload files)

---

**Built for Final Year Engineering Project - AI Voice Receptionist System**
