// Importing necessary libraries and components from React and Material-UI
import * as React from 'react'; // Import React
import { styled, alpha } from '@mui/material/styles'; // Import styled and alpha for styling components
import AppBar from '@mui/material/AppBar'; // Import AppBar for the top navigation bar
import Box from '@mui/material/Box'; // Import Box for layout
import Toolbar from '@mui/material/Toolbar'; // Import Toolbar for containing items in AppBar
import IconButton from '@mui/material/IconButton'; // Import IconButton for clickable icons
import Typography from '@mui/material/Typography'; // Import Typography for text styling
import InputBase from '@mui/material/InputBase'; // Import InputBase for styled input fields
import Badge from '@mui/material/Badge'; // Import Badge for displaying notifications count
import MenuItem from '@mui/material/MenuItem'; // Import MenuItem for menu options
import Menu from '@mui/material/Menu'; // Import Menu for dropdown menus
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon for the menu button
import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon for the search field
import AccountCircle from '@mui/icons-material/AccountCircle'; // Import AccountCircle for user profile
import MailIcon from '@mui/icons-material/Mail'; // Import MailIcon for messages
import NotificationsIcon from '@mui/icons-material/Notifications'; // Import NotificationsIcon for notifications
import MoreIcon from '@mui/icons-material/MoreVert'; // Import MoreIcon for additional options

// Styled component for the search container
const Search = styled('div')(({ theme }) => ({
  position: 'relative', // Positioning for the search bar
  borderRadius: theme.shape.borderRadius, // Rounded corners using theme's shape
  backgroundColor: alpha(theme.palette.common.white, 0.15), // Semi-transparent background
  '&:hover': { // Change background color on hover
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2), // Right margin
  marginRight: 0, // Reset right margin for smaller screens
  width: '100%', // Full width on small screens
  [theme.breakpoints.up('sm')]: { // Adjust width on larger screens
    marginRight: theme.spacing(3),
    width: 'auto',
  },
}));

// Styled component for the search icon wrapper
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2), // Padding for the icon
  height: '100%', // Full height
  position: 'absolute', // Absolute positioning
  pointerEvents: 'none', // Disable pointer events for this element
  display: 'flex', // Flexbox for alignment
  alignItems: 'center', // Center align items vertically
  justifyContent: 'center', // Center align items horizontally
}));

// Styled component for the input base in the search field
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit', // Inherit color from parent
  '& .MuiInputBase-input': { // Styling for the input element
    padding: theme.spacing(1, 1, 1, 0), // Padding for the input
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Adjust left padding to make space for the icon
    transition: theme.transitions.create('width'), // Transition for width change
    width: '100%', // Full width on small screens
    [theme.breakpoints.up('md')]: { // Adjust width on medium screens
      width: '20ch', // Set width to 20 characters
    },
  },
}));

// Primary AppBar component
export default function PrimarySearchAppBar() {
  // State variables to manage menu visibility
  const [anchorEl, setAnchorEl] = React.useState(null); // State for profile menu
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null); // State for mobile menu

  // Determine if menus are open
  const isMenuOpen = Boolean(anchorEl); // Check if profile menu is open
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl); // Check if mobile menu is open

  // Handler to open profile menu
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element for the menu
  };

  // Close mobile menu
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null); // Reset mobile menu state
  };

  // Close both menus
  const handleMenuClose = () => {
    setAnchorEl(null); // Close profile menu
    handleMobileMenuClose(); // Close mobile menu
  };

  // Open mobile menu
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget); // Set the anchor element for mobile menu
  };

  // Menu ID for profile menu
  const menuId = 'primary-search-account-menu'; 

  // Render the profile menu
  const renderMenu = (
    <Menu
      anchorEl={anchorEl} // Anchor for positioning
      anchorOrigin={{
        vertical: 'top', // Vertical alignment
        horizontal: 'right', // Horizontal alignment
      }}
      id={menuId} // ID for the menu
      keepMounted // Keep mounted for performance
      transformOrigin={{
        vertical: 'top', // Transform origin
        horizontal: 'right', // Transform origin
      }}
      open={isMenuOpen} // Open state
      onClose={handleMenuClose} // Close handler
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem> {/* Profile option */}
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> {/* Account option */}
    </Menu>
  );

  // Menu ID for mobile menu
  const mobileMenuId = 'primary-search-account-menu-mobile'; 

  // Render the mobile menu
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl} // Anchor for positioning
      anchorOrigin={{
        vertical: 'top', // Vertical alignment
        horizontal: 'right', // Horizontal alignment
      }}
      id={mobileMenuId} // ID for the mobile menu
      keepMounted // Keep mounted for performance
      transformOrigin={{
        vertical: 'top', // Transform origin
        horizontal: 'right', // Transform origin
      }}
      open={isMobileMenuOpen} // Open state
      onClose={handleMobileMenuClose} // Close handler
    >
      {/* Messages option */}
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error"> {/* Notification badge */}
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      {/* Notifications option */}
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error"> {/* Notification badge */}
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      {/* Profile option in mobile menu */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // Render the AppBar with the toolbar and menu items
  return (
    <Box sx={{ flexGrow: 1 }} style={{width: "100%"}}>
      <AppBar position="static"> {/* Static AppBar */}
        <Toolbar> {/* Toolbar to contain elements */}
          {/* Menu icon for mobile view */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }} // Margin right
          >
            <MenuIcon />
          </IconButton>
          {/* Application title */}
          <Typography
            variant="h6" // Typography variant
            noWrap // Prevent wrapping
            component="div" // Render as a div
            sx={{ display: { xs: 'none', sm: 'block' } }} // Responsive display
          >
            User Management Application
          </Typography>
          {/* Search bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…" // Placeholder text
              inputProps={{ 'aria-label': 'search' }} // Accessibility label
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} /> {/* Spacer */}
          {/* Desktop menu items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 2 new mails" color="inherit">
              <Badge badgeContent={2} color="error"> {/* Notification badge */}
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={10} color="error"> {/* Notification badge */}
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen} // Open profile menu
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          {/* Mobile menu button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen} // Open mobile menu
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu} {/* Render mobile menu */}
      {renderMenu} {/* Render profile menu */}
    </Box>
  );
}
