# Paradise Nursery Shopping App - README

## 🌿 Project Overview
Paradise Nursery is a React-based e-commerce application for an online plant shop featuring:
- Product listings with plant details
- Shopping cart functionality
- Responsive navigation
- State management with Redux

## 🚀 Deployment

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- GitHub account

### Steps to Deploy

1. **Push your code to GitHub:**
```bash
git add .
git commit -m "Completed Paradise Nursery project"
git push origin main
```

2. **Install gh-pages:**
```bash
npm install gh-pages --save-dev
```

3. **Add deployment configuration to `package.json`:**
```json
"homepage": "https://[your-username].github.io/[your-repo-name]",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. **Deploy to GitHub Pages:**
```bash
npm run deploy
```

## 🛠 Development Setup

1. **Clone the repository:**
```bash
git clone https://github.com/[your-username]/[your-repo-name].git
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

## 📂 Project Structure
```
src/
├── components/
│   ├── CartItems.jsx
│   ├── LandingPage.jsx
│   └── ProductList.jsx
├── features/
│   └── CartSlice.jsx
├── App.jsx
├── main.jsx
└── store.js
```

## 🌟 Features
- Product catalog with plant details
- Add/remove items from cart
- Quantity adjustment
- Real-time cart updates
- Responsive design

## 🛒 Live Demo
[View deployed application](https://[your-username].github.io/[your-repo-name])

## 📝 Notes
- The application uses React Router for navigation
- Redux Toolkit manages global state
- GitHub Pages hosts the production build

Replace `[your-username]` and `[your-repo-name]` with your actual GitHub username and repository name.
