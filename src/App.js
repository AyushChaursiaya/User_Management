// Import necessary libraries and components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // For routing in the application
import { ToastContainer } from "react-toastify"; // For displaying toast notifications
import { Container } from "@mui/material"; // Material-UI component for layout
import UserList from "./components/UserList"; // Component to display the list of users
import UserForm from "./components/UserForm"; // Component for user form (create/edit)
import PrimarySearchAppBar from "./Navber"; // Navigation bar component
import React from "react"; // Import React
import "./styles.css"; // Import custom styles
import NotFound from "./components/NotFound"; // Component for handling 404 Not Found routes

// Define the main App component
function App() {
  return (
    // Set up Router for handling navigation
    <Router>
      {/* Render the navigation bar */}
      <PrimarySearchAppBar />
      <Container>
        {/* Container for notifications */}
        <ToastContainer />
        
        {/* Define application routes */}
        <Routes>
          {/* Route for the main user list page */}
          <Route path="/" element={<UserList />} />
          {/* Route for creating a new user */}
          <Route path="/create" element={<UserForm />} />
          {/* Route for editing an existing user, with dynamic ID parameter */}
          <Route path="/edit/:id" element={<UserForm />} />
          {/* Route for handling unmatched paths, showing a 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

// Export the App component as the default export
export default App;
