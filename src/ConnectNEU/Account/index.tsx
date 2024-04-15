import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";


export default function Account() {
  return (
    <div className="container-fluid">
      <h1>Account</h1>
      <Routes>
        <Route path="/" element={<Navigate to="Login" />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Login" element={<Login />} />
       
      </Routes>
    </div>
  );
}