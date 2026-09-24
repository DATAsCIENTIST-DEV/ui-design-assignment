# UI Design Assignment

A collection of responsive UI screens built as part of a frontend UI design assignment.

The goal of this project was to take different design concepts and turn them into clean, responsive, and interactive web pages while keeping each screen visually different and easy to navigate.

The project contains **7 individual screens** along with a homepage that provides access to all of them.

## Live Demo

**Main Website:**
https://ui-design-assignment.vercel.app/

### Individual Screens

| # | Screen                         | Live Link                                                      |
| - | ------------------------------ | -------------------------------------------------------------- |
| 1 | Ride-Share Trip Details        |  https://ui-design-assignment.vercel.app/ride-trip-details
| 2 | Art Showcase Landing           | https://ui-design-assignment.vercel.app/art-showcase      |
| 3 | Travel App Landing             | https://ui-design-assignment.vercel.app/travel-landing      |
| 4 | Finance Dashboard Landing      | https://ui-design-assignment.vercel.app/finance-landing    |
| 5 | Real Estate Investment Landing | https://ui-design-assignment.vercel.app/real-estate-landing |
| 6 | Pricing Plans                  | https://ui-design-assignment.vercel.app/pricing-plans     |
| 7 | Developer Portfolio Landing    | https://ui-design-assignment.vercel.app/developer-portfolio |

> Replace `https://your-app.vercel.app` with your actual Vercel deployment URL after deployment.

---

## Screens Included

### 1. Ride-Share Trip Details

A ride-sharing trip details interface focused on presenting trip information in a clear and organized way.

**Route:** `/ride-trip-details`

**Highlights:**

* Trip information
* Location details
* Driver/ride information
* Clean card-based layout
* Responsive design
* Interactive UI elements

---

### 2. Art Showcase Landing

A visually focused landing page designed for showcasing artwork and creative work.

**Route:** `/art-showcase`

**Highlights:**

* Artwork-focused layout
* Large visual sections
* Modern typography
* Smooth animations
* Responsive presentation

---

### 3. Travel App Landing

A travel-focused landing page designed around destinations, exploration, and trip discovery.

**Route:** `/travel-landing`

**Highlights:**

* Travel destination sections
* Hero section
* Call-to-action elements
* Responsive layout
* Smooth page animations

---

### 4. Finance Dashboard Landing

A modern finance-oriented interface with a dashboard-style visual structure.

**Route:** `/finance-landing`

**Highlights:**

* Financial information cards
* Dashboard-inspired layout
* Data-focused UI
* Clean navigation
* Responsive design

---

### 5. Real Estate Investment Landing

A landing page focused on real estate and investment-related content.

**Route:** `/real-estate-landing`

**Highlights:**

* Property/investment sections
* Financial information presentation
* Modern landing page structure
* Responsive design
* Interactive elements

---

### 6. Pricing Plans

A pricing page designed to present different plans in a simple and easy-to-compare format.

**Route:** `/pricing-plans`

**Highlights:**

* Pricing cards
* Plan comparison
* Clear call-to-action buttons
* Responsive layout
* Modern UI styling

---

### 7. Developer Portfolio Landing

A developer portfolio-style landing page presenting skills, projects, and professional information.

**Route:** `/developer-portfolio`

**Highlights:**

* Developer introduction
* Skills and technologies
* Project sections
* Call-to-action areas
* Responsive portfolio layout

---

# Tech Stack

The project was built using the following technologies:

### Next.js

Used as the main React framework for building the application and handling the different routes/screens.

### React

Used to build reusable UI components and structure the individual pages.

### TypeScript

Used throughout the project to keep the code more structured and maintainable.

### Tailwind CSS

Used for styling, responsive layouts, spacing, typography, and overall UI implementation.

### shadcn/ui

Used where appropriate for reusable and accessible UI components.

### Framer Motion

Used to add smooth animations and transitions to different parts of the interface.

### Lucide React

