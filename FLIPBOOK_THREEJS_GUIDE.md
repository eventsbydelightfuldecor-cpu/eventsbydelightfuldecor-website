# THREE.js Flipbook Implementation Guide

## Overview

This project now uses the **quick_flipbook** library with THREE.js to create an immersive 3D flipbook experience for the wedding magazine. This replaces the previous Turn.js implementation.

## Key Benefits of THREE.js Implementation

✅ **3D Interactive Experience** - Users can rotate, zoom, and interact with the book in 3D space  
✅ **Modern Technology** - Built on THREE.js, a powerful WebGL library  
✅ **No jQuery Dependency** - Uses modern ES6+ JavaScript modules  
✅ **Smooth Animations** - Hardware-accelerated 3D rendering  
✅ **Touch & Mobile Friendly** - Full support for touch gestures  
✅ **Better Performance** - Leverages GPU for rendering  

## Files

### Main Files
- **`flipbook-threejs.html`** - The main 3D flipbook viewer
- **`magazine-viewer.html`** - Landing page to launch the magazine
- **`FLIPBOOK_THREEJS_GUIDE.md`** - This documentation file

### Old Files (Can be removed if desired)
- `test-flipbook.html` - Old Turn.js test file
- `test-flipbook-simple.html` - Old Turn.js simple test
- `js/turn-lib.js` - Turn.js library (no longer needed)

## Installation

The necessary dependencies are already installed via npm:

```bash
npm install
```

This installs:
- `three` (v0.181.1) - THREE.js library
- `quick_flipbook` (v1.1.3) - The flipbook component

## Usage

### Opening the Magazine

1. **Via Landing Page**:
   - Open `magazine-viewer.html` in a browser
   - Click the "View Magazine" button

2. **Direct Access**:
   - Open `flipbook-threejs.html` directly

### User Controls

| Action | Effect |
|--------|--------|
| **Click on pages** | Flip to that page |
| **Click Prev/Next buttons** | Navigate pages sequentially |
| **Drag mouse** | Rotate the book in 3D space |
| **Mouse wheel** | Zoom in/out |
| **Arrow keys** | Navigate pages (← →) |
| **ESC key** | Close the flipbook |
| **Touch drag** | Rotate on mobile devices |

## Integration with Website

To integrate the flipbook into your website:

### Option 1: As a Modal/Popup

```html
<button onclick="window.open('flipbook-threejs.html', '_blank', 'fullscreen=yes')">
    View Magazine
</button>
```

### Option 2: As a Link

```html
<a href="flipbook-threejs.html" target="_blank">
    View Our Wedding Magazine
</a>
```

### Option 3: Via Landing Page

```html
<a href="magazine-viewer.html">
    View Our Wedding Magazine
</a>
```

## Customization

### Changing Magazine Pages

Edit the `pageImages` array in `flipbook-threejs.html`:

```javascript
const pageImages = [
    'images/turn-js-flipbook-2-1/Wedding Mag/Front cover page.jpg',
    'images/turn-js-flipbook-2-1/Wedding Mag/Page_1.jpg',
    // Add or modify pages here
];
```

### Adjusting Book Appearance

In `flipbook-threejs.html`, modify the FlipBook constructor:

```javascript
const book = new FlipBook({
    flipDuration: 0.8,        // Time to flip one page (seconds)
    yBetweenPages: 0.001,     // Space between stacked pages
    pageSubdivisions: 30      // Page mesh quality (higher = smoother bending)
});
```

### Changing Colors/Theme

Modify the CSS variables in `flipbook-threejs.html`:
- Background: Update `scene.background` color
- Controls: Modify `.controls` and `.control-btn` styles
- Lighting: Adjust THREE.js light intensities

### Book Scale & Proportions

```javascript
// Adjust the scale to match your magazine dimensions
book.scale.set(0.7, 1, 0.7);  // x, y, z scale
```

## Browser Compatibility

The flipbook requires:
- ✅ Modern browsers with WebGL support
- ✅ Chrome, Firefox, Safari, Edge (latest versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ❌ Internet Explorer (not supported)

## Performance Optimization

### For Better Performance:
1. **Optimize Images**: Compress magazine page images
2. **Reduce Page Subdivisions**: Lower `pageSubdivisions` for slower devices
3. **Limit Texture Size**: Keep images under 2048x2048px

### Image Recommendations:
- Format: JPEG or WebP
- Resolution: 1920x1080 or lower
- Quality: 80-85% compression
- Size: Keep under 500KB per image

## Troubleshooting

### Book Not Appearing
1. Check browser console for errors
2. Verify image paths are correct
3. Ensure THREE.js and quick_flipbook are loaded
4. Check browser supports WebGL

### Slow Performance
1. Reduce `pageSubdivisions` (try 20 instead of 30)
2. Compress/optimize magazine images
3. Test on a different device
4. Check GPU acceleration is enabled in browser

### Images Not Loading
1. Verify image paths are correct
2. Check image files exist in the specified directory
3. Ensure proper file permissions
4. Check browser console for 404 errors

## API Reference

### FlipBook Methods

```javascript
book.setPages(array)        // Set page textures/images
book.nextPage()            // Flip to next page
book.previousPage()        // Flip to previous page
book.flipPage(pageRef)     // Flip to specific page
book.animate(delta)        // Update animation (call in render loop)
book.dispose()             // Clean up resources
```

### Properties

```javascript
book.progress              // Get/set current page position (0 to totalPages)
book.totalPages           // Total number of pages
book.rotation            // THREE.js rotation (x, y, z)
book.scale               // THREE.js scale (x, y, z)
```

## Migration from Turn.js

If you were using the old Turn.js implementation:

1. ✅ Replace links to `test-flipbook.html` with `flipbook-threejs.html`
2. ✅ Update any JavaScript that references Turn.js
3. ✅ Remove jQuery dependency if not used elsewhere
4. ✅ Test all flipbook functionality
5. ⚠️ Old Turn.js files can be removed (or kept as backup)

## Support & Documentation

- **quick_flipbook GitHub**: https://github.com/bandinopla/quick_flipbook
- **THREE.js Documentation**: https://threejs.org/docs/
- **THREE.js Examples**: https://threejs.org/examples/

## Credits

- **FlipBook Library**: quick_flipbook by Bandinopla
- **3D Engine**: THREE.js
- **Magazine Content**: Events By Delightful Decor

---

**Last Updated**: November 2025  
**Version**: 1.0.0

