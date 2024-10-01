// Import necessary libraries and components
import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library for rendering
import './index.css'; // Import global CSS styles
import App from './App'; // Import the main App component

// Create a root element to render the React application
const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root DOM element by its ID

// Render the application inside the root element
root.render(
  <React.StrictMode> {/* Enable StrictMode for highlighting potential problems in the application */}
    <App /> {/* Render the main App component */}
  </React.StrictMode>
);
