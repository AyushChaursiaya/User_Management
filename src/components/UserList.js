// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { CircularProgress, Button, Typography, List, ListItem, ListItemText, Box } from "@mui/material";

// const UserList = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/users")
//             .then((response) => {
//                 setUsers(response.data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError("Failed to fetch users");
//                 setLoading(false);
//             });
//     }, []);

//     const deleteUser = (id) => {
//         setLoading(true);
//         axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//             .then(() => {
//                 setUsers(users.filter(user => user.id !== id));
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError("Failed to delete user");
//                 setLoading(false);
//             });
//     };

//     if (loading) return <CircularProgress />;

//     return (
//         <Box>
//             <Button variant="contained" component={Link} to="/create" style={{ marginTop: "10px" }}>Create New User</Button>
//             {/* <br /> */}
//             <Typography variant="h5" gutterBottom style={{ margin: "10px 0" }}>User List</Typography>
//             {error && <Typography color="error">{error}</Typography>}
//             <List className="user-list">
//                 {users.map(user => (
//                     <ListItem key={user.id} divider>
//                         <ListItemText primary={user.name} secondary={`${user.email} | ${user.phone}`} />
//                         <Box className="user-ED">
//                             <Button variant="outlined" component={Link} to={`/edit/${user.id}`}>Edit</Button>
//                             <Button variant="outlined" color="error" onClick={() => deleteUser(user.id)}>Delete</Button>
//                         </Box>
//                     </ListItem>
//                 ))}
//             </List>
//         </Box>
//     );
// };

// export default UserList;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CircularProgress, Button, Typography, List, ListItem, ListItemText, Box } from "@mui/material";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch users");
                setLoading(false);
            });
    }, []);

    const deleteUser = (id) => {
        setLoading(true);
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to delete user");
                setLoading(false);
            });
    };

    if (loading) return <CircularProgress />;

    return (
        <Box>
            <Button variant="contained" component={Link} to="/create" style={{ marginTop: "10px" }}>Create New User</Button>
            <Typography variant="h5" gutterBottom style={{ margin: "10px 0" }}>User List</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <List className="user-list">
                {users.map(user => (
                    <ListItem key={user.id} divider>
                        <ListItemText primary={user.name} secondary={`${user.email} | ${user.phone}`} />
                        <Box className="user-ED">
                            <Button variant="outlined" component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button variant="outlined" color="error" onClick={() => deleteUser(user.id)}>Delete</Button>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default UserList;
