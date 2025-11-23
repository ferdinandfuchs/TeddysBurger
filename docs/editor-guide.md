# Teddy's Burger - Editor Guide

This guide explains how to manage content on the Teddy's Burger website using Tina CMS.

---

## Table of Contents

1. [Accessing the Admin Panel](#accessing-the-admin-panel)
2. [Content Collections](#content-collections)
   - [Site Settings](#site-settings)
   - [Menu Items](#menu-items)
   - [Page Content](#page-content)
   - [Location](#location)
   - [Gallery](#gallery)
3. [Image Upload Guidelines](#image-upload-guidelines)
4. [Content Update Workflow](#content-update-workflow)
5. [Troubleshooting](#troubleshooting)

---

## Accessing the Admin Panel

### Local Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:4321/admin
   ```

3. You will see the Tina CMS admin interface with all content collections in the sidebar.

### Production (Tina Cloud)

1. Navigate to your website URL with `/admin` appended:
   ```
   https://your-domain.com/admin
   ```

2. Log in with your Tina Cloud credentials.

---

## Content Collections

### Site Settings

**Location**: Sidebar > Site Settings

This is a global settings file that cannot be created or deleted. It contains:

| Field | Description |
|-------|-------------|
| Restaurant Name | The name displayed throughout the site |
| Logo | Restaurant logo image |
| Tagline | Short slogan or description |
| Phone Number | Contact phone number |
| Email | Contact email address |
| Website Domain | Your website URL |
| Address | Full street address (multi-line) |
| Opening Hours | List of days with their hours |
| Social Links | Instagram and Facebook URLs |

**To edit Opening Hours:**
1. Click on "Opening Hours"
2. Click "Add Opening Hours" to add a new entry
3. Enter the day (e.g., "Montag - Freitag") and hours (e.g., "11:00 - 22:00")
4. Drag to reorder entries

---

### Menu Items

**Location**: Sidebar > Menu Items

Create, edit, and manage all menu items. Each item has:

| Field | Description |
|-------|-------------|
| Name | Item name (required, used for filename) |
| Description | Detailed description of the item |
| Price (€) | Price as a number (e.g., 8.90) |
| Image | Product photo |
| Category | One of: Burgers, Kids Menus, Fingerfood, Sides, Drinks |
| Available | Toggle to show/hide item on menu |

**Categories:**
- **Burgers** - Main burger items
- **Kids Menus** - Children's meals
- **Fingerfood** - Wings, nuggets, etc.
- **Sides** - Pommes, onion rings, etc.
- **Drinks** - Beverages

**To add a new menu item:**
1. Click "Menu Items" in the sidebar
2. Click "Create New" button
3. Fill in all required fields (Name, Price, Category)
4. Upload an image
5. Toggle "Available" to on
6. Save

**To mark an item as unavailable:**
1. Open the menu item
2. Toggle "Available" to off
3. Save

The item will appear grayed out on the website.

---

### Page Content

**Location**: Sidebar > Page Content

Manages the hero section on the homepage:

| Field | Description |
|-------|-------------|
| Hero Title | Main headline (e.g., "Teddy's Burger") |
| Hero Subtitle | Tagline text below title |
| Background Image | Hero background image |
| Background Video | Optional MP4 video background |
| Button Text | CTA button text (e.g., "Zur Speisekarte") |

**Tips:**
- If both image and video are set, video takes priority
- Use high-quality images (minimum 1920x1080)
- Keep video files under 10MB for performance

---

### Location

**Location**: Sidebar > Location

Restaurant location details displayed on the homepage:

| Field | Description |
|-------|-------------|
| Location Name | Name for this location |
| Address | Full street address |
| Phone Number | Location phone number |
| Opening Hours | List of days and hours |
| Location Image | Optional image of the restaurant |

---

### Gallery

**Location**: Sidebar > Gallery

Manage photos displayed in the gallery section:

| Field | Description |
|-------|-------------|
| Image | Photo to display (required) |
| Caption | Short description/title (required) |
| Display Order | Number to control sort order |

**Ordering:**
- Lower numbers appear first
- Use 1, 2, 3, etc. for desired order
- Items with the same number appear in creation order

**To add a gallery image:**
1. Click "Gallery" in the sidebar
2. Click "Create New"
3. Upload an image
4. Add a caption (this is used as alt text for accessibility)
5. Set the display order
6. Save

---

## Image Upload Guidelines

### Recommended Image Sizes

| Image Type | Recommended Size | Aspect Ratio |
|------------|------------------|--------------|
| Logo | 200x80 px | - |
| Hero Background | 1920x1080 px | 16:9 |
| Menu Item | 800x600 px | 4:3 |
| Gallery | 800x800 px | 1:1 (square) |
| Location | 1200x800 px | 3:2 |

### Best Practices

1. **File Format**: Use JPEG for photos, PNG for logos with transparency
2. **File Size**: Keep images under 500KB for fast loading
3. **Naming**: Use descriptive filenames (e.g., `classic-burger.jpg`)
4. **Quality**: Ensure images are sharp and well-lit
5. **Consistency**: Use similar lighting/styling for menu item photos

### Uploading Images

1. Click the image field
2. Click "Upload" or drag and drop
3. Wait for upload to complete
4. Image preview will appear

Images are stored in `/public/uploads/` directory.

---

## Content Update Workflow

### Making Changes

1. **Access Admin**: Go to `/admin`
2. **Select Collection**: Choose what you want to edit
3. **Make Changes**: Update fields as needed
4. **Save**: Click the Save button

### For Local Development

Changes are saved immediately to local files. The site will hot-reload to show changes.

### For Production (Tina Cloud)

1. Make your changes in the admin
2. Save the changes
3. Tina Cloud commits changes to your GitHub repository
4. Netlify automatically rebuilds and deploys the site
5. Changes appear live within a few minutes

### Content Review Process

1. Make changes in admin panel
2. Preview on the live site
3. If something looks wrong, edit again
4. For major changes, consider testing locally first

---

## Troubleshooting

### Common Issues

**Admin panel won't load**
- Ensure dev server is running (`npm run dev`)
- Check browser console for errors
- Clear browser cache

**Images not showing**
- Verify image was uploaded successfully
- Check file path in content JSON
- Ensure image exists in `/public/uploads/`

**Changes not appearing**
- Hard refresh the browser (Cmd+Shift+R / Ctrl+Shift+R)
- Check if file was saved (look for timestamp change)
- Restart dev server if needed

**Menu item not visible**
- Check if "Available" toggle is on
- Verify category is set correctly
- Ensure required fields are filled

### Getting Help

- **Technical Issues**: Contact your developer
- **Tina CMS Docs**: https://tina.io/docs
- **GitHub Issues**: Check the project repository

---

## Quick Reference

### Keyboard Shortcuts in Admin

- `Cmd/Ctrl + S` - Save current document
- `Cmd/Ctrl + Z` - Undo last change

### File Locations

- Content files: `/content/`
- Uploaded images: `/public/uploads/`
- Site settings: `/content/settings/index.json`
- Menu items: `/content/menu/`
- Gallery: `/content/gallery/`

---

*Last updated: November 2025*
