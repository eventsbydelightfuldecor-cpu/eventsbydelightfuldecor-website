# Quick Image Reference Guide

## Where Each Image Appears on the Website

### Homepage (index.html)
| Section | Image File |
|---------|-----------|
| Welcome section | `Welcome_img_1.png` (already in use) |
| Gallery quick link | `quick-link-gallery.jpg` |
| Testimonials quick link | `quick-link-testimonials.jpg` |
| Contact quick link | `quick-link-contact.jpg` |

### Gallery Page (pages/gallery.html)
| Category | Image File |
|----------|-----------|
| Wedding 1 | `gallery-wedding-1.jpg` |
| Wedding 2 | `gallery-wedding-2.jpg` |
| Wedding 3 | `gallery-wedding-3.jpg` |
| Wedding 4 | `gallery-wedding-4.jpg` |
| Corporate 1 | `gallery-corporate-1.jpg` |
| Corporate 2 | `gallery-corporate-2.jpg` |
| Corporate 3 | `gallery-corporate-3.jpg` |
| Private 1 | `gallery-private-1.jpg` |
| Private 2 | `gallery-private-2.jpg` |

### Services Page (pages/services.html)
| Service Type | Image File |
|-------------|-----------|
| Wedding Planning | `service-wedding.jpg` |
| Corporate Events | `service-corporate.jpg` |
| Private Parties | `service-private.jpg` |
| Event Coordination | `service-coordination.jpg` |

### About Page (pages/about.html)
| Section | Image File |
|---------|-----------|
| Team/About photo | `about-team.jpg` |

### Testimonials Page (pages/testimonials.html)
| Section | Image File |
|---------|-----------|
| Featured testimonial | `testimonial-featured.jpg` |
| Client avatars | Styled placeholders (circular) |

---

## Image Dimensions & Sizing

All images are automatically sized to fit their containers using CSS:

- **Gallery images**: 400px height, full width
- **Service cards**: 200px height, full width
- **Quick links**: 200px height, full width
- **About photo**: 400px height, full width
- **Testimonial photo**: 300px height, full width

The `object-fit: cover` CSS property ensures images:
- Never stretch or distort
- Fill the entire container
- Maintain their aspect ratio
- Are centered and cropped as needed

---

## Need to Update an Image?

1. **Replace the file** in the `/images` folder with the same filename
2. **Or rename** a new image to match the filename shown above
3. **Refresh** the browser to see changes

All images should be:
- High quality (at least 1200px width recommended)
- JPG or PNG format
- Optimized for web (compressed but not too much)

