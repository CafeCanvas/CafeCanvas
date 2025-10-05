# Contact Form Integration with Web3Forms

This project uses Web3Forms for handling contact form submissions without requiring a backend server.

## Configuration

### Web3Forms Setup
- **Access Key**: `ea367075-b543-44ec-85ba-201932942b62`
- **Service**: Web3Forms (https://web3forms.com/)
- **Endpoint**: `https://api.web3forms.com/submit`

### Environment Variables
Create a `.env` file in the root directory:
```
VITE_WEB3FORMS_ACCESS_KEY=ea367075-b543-44ec-85ba-201932942b62
```

### Form Fields
The contact form includes:
- **Name** (required) - Full name of the contact
- **Email** (required) - Email address for responses
- **Phone** (required) - Phone number for contact
- **Business Name** (optional) - Name of the business/restaurant
- **Requirements** (required) - Description of project needs

### Features
✅ **Real Form Submission** - Forms are sent to your email via Web3Forms  
✅ **Spam Protection** - Honeypot field prevents bot submissions  
✅ **Loading States** - Button shows "Sending..." during submission  
✅ **Success/Error Messages** - User feedback for form submission status  
✅ **Form Validation** - Required field validation  
✅ **Responsive Design** - Works on all devices  

### Email Notifications
When someone submits the form, you'll receive an email with:
- Subject: "New Contact Form Submission from CafeCanvas"
- All form field data formatted clearly
- Sender's email for easy reply

### Security
- Environment variables keep the access key secure
- Honeypot field prevents automated spam
- Form data is transmitted over HTTPS
- No sensitive data stored in the frontend

### Testing the Form
1. Fill out all required fields on the contact form
2. Click "Send Message"
3. You should see a success message
4. Check your email for the form submission

### Deployment Notes
For Vercel deployment, add the environment variable in:
1. Vercel Dashboard → Project Settings → Environment Variables
2. Add: `VITE_WEB3FORMS_ACCESS_KEY` = `ea367075-b543-44ec-85ba-201932942b62`

The form will work with the hardcoded fallback key if environment variables aren't set.
