import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "@mui/material";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import PrimarySearchAppBar from "./Navber";
import React from "react";
import "./styles.css";
import NotFound from "./components/NotFound";


function App() {

  return (
    <Router>
      <PrimarySearchAppBar />
      <Container>
          <ToastContainer />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<UserForm />} />
          <Route path="/edit/:id" element={<UserForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
