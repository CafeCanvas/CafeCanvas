# CaféCanvas Website - API Contracts & Integration Guide

## Overview
This document outlines the API contracts and integration details for the CaféCanvas agency website. The frontend is built with React and uses mock data that needs to be replaced with actual backend API calls.

## Current Mock Data (to be replaced)
Location: `/app/frontend/src/mock/mockData.js`

### 1. Contact Form Submission
**Current Mock Function**: `mockFormSubmission(formData)`
**Frontend Component**: `ContactSection.jsx`

**API Contract**:
```
POST /api/contact/submit
Content-Type: application/json

Request Body:
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (required)",
  "businessName": "string (optional)",
  "requirements": "string (required)"
}

Response (Success - 200):
{
  "success": true,
  "message": "Form submitted successfully",
  "id": "unique_submission_id"
}

Response (Error - 400/500):
{
  "success": false,
  "message": "Error description",
  "errors": ["validation errors array"]
}
```

### 2. Email Notification System
**Purpose**: Send contact form submissions to business email
**Requirements**:
- Email should be sent to the business owner when a contact form is submitted
- Include all form data in a formatted email
- Consider using services like SendGrid, Mailgun, or SMTP

## Database Schema

### Contact Submissions Table
```sql
contacts:
  - id: UUID (primary key)
  - name: VARCHAR(255) NOT NULL
  - email: VARCHAR(255) NOT NULL
  - phone: VARCHAR(50) NOT NULL
  - business_name: VARCHAR(255)
  - requirements: TEXT NOT NULL
  - created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  - updated_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  - status: ENUM('new', 'contacted', 'in_progress', 'completed') DEFAULT 'new'
```

## Backend Implementation Plan

### 1. Contact Form Handler
- Create FastAPI endpoint for form submission
- Add input validation using Pydantic models
- Store submissions in MongoDB
- Send email notification to business
- Return appropriate response to frontend

### 2. Email Service Integration
- Set up email service (recommend SendGrid or similar)
- Create email templates for contact form notifications
- Handle email sending errors gracefully
- Add environment variables for email configuration

### 3. Admin Dashboard (Optional Future Enhancement)
- View all contact form submissions
- Mark submissions as contacted/completed
- Export submissions to CSV
- Basic analytics on inquiries

## Frontend Integration Points

### Files to Update When Backend is Ready:
1. `/app/frontend/src/components/ContactSection.jsx`
   - Replace `mockFormSubmission` with actual API call
   - Update error handling based on real API responses

### Environment Variables Needed:
- `REACT_APP_BACKEND_URL` (already configured)
- Backend will need:
  - `MONGO_URL` (already configured)
  - Email service credentials (SendGrid API key, etc.)

## Security Considerations
- Add rate limiting for form submissions
- Implement CORS properly
- Validate and sanitize all input data
- Add spam protection (consider reCAPTCHA)
- Use HTTPS in production

## Testing Plan
1. Test form submission with valid data
2. Test form validation with invalid data
3. Test email delivery
4. Test error handling scenarios
5. Test responsive design on mobile devices

## Deployment Notes
- Ensure all environment variables are set in production
- Configure email service in production environment
- Set up proper logging for form submissions and email sending
- Consider adding analytics tracking for form submissions

## Mock Data Removal Checklist
When implementing backend:
- [ ] Remove `/app/frontend/src/mock/mockData.js`
- [ ] Replace mock function calls in `ContactSection.jsx`
- [ ] Update any imports related to mock data
- [ ] Test all form functionality with real backend
- [ ] Verify email notifications are working