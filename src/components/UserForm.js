// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { CircularProgress, Button, TextField, Typography } from "@mui/material";
// import { toast } from "react-toastify";

// const UserForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       setLoading(true);
//       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then(response => {
//           setName(response.data.name);
//           setEmail(response.data.email);
//           setPhone(response.data.phone);
//           setLoading(false);
//         })
//         .catch(() => {
//           alert("Failed to fetch user data");
//           setLoading(false);
//         });
//     }
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true); 

//     const userData = { name, email, phone };

//     const request = id
//       ? axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, userData)
//       : axios.post("https://jsonplaceholder.typicode.com/users", userData);

//     request
//       .then(() => {
//         alert(id ? "User updated successfully" : "User created successfully");
//         setLoading(false);
//         navigate("/");
//       })
//       .catch(() => {
//         toast("Operation failed");
//         setLoading(false);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Typography variant="h5" gutterBottom>{id ? "Edit User" : "Create User"}</Typography>
//       <TextField
//         label="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         fullWidth
//         required
//         margin="normal"
//       />
//       <TextField
//         label="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         fullWidth
//         required
//         margin="normal"
//       />
//       <TextField
//         label="Phone"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         fullWidth
//         required
//         margin="normal"
//       />
      
//       <Button variant="contained" type="submit" disabled={loading}>
//         {loading ? <CircularProgress size={24} /> : id ? "Update User" : "Create User"}
//       </Button>
//     </form>
//   );
// };

// export default UserForm;


import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Button, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          setName(response.data.name);
          setEmail(response.data.email);
          setPhone(response.data.phone);
          setLoading(false);
        })
        .catch(() => {
          alert("Failed to fetch user data");
          setLoading(false);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 

    const userData = { name, email, phone };

    const request = id
      ? axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, userData)
      : axios.post("https://jsonplaceholder.typicode.com/users", userData); 

    request
      .then(() => {
        alert(id ? "User updated successfully" : "User created successfully");
        setLoading(false);
        navigate("/");
      })
      .catch(() => {
        toast("Operation failed");
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>{id ? "Edit User" : "Create User"}</Typography>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth required margin="normal" />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required margin="normal" />
      <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth required margin="normal" />
      <Button variant="contained" type="submit" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : id ? "Update User" : "Create User"}
      </Button>
    </form>
  );
};

export default UserForm;
