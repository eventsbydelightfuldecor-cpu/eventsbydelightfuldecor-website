# Events By Delightful Decor - Website

A professional, responsive website for Events By Delightful Decor, a Boston-based luxury event and wedding planning service. This website showcases the company's services, portfolio, testimonials, and provides an easy way for potential clients to get in touch.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, elegant design with smooth animations and transitions
- **Interactive Elements**: 
  - Mobile-friendly navigation with hamburger menu
  - Smooth scrolling between sections
  - FAQ accordion functionality
  - Contact form with validation
  - Animated elements on scroll
- **SEO Optimized**: Proper meta tags, semantic HTML structure, and accessibility features
- **Performance Optimized**: Debounced scroll events and efficient CSS animations

## 📁 Project Structure

```
Events By Delightful Decor/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All CSS styles and responsive design
├── js/
│   └── scripts.js          # JavaScript functionality
├── images/                 # Directory for images (placeholders included)
├── fonts/                  # Directory for custom fonts (if needed)
└── README.md              # This file
```

## 🎨 Design Features

### Color Scheme
- Primary Gold: `#d4af37`
- Dark Blue: `#2c3e50`
- Light Gray: `#f8f9fa`
- Text Gray: `#666`

### Typography
- Headers: 'Playfair Display' (serif)
- Body Text: 'Open Sans' (sans-serif)

### Sections Included
1. **Hero Section**: Welcome message and company introduction
2. **Services**: Wedding planning, corporate events, private parties, event coordination
3. **About**: Information about Dynell Andrews and the company
4. **Gallery**: Showcase of past events (with image placeholders)
5. **Testimonials**: Client reviews and feedback
6. **Contact**: Contact form and business information
7. **Give-A-Gift**: Gift certificate options
8. **FAQ**: Frequently asked questions with accordion functionality

## 🚀 Deployment Instructions

### Option 1: Local Development Server

1. **Using Python (Recommended)**:
   ```bash
   cd "/Users/jgustavo/Events By Delightful Decor"
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

2. **Using Node.js**:
   ```bash
   npx http-server
   ```

3. **Using PHP**:
   ```bash
   php -S localhost:8000
   ```

### Option 2: Online Deployment

#### Netlify (Recommended for beginners)
1. Create a free account at [netlify.com](https://netlify.com)
2. Drag and drop the entire project folder to Netlify's deploy area
3. Your site will be live instantly with a custom URL
4. Optional: Connect a custom domain

#### GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

#### Traditional Web Hosting
1. Upload all files to your web hosting provider via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Your site will be accessible via your domain

## 🖼️ Adding Real Images

The website currently uses labeled placeholders for images. To add real images:

1. **Replace Image Placeholders**:
   - Add images to the `images/` folder
   - Update the HTML to replace placeholder divs with `<img>` tags
   - Recommended image sizes:
     - Hero image: 800x600px
     - Service images: 400x300px
     - Gallery images: 600x400px
     - Testimonial photos: 100x100px (circular)

2. **Example Replacement**:
   ```html
   <!-- Replace this -->
   <div class="hero-image-placeholder">
       [HERO IMAGE PLACEHOLDER - Beautiful event setup]
   </div>
   
   <!-- With this -->
   <img src="images/hero-image.jpg" alt="Beautiful wedding setup by Events By Delightful Decor" class="hero-image">
   ```

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: 767px and below

## 🔧 Customization

### Updating Content
- Edit `index.html` to change text content
- Modify `css/styles.css` to adjust styling
- Update `js/scripts.js` for functionality changes

### Color Scheme Changes
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-gold: #d4af37;
    --dark-blue: #2c3e50;
    --light-gray: #f8f9fa;
    --text-gray: #666;
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `css/styles.css`
3. Update navigation menu if needed

## 📞 Contact Form Setup

The contact form currently shows success/error messages but doesn't send emails. To make it functional:

1. **Using Netlify Forms** (Easiest):
   - Add `netlify` attribute to the form tag
   - Netlify will handle form submissions automatically

2. **Using Formspree**:
   - Sign up at [formspree.io](https://formspree.io)
   - Update the form action to your Formspree endpoint

3. **Custom Backend**:
   - Set up a server-side script (PHP, Node.js, etc.)
   - Update the form submission handler in `scripts.js`

## 🔍 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta descriptions and titles
- Alt text for images (when added)
- Proper heading hierarchy
- Schema markup ready structure

## 🎯 Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Enable Caching**: Configure server-side caching
3. **Minify Files**: Minify CSS and JavaScript for production
4. **Use CDN**: Consider using a CDN for faster loading

## 🐛 Troubleshooting

### Common Issues:

1. **Fonts not loading**: Ensure internet connection for Google Fonts
2. **Icons not showing**: Check Font Awesome CDN link
3. **Mobile menu not working**: Verify JavaScript is enabled
4. **Form not submitting**: Check browser console for errors

### Browser Support:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is created for Events By Delightful Decor. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Website URL (Local)**: http://localhost:8000  
**Last Updated**: October 2024  
**Version**: 1.0.0
