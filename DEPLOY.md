# Deploy to GitHub Pages - Quick Guide

## Prerequisites
✅ Git is installed (version 2.51.0.windows.1)
✅ Website files are ready in `f:\Projects\vALENTINE`

## Step-by-Step Deployment

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Valentine's Day prank website"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it: `valentine-prank` (or any name you like)
4. **Important**: Do NOT initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 3: Connect and Push
After creating the repository, GitHub will show you commands. Use these:
```bash
git remote add origin https://github.com/YOUR-USERNAME/valentine-prank.git
git branch -M main
git push -u origin main
```
(Replace `YOUR-USERNAME` with your actual GitHub username)

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 5: Get Your Live URL
Your website will be live at:
```
https://YOUR-USERNAME.github.io/valentine-prank/
```

## 🚀 Automated Deployment Script

I've created a script to automate Steps 1 and 3. You'll still need to:
1. Create the GitHub repository manually (Step 2)
2. Enable GitHub Pages (Step 4)

---

## Need Help?

If you encounter any issues:
- **Authentication Error**: You may need to set up a Personal Access Token
- **Push Rejected**: Make sure you created an empty repository (no README)
- **Pages Not Working**: Wait a few minutes and refresh

Let me know if you need help with any step! 💝
