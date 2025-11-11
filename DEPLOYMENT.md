# Deployment Guide - Events By Delightful Decor Website

This guide provides step-by-step instructions for deploying the Events By Delightful Decor website to various hosting platforms.

## 🚀 Quick Start (Local Testing)

Before deploying online, test the website locally:

```bash
# Navigate to the project directory
cd "/Users/jgustavo/Events By Delightful Decor"

# Start a local server (choose one method):

# Method 1: Python 3 (Recommended)
python3 -m http.server 8000

# Method 2: Python 2
python -m SimpleHTTPServer 8000

# Method 3: Node.js (if you have it installed)
npx http-server -p 8000

# Method 4: PHP (if you have it installed)
php -S localhost:8000
```

Open your browser and go to `http://localhost:8000` to view the website.

## 🌐 Online Deployment Options

### 1. Netlify (Recommended - Free & Easy)

**Why Netlify?**
- Free hosting for static sites
- Automatic HTTPS
- Form handling built-in
- Easy custom domain setup
- Continuous deployment from Git

**Steps:**
1. Go to [netlify.com](https://netlify.com) and create a free account
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the entire project folder to the deploy area
4. Your site will be live instantly with a URL like `https://amazing-site-name.netlify.app`
5. (Optional) Set up a custom domain in Site settings → Domain management

**For Form Functionality:**
Add `netlify` attribute to the contact form in `index.html`:
```html
<form class="contact-form" id="contact-form" netlify>
```

### 2. GitHub Pages (Free)

**Steps:**
1. Create a GitHub account if you don't have one
2. Create a new repository (e.g., "events-by-delightful-decor")
3. Upload all project files to the repository
4. Go to Settings → Pages
5. Under "Source", select "Deploy from a branch"
6. Choose "main" branch and "/ (root)" folder
7. Click Save
8. Your site will be available at `https://yourusername.github.io/repository-name`

**Note:** GitHub Pages doesn't handle form submissions. You'll need a third-party service like Formspree.

### 3. Vercel (Free)

**Steps:**
1. Install Vercel CLI: `npm install -g vercel`
2. Navigate to your project directory
3. Run `vercel` and follow the prompts
4. Your site will be deployed automatically

**Alternative (Web Interface):**
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Import from Git or drag and drop files
4. Deploy automatically

### 4. Firebase Hosting (Free)

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase login` to authenticate
3. In your project directory, run `firebase init hosting`
4. Select your Firebase project (create one if needed)
5. Set public directory to `.` (current directory)
6. Configure as single-page app: No
7. Don't overwrite index.html
8. Run `firebase deploy`

### 5. Traditional Web Hosting (Paid)

**For providers like GoDaddy, Bluehost, HostGator, etc.:**

1. **Purchase hosting and domain**
2. **Access your hosting control panel**
3. **Upload files via File Manager or FTP:**
   - Upload all files to the `public_html` or `www` directory
   - Ensure `index.html` is in the root directory
4. **Your site will be live at your domain**

**FTP Upload Instructions:**
```bash
# Using FileZilla or similar FTP client:
Host: your-domain.com (or FTP server provided by host)
Username: your-ftp-username
Password: your-ftp-password
Port: 21 (or as specified by host)

# Upload all files to the root web directory
```

## 📧 Setting Up Contact Form

The contact form needs backend processing to send emails. Here are your options:

### Option 1: Netlify Forms (Easiest)
```html
<!-- Add netlify attribute to form -->
<form class="contact-form" id="contact-form" netlify>
```

### Option 2: Formspree (Works with any host)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint
3. Update the form action:
```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: EmailJS (Client-side)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Set up email service and template
3. Add EmailJS SDK and update JavaScript

### Option 4: Custom Backend
Create a server-side script (PHP, Node.js, Python) to handle form submissions.

## 🔧 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All placeholder text has been reviewed and updated
- [ ] Contact information is correct
- [ ] Social media links are updated (or removed if not needed)
- [ ] Images are optimized and properly sized
- [ ] All links work correctly
- [ ] Mobile responsiveness is tested
- [ ] Contact form is configured
- [ ] SEO meta tags are updated
- [ ] Favicon is added (optional)

## 🖼️ Adding Real Images

Replace image placeholders with actual photos:

1. **Prepare Images:**
   - Hero image: 1200x800px (landscape)
   - Service images: 400x300px
   - Gallery images: 600x400px
   - Team photos: 300x300px (square)
   - Testimonial photos: 150x150px (square)

2. **Optimize Images:**
   - Use tools like TinyPNG or ImageOptim
   - Save as JPG for photos, PNG for graphics
   - Keep file sizes under 500KB each

3. **Replace Placeholders:**
   ```html
   <!-- Replace placeholder divs with img tags -->
   <img src="images/hero-wedding.jpg" alt="Beautiful wedding setup" class="hero-image">
   ```

## 🎨 Customization Tips

### Update Colors:
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-gold: #d4af37;
    --dark-blue: #2c3e50;
    --light-gray: #f8f9fa;
}
```

### Update Content:
- Edit text directly in `index.html`
- Update company information
- Modify service descriptions
- Add real testimonials

### Add Google Analytics:
Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔍 SEO Optimization

### Update Meta Tags:
```html
<meta name="description" content="Boston's premier luxury event and wedding planning service. Creating unforgettable experiences with meticulous attention to detail.">
<meta name="keywords" content="Boston wedding planner, event planning, luxury events, corporate events, private parties">
<meta property="og:title" content="Events By Delightful Decor - Boston Wedding & Event Planning">
<meta property="og:description" content="Creating unforgettable luxury events in Boston with meticulous attention to detail.">
<meta property="og:image" content="https://yoursite.com/images/og-image.jpg">
```

### Add Structured Data:
Add JSON-LD structured data for better search engine understanding.

## 📱 Testing Checklist

Before going live, test:

- [ ] Desktop view (1920x1080, 1366x768)
- [ ] Tablet view (768x1024, 1024x768)
- [ ] Mobile view (375x667, 414x896)
- [ ] All navigation links work
- [ ] Contact form submits correctly
- [ ] FAQ accordion functions
- [ ] Mobile menu opens/closes
- [ ] Page loading speed
- [ ] Cross-browser compatibility

## 🚨 Troubleshooting

### Common Issues:

**Site not loading:**
- Check file paths are correct
- Ensure index.html is in root directory
- Verify hosting configuration

**Images not showing:**
- Check image file paths
- Ensure images are uploaded
- Verify image file extensions

**Form not working:**
- Check form action URL
- Verify JavaScript is enabled
- Test form service configuration

**Mobile menu not working:**
- Check JavaScript console for errors
- Verify scripts.js is loaded
- Test on actual mobile device

## 📞 Support

For deployment issues or questions:
1. Check the troubleshooting section above
2. Review hosting provider documentation
3. Contact hosting provider support
4. Check browser developer console for errors

---

**Last Updated:** October 2024  
**Compatible Hosting:** Any static file hosting service  
**Requirements:** None (pure HTML/CSS/JS)
