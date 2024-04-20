import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userClient from "../Users/Client";
export default function Login() {
    const [signIn, setSignIn] = useState({ _id: "",
    username: "", 
    password: ""});

  const [user, setUser] = useState({ _id: "",
  username: "", 
  password: "", 
  email: "", 
  firstName: "", 
  lastName: "", 
  role: "MENTEE",
  major: "",
  following: [],
  coops: []});

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      const newUser = await userClient.registerUser(user);
      navigate("/Account/Profile");
    } catch (error : any) {
      console.error(error);
      setError(error.message);
    }
  };

  const login = async () => {
    try {
      const newUser = await userClient.loginUser(signIn);
      navigate("/Account/Profile");
    } catch (error : any) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="container">
        <div className="row align-items-center">
        {error && <div className="alert alert-danger m-2">{error}</div>}
            <div className="col align-items-center">
            <div className="align-items-center">
                <h1>Login</h1>
                
                <input
                    onChange={(e) => setSignIn({ ...signIn, username: e.target.value })}
                    value={signIn.username}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                />
                <input
                    onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
                    value={signIn.password}
                    type="password"
                    className="form-control mt-2"
                    placeholder="Password"
                />
                <br></br>
                <button onClick={login} className="btn btn-primary">
                    Login
                </button>
        </div>
        </div>
            <div className="col">
            <h2 className="mt-4">Don't have an account? Register Here</h2>
            <h4 className="mt-4" style={{textAlign: "left"}}>Enter Your Email</h4>
            <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
                type="text"
                className="form-control mt-2"
                placeholder="Email" />

          <h4 style={{textAlign: "left"}}>Enter Your First Name</h4>
            <input
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                value={user.firstName}
                type="text"
                className="form-control mt-2"
                placeholder="First Name"
            />
            <h4 style={{textAlign: "left"}}>Enter Your Last Name</h4>
            <input
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                value={user.lastName}
                type="text"
                className="form-control mt-2"
                placeholder="Last Name"
            />
            <h4 style={{textAlign: "left"}}>Enter a Username</h4>
            <input
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
                type="text"
                className="form-control"
                placeholder="Username"
            />
            <h4 style={{textAlign: "left"}}>Enter a Password</h4>
            <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                type="password"
                className="form-control"
                placeholder="Password"
            />
            <br></br>
            <button onClick={register} className="btn btn-primary">
                Register
            </button>
            </div>
        </div>
    </div>
  );
}