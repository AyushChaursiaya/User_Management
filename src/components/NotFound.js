import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation functionality

const NotFound = () => {
    // Hook to access the navigate function, allowing navigation between routes
    const navigate = useNavigate(); 

    // Function to navigate back to the home page
    const handleGoHome = () => {
        navigate("/"); // Navigate to the root path (home page)
    };

    return (
        <div style={{ 
            display: 'flex', // Using flexbox to align items
            flexDirection: 'column', // Arrange items in a column
            alignItems: 'center', // Center items horizontally
            justifyContent: 'center', // Center items vertically
            height: '100vh', // Make the div take full viewport height
            textAlign: 'center' // Center text alignment
        }}>
            {/* Heading for the 404 Not Found message */}
            <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Not Found 404</h3>
            {/* Additional message to inform users that the page does not exist */}
            <p style={{ marginBottom: '20px' }}>The page you are looking for does not exist.</p>
            {/* Button to navigate back to the home page */}
            <button 
                onClick={handleGoHome} // Call handleGoHome function on button click
                style={{ 
                    padding: '10px 20px', // Button padding for better appearance
                    fontSize: '16px', // Font size for button text
                    cursor: 'pointer' // Change cursor to pointer on hover
                }}
            >
                Go to Home {/* Button text */}
            </button>
        </div>
    );
}

export default NotFound; // Exporting the NotFound component for use in other parts of the application
