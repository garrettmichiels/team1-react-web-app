import React, { useState, useEffect } from "react";
import "./styles.css"; // Import your CSS file

// import * as userClient from "./client";
import { useNavigate } from "react-router";
import myUser from "../Database/myUser.json";
export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });

  const [email, setEmail] = useState(myUser[0].email);

  return (
    <div className="profile">
      <div className="card h-100">
        <div className="card-header" style={{ textAlign: "left" }}>
          My Profile
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "left" }}>
            Profile Details
          </h5>
          <h3>{myUser[0].name}</h3>
          <div className="field">
            <div className="d-flex align-items-center justify-content-between">
              <p className="bolded">Email: {email} </p>
              <input
                id="emailInput"
                style={{ marginBottom: "5px", marginLeft: "5px" }}
                value={myUser[0].email}
                className="form-control"
              />

              <button
                className="btn btn-secondary"
                style={{ marginLeft: "5px", justifyContent: "end" }}
                // onClick={(event) => {
                //   event.preventDefault();
                //    setEmail(document.getElementById('emailInput').value);
                // }}
              >
                Edit
              </button>
              {/* <button className = "btn btn-primary" style={{ marginLeft: "5px" }} onClick={updateCoop} >
        Update
      </button> */}
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="bolded">Phone Number: {myUser[0].number}</p>

              <button
                className="btn btn-secondary"
                style={{ marginLeft: "5px", justifyContent: "end" }}
                onClick={(event) => {
                  event.preventDefault();
                  // setCoop(coop);
                }}
              >
                Edit
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="bolded">Major: {myUser[0].major}</p>

              <button
                className="btn btn-secondary"
                style={{ marginLeft: "5px", justifyContent: "end" }}
                onClick={(event) => {
                  event.preventDefault();
                  // setCoop(coop);
                }}
              >
                Edit
              </button>
            </div>
          </div>
          <hr />
          <p className="bolded">Co-ops</p>
          <div className="list-group">
            {myUser[0].coops.map((coop: any) => (
              <div
                key={coop._id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <p className="card-text">{coop.name}</p>
                <div>
                  <button
                    className="btn btn-secondary"
                    style={{ marginLeft: "5px", justifyContent: "end" }}
                    onClick={(event) => {
                      event.preventDefault();
                      // setCoop(coop);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "5px" }}
                    onClick={(event) => {
                      event.preventDefault();
                      // deleteCoop(coop._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <p className="bolded">Following</p>

          <div className="list-group">
            {myUser[0].following.map((following: any) => (
              <div
                key={following._id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <p className="card-text"> User {following._id}</p>
                <div>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "5px" }}
                    onClick={(event) => {
                      event.preventDefault();
                      // deleteCoop(coop._id);
                    }}
                  >
                    Unfollow
                  </button>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="btn btn-primary">
            {" "}
            Button
          </a>
        </div>
      </div>
    </div>
  );
}
