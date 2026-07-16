# EmailJS Setup Guide for TechNeekX Team Invitations

## 🚀 Quick Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your account: `teamtechneekx@gmail.com`
5. Follow the authentication steps

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use these settings:

**Template ID:** `team_invitation_template`

**Subject:** 
```
🚀 You're Invited to Join a Team on TechNeekX
```

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Team Invitation - TechNeekX</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f8f9fa; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; color: white; }
        .content { padding: 40px 30px; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .footer { background: #f8f9fa; padding: 20px 30px; text-align: center; color: #6c757d; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 You're Invited!</h1>
            <p>Join TechNeekX and build amazing things together</p>
        </div>
        
        <div class="content">
            <h2>Hello {{to_name}},</h2>
            
            <p>You've been invited to build and collaborate on <strong>TechNeekX</strong>!</p>
            
            <p>{{message}}</p>
            
            <p>Join us to:</p>
            <ul>
                <li>🏆 Compete in exciting hackathons</li>
                <li>🤝 Collaborate on innovative projects</li>
                <li>📚 Learn cutting-edge technologies</li>
                <li>🌐 Grow your professional network</li>
                <li>💡 Turn your ideas into reality</li>
            </ul>
            
            <div style="text-align: center;">
                <a href="{{invite_link}}" class="cta-button">Join Team Now</a>
            </div>
            
            <p>This invitation was sent by <strong>{{from_name}}</strong></p>
        </div>
        
        <div class="footer">
            <p>TechNeekX - Where Innovation Meets Collaboration</p>
            <p>Questions? Reply to this email or visit our website</p>
        </div>
    </div>
</body>
</html>
```

**Template Variables:**
- `{{to_email}}` - Recipient's email address
- `{{from_name}}` - "Sarthak (TechNeekX Founder)" (Professional sender identity)
- `{{to_name}}` - Recipient's name (extracted from email)
- `{{invite_link}}` - Invitation link to your website
- `{{message}}` - Custom invitation message

### 4. Get Your Credentials
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**
3. Go to **Email Services** → Copy your **Service ID**
4. Go to **Email Templates** → Copy your **Template ID**

### 5. Update Environment Variables
Update `.env.local` file with your credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=team_invitation_template
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test Your Setup
1. Restart your development server
2. Go to the "Build With Your Network" section
3. Enter a test email address
4. Click "Invite Your Team"
5. Check if the email is received

## 🎯 Features Implemented

### ✅ Core Functionality
- **Email Validation**: Checks for proper email format
- **Duplicate Prevention**: No duplicate emails allowed
- **Multiple Invites**: Send up to 5 invitations at once
- **Loading States**: Visual feedback during sending
- **Success/Error Messages**: Clear user feedback
- **Copy Invite Link**: Alternative sharing method

### ✅ Professional Sender Identity
- **Sender Name**: "Sarthak (TechNeekX Founder)" for trust and branding
- **Fallback Safety**: Defaults to "TechNeekX Team" if primary unavailable
- **Consistent Branding**: Professional identity across all emails
- **High Conversion**: Personalized sender improves open rates
- **Trust Building**: Founder identity increases credibility

### ✅ Security Features
- **Spam Prevention**: Button disabled during sending
- **Rate Limiting**: 5-second cooldown after sending
- **Input Validation**: Client-side email validation
- **Error Handling**: Graceful failure management

### ✅ UX Enhancements
- **Real-time Validation**: Visual feedback for email inputs
- **Smooth Animations**: Professional micro-interactions
- **Glassmorphism Design**: Consistent with TechNeekX theme
- **Responsive Layout**: Works on all devices
- **Toast Notifications**: Non-intrusive feedback

## 📧 Email Template Features

### ✅ Professional Design
- **Modern HTML Email**: Responsive and beautiful
- **Branding**: TechNeekX colors and styling
- **Clear CTA**: Prominent "Join Team" button
- **Personalization**: Dynamic recipient name

### ✅ Content Optimization
- **Compelling Copy**: Persuasive invitation message
- **Benefits List**: Clear value proposition
- **Social Proof**: Professional presentation
- **Easy Response**: Reply-to functionality

## 🔧 Troubleshooting

### Common Issues:
1. **Emails not sending**: Check EmailJS service configuration
2. **Template not found**: Verify Template ID in env variables
3. **Invalid API key**: Check Public Key in EmailJS dashboard
4. **CORS errors**: Ensure proper domain setup in EmailJS

### Debug Steps:
1. Check browser console for errors
2. Verify EmailJS service is connected
3. Test template in EmailJS dashboard
4. Check environment variables are correct

## 🚀 Advanced Features (Optional)

### Referral Tracking
Add tracking parameters to invite links:
```javascript
const inviteLink = `${window.location.origin}?ref=team-invite&user=${userId}`;
```

### Analytics Integration
Track invitation metrics:
```javascript
// Add to your analytics
analytics.track('team_invitation_sent', {
  recipient_count: filteredEmails.length,
  timestamp: new Date().toISOString()
});
```

### Custom Templates
Create different templates for:
- Welcome emails
- Project invitations
- Event notifications
- Milestone celebrations

---

**🎉 Your team invitation system is now ready!**

For support, check the [EmailJS Documentation](https://www.emailjs.com/docs/) or contact the TechNeekX team.
