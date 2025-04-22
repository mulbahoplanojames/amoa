# AMOA Tech Solutions 🚀

> Empowering learners and organizations with modern, scalable web solutions and data-driven insights.

![Build](https://img.shields.io/github/actions/workflow/status/username/project/build.yml)
![License](https://img.shields.io/github/license/username/project)
![Tech Stack](https://img.shields.io/badge/Next.js-React-blue)
![Version](https://img.shields.io/badge/version-0.1.0-blue)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## About

**AMOA Tech Solutions** is a next-generation platform designed to streamline the process of collecting, analyzing, and presenting educational and organizational data. Built with Next.js, TypeScript, and MongoDB, AMOA empowers both learners and administrators to interact seamlessly through dynamic surveys, course applications, and real-time dashboards.

- **Who it’s for:**

  - Educational institutions, bootcamps, and online course providers
  - Students and professionals seeking personalized learning paths
  - Organizations needing custom web solutions and feedback analytics

- **Why it exists:**
  - To bridge the gap between learners and educators with actionable insights
  - To provide a robust, scalable, and user-friendly platform for data collection and analysis
  - To offer a modern, beautiful, and responsive web experience

---

## Features

- 📝 **Dynamic Multi-Step Survey Forms**  
  Collect detailed user information, learning preferences, and goals with real-time validation.

- 📊 **Survey Response Dashboard**  
  Admins can view, filter, and export student survey responses in tabular format.

- 🔒 **Secure Data Handling**  
  All sensitive data is validated and securely stored in MongoDB.

- ⚡ **Modern UI/UX**  
  Built with Tailwind CSS, Radix UI, and Framer Motion for a delightful, responsive experience.

- 📨 **Automated Notifications**  
  Users and admins receive real-time feedback and notifications on form actions.

- 🏆 **Courses & Application Management**  
  Showcases featured courses and allows users to apply directly via integrated surveys.

- 🌐 **SEO & Accessibility Optimized**  
  Follows best practices for accessibility (a11y) and search engine optimization.

- 🛠️ **Developer Friendly**  
  Modular codebase, TypeScript types, Zod schema validation, and easy-to-extend APIs.

---

## Screenshots

![Survey Form](./public/assets/screenshot-survey.png)
![Dashboard](./public/assets/screenshot-dashboard.png)

## Live Demo

[View Live](https://amoa-tech.vercel.app)

---

## Tech Stack

- **Frontend:** Next.js (App Router), React 19, TypeScript, Tailwind CSS, Radix UI, Framer Motion, Lucide, Tabler Icons
- **Backend:** Next.js API Routes, Mongoose, MongoDB
- **Validation:** Zod, react-hook-form
- **Notifications:** react-hot-toast
- **Deployment:** Vercel
- **Other:** ESLint, PostCSS, pnpm

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- pnpm or npm
- MongoDB (local or cloud URI)

### Installation

```bash
git clone [https://github.com/username/project.git](https://github.com/username/project.git)
cd project
pnpm install
pnpm dev
# or
npm install
npm run dev
```

---

## Environment Variables

```bash
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_SITE_URL=your_site_url
```

---

## Usage

1. Visit the Courses page and select "Apply Now" to launch the multi-step survey.
2. Complete all required fields; real-time validation ensures data integrity.
3. Submit your application and receive instant feedback.
4. (Admin) Navigate to the Survey Responses dashboard to review, filter, and export data.

---

API Reference

Submit Survey

```bash
POST /api/survey
```

- Request Body

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": "25",
  "phone": "1234567890",
  "department": "Engineering",
  "educationLevel": "Bachelor's",
  "coursesInterested": ["Frontend", "Backend"],
  "experienceLevel": "Intermediate",
  "learningStyle": "Visual",
  "reasonForJoining": "Upskill for a new job",
  "goals": "Become a full-stack developer",
  "heardFrom": "LinkedIn",
  "additionalComments": "Looking forward to learning!",
  "termsAccepted": true
}
```

- Response

```json
{
  "message": "Survey submitted successfully"
}
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/feature-name`
5. Open a pull request
6. For major changes, please open an issue first to discuss what you would like to change or improve.

---

## Acknowledgements

- [Next.js](https://nextjs.org) - A React framework for building server-rendered and statically generated web applications.
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for building custom designs.
- [Mongoose](https://mongoosejs.com) - A MongoDB object modeling (ODM) library for Node.js.
- [MongoDB](https://www.mongodb.com) - A NoSQL database for storing and managing data.
- [React Hook Form](https://react-hook-form.com) - A performant, flexible and extensible form management solution for React.
- [Zod](https://zod.dev) - A TypeScript-first schema description language and data validator.
- [Framer Motion](https://www.framer.com/motion) - A production-ready motion library for React.
- [Lucide](https://lucide.dev) - A collection of free and open-source icons.
- [Tabler Icons](https://tabler-icons.io) - A collection of free and open-source icons.
- [React Hot Toast](https://react-hot-toast.com) - A toast notification library for React.
- [Vercel](https://vercel.com) - A cloud platform for building and deploying web applications.

---

## License

[MIT](https://choosealicense.com/licenses/mit/)

---
