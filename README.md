# DevWorld – Developer Portfolio

A responsive developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. DevWorld showcases my technical skills and projects while allowing visitors to explore my work and search through the projects displayed. It allows addition of new projects as well.

## Features

- **Responsive Design:** A clean interface designed to work across different screen sizes.
- **Hero Section:** Introduces the developer and provides navigation to other sections.
- **Technical Skills:** Displays technical skills in organised cards.
- **Project Showcase:** Displays projects with descriptions, technologies used, preview images, and optional live project links.
- **Dynamic Project Search:** Search projects by title, category, or description.
- **Add New Projects:** A form allows users to add projects dynamically without refreshing the page.
- **Form Validation:** Required fields help ensure important project information is provided.

## Technologies Used

- React – Building reusable UI components.
- JavaScript (ES6+) – Application logic and interactivity.
- Tailwind CSS v4 – Styling and responsive layouts.
- Vite – Development server and build tool.
- HTML5 – Application structure.

## Project Structure

```text
DevWorld/
├── public/
│   └── images/
│       └── project-preview-images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── ProjectList.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ProjectForm.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

Follow these instructions to run the project locally.

### 1. Clone the repository

```bash
git clone git@github.com:Wendy400/React-Portfolio.git
```

### 2. Navigate into the project directory

```bash
cd DevWorld
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application in your browser.

## How It Works

### Component Structure

The application is divided into reusable React components:

- **Navbar:** Provides navigation between sections.
- **Hero:** Introduces the portfolio.
- **Skills:** Displays technical skills.
- **ProjectList:** Displays project cards and handles project searching and the add-project form.
- **ProjectCard:** Displays individual project information, images, technologies, and optional live links.
- **ProjectForm:** Collects information and allows users to add new projects.

### State Management

React's `useState` hook manages the application's dynamic data, including:

- The list of projects.
- The search input.
- The visibility of the project form.

When a new project is submitted, the application updates its state and displays the new project without requiring a page refresh.

**Note:** Projects added through the form are stored in React state only. They are not permanently saved and will disappear when the page is refreshed.

## Future Improvements

Some features I would like to introduce in future versions include:

- A dedicated footer with GitHub and other social links.
- Persistent project storage using local storage or a backend.
- Improved project management functionality (eg a remove button to added or existing projects.)
- Additional responsive design refinements.
- More interactive UI elements and animations.

## Learning Outcomes

Building DevWorld provided an opportunity to practise:

- Creating reusable React components.
- Passing data between components using props.
- Managing application state with `useState`.
- Handling events and form submissions.
- Rendering dynamic content using `.map()`.
- Filtering arrays using `.filter()`.
- Applying conditional rendering.
- Styling responsive interfaces using Tailwind CSS.
- Managing project changes using Git and GitHub.

## Author

**Wendy Wambui Wahome**

Aspiring Software Developer


---

