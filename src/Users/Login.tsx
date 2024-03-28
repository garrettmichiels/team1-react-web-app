import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userClient from "./Client";
export default function Login() {
  const [user, setUser] = useState({ username: "", password: "", email: "", firstName: "", lastName: ""});
  const navigate = useNavigate();
  const login = async () => {
    try {
      const newUser = await userClient.loginUser(user);
      navigate("/Profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="" style={{minHeight: "100vh"}}>
        <div className="row align-content-center">
          <div className="col">
            <h1>Login</h1>
          </div>
          <div className="col">
            <h2>Don't have an account?</h2>
                <h2>Register Here</h2>
            </div>
          </div>
        <div className="row align-content-center" style={{minHeight: "100vh"}}>
            <div className="col">
                
                <input
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    value={user.username}
                    type="text"
                    className="form-control mt-2"
                    placeholder="Username"
                />
                <input
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                    type="password"
                    className="form-control mt-2"
                    placeholder="Password"
                />
                <br></br>
                <button onClick={login} className="btn btn-primary">
                    Login
                </button>
        </div>
            <div className="col">
              <h4 style={{textAlign: "left"}}>First Name</h4>
            <input
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                value={user.firstName}
                type="text"
                className="form-control mt-2"
                placeholder="First Name"
            />
            <h4 style={{textAlign: "left"}}>Last Name</h4>
            <input
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                value={user.lastName}
                type="text"
                className="form-control mt-2"
                placeholder="Last Name"
            />

            <h4 style={{textAlign: "left"}}>Username</h4>
            <input
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
                type="text"
                className="form-control mt-2"
                placeholder="Username"
            />
            <h4 style={{textAlign: "left"}}>Password</h4>
            <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                type="password"
                className="form-control mt-2"
                placeholder="Password"
            />
            <br></br>
            <button onClick={login} className="btn btn-primary">
                Register
            </button>
            </div>
        </div>
    </div>
  );
}