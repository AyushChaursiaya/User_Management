// Import necessary libraries and components
import React, { useEffect, useState } from "react"; // React and hooks for managing state and lifecycle
import axios from "axios"; // Axios for making HTTP requests
import { Link } from "react-router-dom"; // Link component for navigation
import { CircularProgress, Button, Typography, List, ListItem, ListItemText, Box } from "@mui/material"; // Material-UI components

// Define the UserList component
const UserList = () => {
    // State variables
    const [users, setUsers] = useState([]); // To store the list of users
    const [loading, setLoading] = useState(true); // To manage loading state
    const [error, setError] = useState(null); // To store error messages

    // Effect hook to fetch users when the component mounts
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users") // Fetch users from API
            .then((response) => {
                setUsers(response.data); // Update users state with fetched data
                setLoading(false); // Set loading to false after fetching
            })
            .catch((err) => {
                setError("Failed to fetch users"); // Set error message if fetching fails
                setLoading(false); // Set loading to false
            });
    }, []); // Empty dependency array ensures this runs only once

    // Function to delete a user
    const deleteUser = (id) => {
        setLoading(true); // Set loading to true while deleting
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`) // Send DELETE request
            .then(() => {
                setUsers(users.filter(user => user.id !== id)); // Update users state to remove deleted user
                setLoading(false); // Set loading to false
            })
            .catch(() => {
                setError("Failed to delete user"); // Set error message if deletion fails
                setLoading(false); // Set loading to false
            });
    };

    // Show loading spinner while data is being fetched
    if (loading) return <CircularProgress />;

    // Render user list
    return (
        <Box>
            {/* Button to navigate to the user creation page */}
            <Button variant="contained" component={Link} to="/create" style={{ marginTop: "10px" }}>
                Create New User
            </Button>
            {/* Heading for the user list */}
            <Typography variant="h5" gutterBottom style={{ margin: "10px 0" }}>User List</Typography>
            {/* Display error message if there's an error */}
            {error && <Typography color="error">{error}</Typography>}
            {/* List of users */}
            <List className="user-list">
                {users.map(user => (
                    <ListItem key={user.id} divider>
                        {/* Display user name and contact information */}
                        <ListItemText primary={user.name} secondary={`${user.email} | ${user.phone}`} />
                        {/* Container for edit and delete buttons */}
                        <Box className="user-ED">
                            {/* Button to edit user, navigates to edit page */}
                            <Button variant="outlined" component={Link} to={`/edit/${user.id}`}>
                                Edit
                            </Button>
                            {/* Button to delete user */}
                            <Button variant="outlined" color="error" onClick={() => deleteUser(user.id)}>
                                Delete
                            </Button>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

// Export the UserList component as the default export
export default UserList;
