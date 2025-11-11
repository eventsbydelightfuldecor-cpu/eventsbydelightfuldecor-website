# Events By Delightful Decor - Multi-Page Website

A professional, responsive multi-page website for Events By Delightful Decor, a Boston-based luxury event and wedding planning service. This website features a hero video background, separate pages for each section, and clean, maintainable code.

## 🌟 Features

### Multi-Page Structure
- **Home Page** (`index.html`) - Hero video, welcome section, and quick links
- **Services Page** (`pages/services.html`) - Detailed service offerings
- **About Page** (`pages/about.html`) - Company story, mission, and values
- **Gallery Page** (`pages/gallery.html`) - Portfolio with filtering functionality
- **Testimonials Page** (`pages/testimonials.html`) - Client reviews and feedback
- **Contact Page** (`pages/contact.html`) - Comprehensive contact form and information
- **Give-A-Gift Page** (`pages/give-a-gift.html`) - Gift certificate options
- **FAQ Page** (`pages/faq.html`) - Categorized frequently asked questions

### Technical Features
- **Hero Video Background**: Supports `Events_By_Delightful_Decor_Hero_Vid.mp4`
- **Responsive Design**: Mobile-first approach with breakpoints
- **Shared Components**: Reusable header and footer via JavaScript
- **Interactive Elements**: Gallery filtering, FAQ accordion, form validation
- **Clean Navigation**: Automatic path resolution for all pages
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
Events By Delightful Decor/
├── index.html                    # Home page with hero video
├── pages/                        # Individual page files
│   ├── services.html
│   ├── about.html
│   ├── gallery.html
│   ├── testimonials.html
│   ├── contact.html
│   ├── give-a-gift.html
│   └── faq.html
├── css/
│   └── styles.css               # All styles including multi-page components
├── js/
│   ├── components.js            # Shared header/footer components
│   └── scripts.js              # Interactive functionality
├── videos/                      # Video files directory
│   ├── README.txt              # Instructions for video placement
│   └── Events_By_Delightful_Decor_Hero_Vid.mp4  # Hero video (to be added)
├── images/                      # Image placeholders and assets
├── fonts/                       # Custom fonts (if needed)
└── README_MULTIPAGE.md         # This file
```

## 🎥 Hero Video Setup

1. **Add Your Video File**:
   - Place `Events_By_Delightful_Decor_Hero_Vid.mp4` in the `videos/` directory
   - Supported formats: MP4 (primary), WebM (fallback)
   - Recommended specs: 1920x1080, H.264 codec, under 50MB

2. **Video Features**:
   - Auto-plays on page load (muted for browser compliance)
   - Loops continuously
   - Responsive scaling with `object-fit: cover`
   - Fallback to gradient background if video fails to load

## 🚀 Deployment Instructions

### Option 1: Local Development Server

```bash
# Navigate to project directory
cd "/Users/jgustavo/Events By Delightful Decor"

# Start local server (choose one):
python3 -m http.server 8000
# OR
npx http-server -p 8000
# OR
php -S localhost:8000

# Open browser to http://localhost:8000
```

### Option 2: Online Deployment

#### Netlify (Recommended)
1. Drag and drop the entire project folder to [netlify.com](https://netlify.com)
2. Your multi-page site will be live instantly
3. All navigation between pages works automatically

#### GitHub Pages
1. Create a GitHub repository
2. Upload all files maintaining the directory structure
3. Enable GitHub Pages in repository settings
4. Site will be available at `https://username.github.io/repository-name`

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow prompts for deployment

## 🎨 Customization Guide

### Adding Real Images
Replace image placeholders with actual photos:

```html
<!-- Replace placeholder divs like this: -->
<div class="welcome-image-placeholder">
    [WELCOME IMAGE PLACEHOLDER - Beautiful floral arrangement]
</div>

<!-- With actual images: -->
<img src="images/welcome-floral.jpg" alt="Beautiful floral arrangement" class="welcome-image">
```

### Updating Content
- **Text Content**: Edit directly in HTML files
- **Contact Information**: Update in `pages/contact.html`
- **Services**: Modify service cards in `pages/services.html`
- **Testimonials**: Add/edit client reviews in `pages/testimonials.html`

### Styling Changes
- **Colors**: Update CSS variables in `styles.css`
- **Fonts**: Modify Google Fonts imports in HTML head sections
- **Layout**: Adjust grid systems and responsive breakpoints

## 🔧 Technical Details

### Shared Components System
The website uses JavaScript to inject shared header and footer components:

```javascript
// Automatic path resolution for navigation
const isInPages = window.location.pathname.includes('/pages/');
const basePath = isInPages ? '../' : '';
const pagesPath = isInPages ? '' : 'pages/';
```

### Interactive Features
- **Gallery Filtering**: Category-based image filtering
- **FAQ Accordion**: Expandable question/answer sections
- **Form Validation**: Client-side contact form validation
- **Mobile Navigation**: Responsive hamburger menu

### Performance Optimizations
- **Lazy Loading**: Images load as needed
- **Debounced Events**: Optimized scroll event handling
- **Minified Assets**: CSS and JS can be minified for production
- **Video Optimization**: Compressed video with fallback options

## 📱 Mobile Responsiveness

Breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below

Mobile-specific features:
- Hamburger navigation menu
- Touch-friendly buttons and forms
- Optimized image sizes
- Simplified layouts

## 🔍 SEO Features

Each page includes:
- Unique page titles and meta descriptions
- Semantic HTML structure
- Alt text for images (when added)
- Proper heading hierarchy
- Schema markup ready structure

## 📞 Contact Form Integration

The contact form is ready for backend integration:

### Option 1: Netlify Forms
Add `netlify` attribute to form tag:
```html
<form class="contact-form" id="contact-form" netlify>
```

### Option 2: Formspree
Update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Custom Backend
Modify the form submission handler in `scripts.js`

## 🎯 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Analytics Setup

Add Google Analytics before closing `</head>` tag in each HTML file:

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

## 🛠️ Maintenance

### Regular Updates
- Update contact information as needed
- Add new testimonials and gallery images
- Keep service descriptions current
- Monitor and fix any broken links

### Performance Monitoring
- Check page load speeds
- Optimize images for web
- Monitor video loading performance
- Test form submissions regularly

## 🆘 Troubleshooting

### Common Issues

1. **Navigation not working**: Check file paths in `components.js`
2. **Video not loading**: Verify video file exists in `videos/` directory
3. **Styles not applying**: Ensure CSS file paths are correct
4. **Form not submitting**: Check JavaScript console for errors

### Support

For technical issues:
1. Check browser developer console for errors
2. Verify all file paths are correct
3. Test on different browsers and devices
4. Ensure server supports video file serving

---

**Website Status**: ✅ Fully Functional Multi-Page Website  
**Hero Video**: ⏳ Ready for `Events_By_Delightful_Decor_Hero_Vid.mp4`  
**Last Updated**: October 2024  
**Version**: 2.0.0 (Multi-Page)
