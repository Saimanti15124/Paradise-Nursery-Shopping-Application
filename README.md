# Paradise-Nursery-Shopping-Application
# Deployment instructions
1. Push code
  git add .
  git commit -m "Completed Paradise Nursery project"
  git push origin main

2. Install gh-pages
   npm install gh-pages --save-dev

3. Add these to package.json:
   "homepage": "https://[your-username].github.io/[your-repo-name]",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

4. Deploy to GitHub
   npm run deploy
