// Import necessary libraries and components
import React, { useState, useEffect } from "react"; // React and hooks for managing state and lifecycle
import { useNavigate, useParams } from "react-router-dom"; // Hooks for navigation and extracting route parameters
import axios from "axios"; // Axios for making HTTP requests
import { CircularProgress, Button, TextField, Typography } from "@mui/material"; // Material-UI components
import { toast } from "react-toastify"; // Library for toast notifications

// Define the UserForm component
const UserForm = () => {
  // State variables to manage form inputs and loading state
  const [name, setName] = useState(""); // To store the user's name
  const [email, setEmail] = useState(""); // To store the user's email
  const [phone, setPhone] = useState(""); // To store the user's phone number
  const [loading, setLoading] = useState(false); // To manage loading state during API calls
  const { id } = useParams(); // Extract user ID from URL parameters, if editing an existing user
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Effect hook to fetch user data for editing when the component mounts
  useEffect(() => {
    // Check if an ID is present, meaning we are editing an existing user
    if (id) {
      setLoading(true); // Set loading state to true
      // Fetch user data from the API
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          // Update form fields with fetched user data
          setName(response.data.name);
          setEmail(response.data.email);
          setPhone(response.data.phone);
          setLoading(false); // Set loading to false after fetching
        })
        .catch(() => {
          alert("Failed to fetch user data"); // Alert on error
          setLoading(false); // Set loading to false on error
        });
    }
  }, [id]); // Dependency array to run effect only when `id` changes

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true during submission

    // Construct the user data object
    const userData = { name, email, phone };

    // Determine whether to update or create a user based on presence of `id`
    const request = id
      ? axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, userData) // Update request if editing
      : axios.post("https://jsonplaceholder.typicode.com/users", userData); // Create request if new user

    // Execute the API request
    request
      .then(() => {
        // Show success message based on operation
        alert(id ? "User updated successfully" : "User created successfully");
        setLoading(false); // Set loading to false after request
        navigate("/"); // Navigate back to the user list
      })
      .catch(() => {
        toast("Operation failed"); // Show error message if request fails
        setLoading(false); // Set loading to false on error
      });
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      {/* Heading for form */}
      <Typography variant="h5" gutterBottom>{id ? "Edit User" : "Create User"}</Typography>
      {/* Input field for user's name */}
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update name state on change
        fullWidth
        required // Make field required
        margin="normal"
      />
      {/* Input field for user's email */}
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update email state on change
        fullWidth
        required // Make field required
        margin="normal"
      />
      {/* Input field for user's phone */}
      <TextField
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)} // Update phone state on change
        fullWidth
        required // Make field required
        margin="normal"
      />
      {/* Submit button */}
      <Button variant="contained" type="submit" disabled={loading}>
        {/* Show loading spinner while loading, otherwise show button text */}
        {loading ? <CircularProgress size={24} /> : id ? "Update User" : "Create User"}
      </Button>
    </form>
  );
};

// Export the UserForm component as the default export
export default UserForm;
