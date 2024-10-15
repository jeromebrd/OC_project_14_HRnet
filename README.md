# HRnet app

## Overview

HRnet is a React-based application built with Vite, offering a fast and efficient development environment. This project is set up with essential tools and libraries to facilitate building a scalable and feature-rich HR management system.

## Stack and Tools
### React + Vite
This project uses React in combination with Vite, a build tool that provides fast Hot Module Replacement (HMR) and a minimal configuration setup. The integration of React with Vite ensures faster builds and a smooth development experience.

Available React Plugins:  
**@vitejs/plugin-react** - This plugin uses **Babel** to enable Fast Refresh during development.  
**@vitejs/plugin-react-swc** - This alternative plugin uses **SWC** for Fast Refresh, offering improved build performance.  

### Additional Tools and Libraries:
- **Tailwind CSS:** A utility-first CSS framework for styling the application efficiently with predefined classes.
- **Redux Toolkit:** For managing global state in a simpler and more scalable way.
React Router: To handle navigation within the application.
- **react-modal-jeromebrd:** A custom React modal package created and published on npm. Used to create accessible modals in the app.
- **React Hook Form:** A performant, flexible, and extensible form management library for React.
- **React Data Table:** A lightweight, fast, and fully customizable data table component for displaying and managing data.
- **React Date Picker:** A lightweight and customizable date picker component for selecting dates within forms.
## React modal - publish on npm 

The `react-modal-jeromebrd` package was created to provide a simple and reusable modal component. It is published on npm and can be easily integrated into other React projects.


### Installation
To install the modal package, run the following command:  

`npm install react-modal-jeromebrd`

For more details, visit the npm package page:
https://www.npmjs.com/package/react-modal-jeromebrd?activeTab=versions

### GitHub Repository
You can find the source code for react-modal-jeromebrd on GitHub:  
https://github.com/jeromebrd/react-modal-jeromebrd

## Lighthouse Reports
Performance tests comparing jQuery and React have been conducted using Lighthouse, a tool for auditing  **web performance,accessibility, and SEO.**

The Lighthouse reports are available in the **lighthouse folder** at the **root of the project.** These reports provide insights into various performance metrics and highlight **the differences in efficiency between jQuery and React.**

**To view the reports:**

- Navigate to the root of the project.  
- Open the lighthouse folder.  
- Inside, you'll find the reports detailing the performance test results for both jQuery and React implementations. (***JSON & PDF***)