Used for lightweight and consistent icons throughout the project.

---

# Project Structure

The project follows a Next.js application structure.

```text
ui-design-assignment/
│
├── app/
│   ├── page.tsx
│   │
│   ├── ride-trip-details/
│   │   └── page.tsx
│   │
│   ├── art-showcase/
│   │   └── page.tsx
│   │
│   ├── travel-landing/
│   │   └── page.tsx
│   │
│   ├── finance-landing/
│   │   └── page.tsx
│   │
│   ├── real-estate-landing/
│   │   └── page.tsx
│   │
│   ├── pricing-plans/
│   │   └── page.tsx
│   │
│   └── developer-portfolio/
│       └── page.tsx
│
├── components/
│   └── reusable UI components
│
├── public/
│   └── images and static assets
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

*The exact folder structure may vary slightly depending on the final project setup.*

---

# Features

* 7 different UI screens
* Dedicated routes for every screen
* Responsive design for desktop, tablet, and mobile
* Shared homepage navigation
* Smooth page and component animations
* Reusable React components
* Modern typography and spacing
* Interactive buttons and navigation
* Clean component-based structure
* TypeScript support
* Tailwind CSS styling
* Accessible UI elements where applicable

---

# Responsive Design

The screens were designed to work across different screen sizes rather than only targeting desktop displays.

The layouts were tested with both:

* Desktop screens
* Tablet-sized screens
* Mobile screens

Special attention was given to:

* Flexible layouts
* Text scaling
* Navigation
* Card layouts
* Spacing
* Image sizing
* Button placement
* Mobile-friendly sections

---

# Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/ui-design-assignment.git
```

## 2. Move into the project

```bash
cd ui-design-assignment
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

# Available Routes

After starting the project, the following routes are available:

```text
/
```

Main homepage with navigation to all screens.

```text
/ride-trip-details
```

Ride-share trip details screen.

```text
/art-showcase
```

Art showcase landing page.

```text
/travel-landing
```

Travel application landing page.

```text
/finance-landing
```

Finance dashboard landing page.

```text
/real-estate-landing
```

Real estate investment landing page.

```text
/pricing-plans
```

Pricing plans page.

```text
/developer-portfolio
```

Developer portfolio landing page.

---

# Design Approach

For this assignment, I focused on keeping each screen visually distinct while maintaining a consistent level of quality across the project.

Instead of using the same layout for every page, each screen has its own visual direction based on its purpose.

The main things I focused on were:

* Clear visual hierarchy
* Good spacing
* Responsive layouts
* Consistent typography
* Simple navigation
* Meaningful use of animations
* Clean and readable interfaces

I also tried to keep animations subtle so that they support the design instead of distracting from the actual content.

---

# Deployment

The project can be deployed using Vercel.

After connecting the GitHub repository to Vercel, the application can be deployed directly from the repository.

Once deployed, each screen can be accessed using its individual route.

For example:

```text
https://your-app.vercel.app/ride-trip-details
https://your-app.vercel.app/art-showcase
https://your-app.vercel.app/travel-landing
https://your-app.vercel.app/finance-landing
https://your-app.vercel.app/real-estate-landing
https://your-app.vercel.app/pricing-plans
https://your-app.vercel.app/developer-portfolio
```

---

# What I Practiced

This project helped me work with:

* Next.js routing
* React component development
* TypeScript
* Tailwind CSS
* Responsive UI development
* Framer Motion animations
* Reusable components
* Landing page design
* Dashboard-style interfaces
* Mobile-first thinking
* Git and GitHub
* Vercel deployment

---

# Future Improvements

Some possible improvements for future versions include:

* Adding more interactive states
* Improving accessibility across all screens
* Adding dark/light theme support where suitable
* Creating more reusable design components
* Adding real data to the dashboard-style screens
* Adding additional animations and micro-interactions
* Further optimizing images and page performance

---



This project was created for a UI design assignment and portfolio purposes.
