# CISMA Exhibition 2025 - Presentation Website

A professional Next.js website showcasing observations, insights, and improvement opportunities from the CISMA 2025 exhibition.

## Features

- 📹 **Video Player** - Display exhibition videos with descriptions
- 🖼️ **Image Gallery** - Interactive photo gallery with lightbox view
- 📝 **Observations & Improvements** - Organized sections for insights and opportunities
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🚀 **GitHub Pages Deployment** - Automated deployment via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+ installed
- Git installed

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Adding Your Content

### 1. Add Videos

1. Place your video files in `public/videos/`
2. Edit `content/exhibition-data.json`
3. Update the `videos` array:
   ```json
   "videos": [
     {
       "src": "/videos/your-video.mp4",
       "title": "Your Video Title",
       "description": "Description of what the video shows"
     }
   ]
   ```

### 2. Add Images

1. Place your images in `public/images/`
2. Edit `content/exhibition-data.json`
3. Update the `images` array:
   ```json
   "images": [
     {
       "src": "/images/your-photo.jpg",
       "alt": "Description for accessibility",
       "caption": "Caption displayed under the image"
     }
   ]
   ```

### 3. Update Text Content

Edit `content/exhibition-data.json` to customize:

- **Title & Subtitle** - Main hero section text
- **Introduction** - Opening paragraph
- **Observations** - Key findings from the exhibition
- **Improvements** - Opportunities you identified

Example observation entry:
```json
{
  "title": "Your Observation Title",
  "description": "Detailed description of what you observed and why it matters.",
  "icon": "🔍"
}
```

### 4. Change Colors/Styling

- Observations use **blue** color scheme
- Improvements use **green** color scheme
- Edit component files in `components/` to customize styling
- Use Tailwind CSS classes for quick modifications

## Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub repository named `CISMA2025`**

2. **Initialize Git in the project:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CISMA 2025 Exhibition site"
   ```

3. **Add remote and push:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/CISMA2025.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

5. **Automatic deployment:**
   - Every push to `main` branch triggers automatic deployment
   - Wait 2-3 minutes for the first deployment
   - Your site will be live at: `https://YOUR_USERNAME.github.io/CISMA2025`

### Updating Content

After making changes to your content:

```bash
git add .
git commit -m "Update exhibition content"
git push
```

The site will automatically rebuild and redeploy!

## Project Structure

```
cisma2025-exhibition/
├── app/
│   ├── layout.tsx          # Site layout and metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section component
│   ├── VideoPlayer.tsx     # Video player component
│   ├── ImageGallery.tsx    # Image gallery with lightbox
│   └── ObservationCard.tsx # Observation/improvement cards
├── content/
│   └── exhibition-data.json # All your content in one file
├── public/
│   ├── images/             # Your exhibition photos
│   └── videos/             # Your exhibition videos
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions deployment config
```

## Customization Tips

### Change the Hero Background

Edit `components/Hero.tsx`:
```tsx
// Change gradient colors
className="bg-gradient-to-br from-blue-600 to-blue-800"
// to
className="bg-gradient-to-br from-purple-600 to-indigo-800"
```

### Add More Sections

Edit `app/page.tsx` and add new `<section>` blocks following the existing pattern.

### Modify Layout

All sections use `max-w-6xl` container. Change this in `app/page.tsx` to adjust content width:
- `max-w-4xl` - Narrower
- `max-w-7xl` - Wider

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### Images Not Showing

- Ensure images are in `public/images/`
- Paths should start with `/images/` not `./images/`
- Check file extensions match exactly (case-sensitive)

### Videos Not Playing

- Ensure videos are in MP4 format
- Keep video file sizes reasonable (< 50MB recommended)
- Consider hosting large videos externally (YouTube, Vimeo)

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## Support

For issues with:
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **GitHub Pages**: [GitHub Pages Documentation](https://docs.github.com/pages)
- **This Project**: Check the code comments in each file

---

**Happy presenting!** 🎉
