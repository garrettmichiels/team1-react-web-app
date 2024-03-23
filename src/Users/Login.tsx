import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userClient from "./Client";
export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
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
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Login</h1>
                <input
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    value={user.username}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                />
                <input
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                />
                <br></br>
                <button onClick={login} className="btn btn-primary">
                    Login
                </button>
        </div>
            <div className="col">
            <h2>Don't have an account?</h2>
            <h2>Register Here</h2>
            <input
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
                type="text"
                className="form-control"
                placeholder="Username"
            />
            <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                type="password"
                className="form-control"
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