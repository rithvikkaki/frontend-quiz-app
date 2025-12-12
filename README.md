🎨 Frontend Developer Assignment – Quiz Application

A fully responsive, pixel-perfect quiz interface built using React, TypeScript, Vite, and Tailwind CSS.
This project is created as part of a Frontend Developer Assignment, following the provided Figma design and prototype with high accuracy.

🚀 Live Demo

🔗 Live URL: To be added after Vercel deployment
🔗 GitHub Repository: https://github.com/rithvikkaki/frontend-quiz-app

📌 Project Overview

This is a multi-question quiz application where the user:

Reads a question

Selects an option

Navigates between questions using Next/Prev

Views a progress bar

Gets a final score screen at the end

All UI elements, spacing, typography, and styling are created to match the Figma design as closely as possible.

🛠 Tech Stack
Category	Technology
Framework	React 18 + TypeScript
Build Tool	Vite
Styling	Tailwind CSS
Animations	CSS transitions (Framer Motion optional)
Deployment	Vercel
State Mgmt	React useState
🎯 Key Features Implemented
✅ Pixel-Perfect Implementation

Layout, spacing, sizes, shadows, and rounding based on Figma specifications

Accurate typography and color scheme

Proper reusable components

✅ Interactive Quiz Flow

Stores selected answers

Disables “Next” until an option is selected

Allows “Previous” navigation

Shows a final score at the end

✅ Progress Indicator

Smooth progress bar animation

Percentage updates in real-time

✅ Accessibility

Semantic HTML tags

Keyboard-accessible buttons

High-contrast text

ARIA friendly labels

✅ Clean Code & Architecture

Modular component structure:

QuestionCard

ProgressBar

NavigationButtons

Result

Quiz

TypeScript types for safer code

All assets organized in folders

📁 Folder Structure
frontend/
│── public/
│── src/
│   ├── assets/
│   │   ├── cat-paw.png
│   │   ├── bubble.jpg
│   │   └── ...
│   ├── components/
│   │   ├── ProgressBar.tsx
│   │   ├── QuestionCard.tsx
│   │   ├── NavigationButtons.tsx
│   │   ├── Result.tsx
│   │   └── Quiz.tsx
│   ├── data/
│   │   └── questions.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│── README.md
│── package.json
│── tailwind.config.js
└── vite.config.ts

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/rithvikkaki/frontend-quiz-app.git
cd frontend-quiz-app/frontend

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


App runs at:

👉 http://localhost:5173/

4️⃣ Build for Production
npm run build

🌐 Deployment Instructions (Vercel)
1️⃣ Go to https://vercel.com
2️⃣ Login with GitHub
3️⃣ Import Repository

Choose:

frontend-quiz-app

4️⃣ Set correct root directory:
frontend

5️⃣ Build Settings
Framework: Vite
Build Command: npm run build
Output Directory: dist

6️⃣ Click Deploy

You will get a live URL.
Add that URL at the top of this README.

🧠 Assumptions Made

Only desktop layout required (as per assignment)

Questions are static (no API integration needed)

Used local state for simplicity

Tailwind used for styling instead of styled-components / CSS modules

⏱ Time Spent
Task	Hours
Understanding Figma & setup	1 hr
React + Tailwind component structure	2 hrs
Quiz logic & navigation	1.5 hrs
Styling + pixel-perfect tweaks	2 hrs
Testing + debugging	1 hr
Deployment + documentation	1 hr

Total: ~8–9 hours

📸 Screenshots (Optional)

(Add screenshots of your final UI here after deployment)

👤 Author

Rithvik Kaki
GitHub: https://github.com/rithvikkaki
