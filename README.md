# Gohil Pruthvirajsinh — Developer Portfolio

A modern, responsive personal portfolio website showcasing my projects, technical skills, development journey, and experience as a web developer and aspiring AI/ML engineer.

The portfolio is designed to provide a central place to explore my work, technical background, GitHub activity, and ways to get in touch with me.

## Overview

This portfolio combines a clean, responsive frontend with dynamic content and backend functionality.

It includes sections for:

* About Me
* Technical Skills
* Projects
* Development Journey
* GitHub Activity
* Contact

The website is built with a focus on responsive design, clean UI, accessibility, reusable components, and practical JavaScript functionality.

## Features

* Responsive design for desktop, tablet, and mobile
* Light and dark theme support
* Mobile navigation with responsive hamburger menu
* Dynamic skills and project rendering
* Project filtering
* GitHub profile and repository integration
* Dynamic GitHub repository cards
* GitHub statistics
* Interactive contact form
* Backend-powered contact form submission
* Smooth scrolling navigation
* Active navigation highlighting
* Scroll reveal animations
* Copy-to-clipboard email functionality
* Back-to-top button
* Interactive terminal section
* Responsive UI across different screen sizes

## Technologies

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap
* Tailwind CSS
* jQuery

### Backend

* Node.js
* Express.js
* Nodemailer

### Database

* MongoDB

### Tools & Services

* Git
* GitHub
* VS Code
* Vercel

## Project Structure

```text
portfolio/
│
├── assets/
│   ├── images/
│   └── ...
│
├── css/
│   └── style.css
│
├── js/
│   ├── config.js
│   └── main.js
│
├── index.html
├── README.md
└── ...
```

> The exact structure may vary as the project continues to evolve.

## Dynamic Functionality

The portfolio is not limited to static frontend content.

### GitHub Integration

The website connects to the GitHub API to dynamically display:

* Public repository count
* Followers
* Repository stars
* Recently updated repositories
* Repository descriptions
* Repository languages
* Repository links

This allows the GitHub section of the portfolio to stay updated without manually editing the website whenever a repository changes.

### Contact Form

The contact form uses a Node.js and Express backend to process messages.

Nodemailer is used for email delivery, while environment variables are used to keep sensitive configuration values outside the source code.

## Design

The portfolio follows a modern developer-focused design with:

* Minimal interface
* Responsive layouts
* Dark and light themes
* Consistent typography
* Interactive cards
* Subtle animations
* Mobile-first considerations

The goal is to keep the interface professional while still showing personality and technical ability.

## Featured Projects

Some of the projects showcased in the portfolio include:

### BoozeHub

A PHP and MySQL based e-commerce web application featuring authentication, product management, shopping cart functionality, checkout, order processing, inventory management, and an admin dashboard.

### DairyPro

A dairy management system developed using PHP and MySQL for managing dairy-related operations and data.

### Portfolio Website

This portfolio itself, featuring dynamic content, GitHub integration, a backend-powered contact form, and responsive frontend interactions.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/gohilpruthvirajsinh610-del/portfolio.git
```

### 2. Open the project

Open the project folder in VS Code.

### 3. Configure the application

Update the configuration values in the project's configuration file and add the required environment variables for backend functionality.

Do not commit sensitive credentials or `.env` files to GitHub.

### 4. Run the frontend

The frontend can be opened using a local development server such as VS Code Live Server.

If the backend is required, install the server dependencies and start the Node.js application.

## Environment Variables

Sensitive configuration values should be stored in environment variables rather than committed to the repository.

Example:

```env
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-app-password
```

Do not expose real credentials in the repository.

## Deployment

The portfolio frontend and backend can be deployed separately depending on the hosting environment.

The project is structured so that the frontend can be hosted as a static website while the Node.js backend handles dynamic contact-form functionality.

## What This Project Demonstrates

This portfolio demonstrates practical experience with:

* Responsive web development
* Frontend UI development
* JavaScript DOM manipulation
* API integration
* Backend development with Node.js
* Express.js
* MongoDB
* Email integration
* Git and GitHub
* Deployment and hosting
* Responsive design
* Web accessibility
* Project organization

## Author

**Gohil Pruthvirajsinh**

BCA Graduate
Web Developer | Aspiring AI/ML Engineer

GitHub: [gohilpruthvirajsinh610-del](https://github.com/gohilpruthvirajsinh610-del)
