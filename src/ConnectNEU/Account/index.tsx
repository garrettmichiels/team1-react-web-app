import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";


export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="Login" />} />
        <Route path="Profile" element={<Profile />} />
        {/* <Route path="Profile/userId/*" element={<Profile />} /> */}
        <Route path="Login" element={<Login />} />
       
      </Routes>
    </div>
  );
}