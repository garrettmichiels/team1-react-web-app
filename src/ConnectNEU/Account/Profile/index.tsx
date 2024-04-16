import React, { useState, useEffect } from "react";
import "./styles.css"; // Import your CSS file
import * as client from "../../Users/Client";
import axios from "axios";
import { useNavigate } from "react-router";
import myUser from "../../Database/myUser.json";
import { ReactReduxContext } from 'react-redux';
import { useDispatch } from "react-redux";

export default function Profile() {
  const navigate = useNavigate();
  // const API = "http://localhost:4000/profile";

  // const [user, setUser] = useState({ username: "", password: "" });

  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    number: "",
    email: "",
    role: "USER",
    major: "",
    following: [],
    coops: [],
  });

  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  
  const save = async () => {
    await client.updateUser(profile);
  };
  // const signout = async () => {
  //   await client.signout();
  //   navigate("/Kanbas/Account/Signin");
  // };


  useEffect(() => {
    fetchProfile();
  }, []);
  // const [editedProfile, setEditedProfile] = useState({ ...myUser });

  // const updateProfile = () => {
  //   //do logic to update server here
  //   setProfile(editedProfile);
  // };

  // const [coop, setCoop] = useState({id: 1,
  //   title: "Google"
  // });

  // const fetchUserProfile = async () => {
  //   try {
  //     console.log("in fetching user")
  //     const user = await client.profile();
  //     console.log(user)
  //     console.log("trying to fetch user and going to set");
  //     setUser(user);
  //   } catch (error) {
  //     navigate("/Kanbas/Account/Login");
  //   }
  // };

  // const updateUser = async () => {
  //   await client.updateUser(user);
  // };

  // useEffect(() => {
  //   fetchUserProfile();
  // }, []);

  // const fetchCoopById = async (id: any) => {
  //   const response = await axios.get(`${API}/${id}`);
  //   setCoop(response.data);
  // };
  
  console.log(profile);
  return (
    <div className="profile">
      {profile && (
        <div>
        <div className="field">
         
          <div className="edit-field">
            <label>
              First Name:
              </label>
              <input
                value={profile.firstName}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
              />
        
          </div>
          <div className="edit-field">
            <label>
              Last Name:
              </label>
              <input
                value={profile.lastName}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
              />
          
          </div>
          
          <div className="edit-field">
            <label>
              Email:
              </label>
              <input
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
              </div>
            
              <div className="edit-field">
            <label>
              DOB:
              </label>
              <input value={profile.dob} type="date" onChange={(e) =>
            setProfile({ ...profile, dob: e.target.value })}/>
              </div>

<div className="edit-field">  
            <label>
              Phone Number:
              </label>
              <input
                value={profile.number}
                onChange={(e) =>
                  setProfile({ ...profile, number: e.target.value })
                }
              />
           
            </div>

            <div className="edit-field">  
            <label>
              Major:
              </label>
              <input
                value={profile.major}
                onChange={(e) =>
                  setProfile({ ...profile, major: e.target.value})
                }
              />
           
            </div>

          <div className="edit-field">
          <label>
            Role:
            </label>
          <select
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="Mentee">Mentee</option>
            <option value="Mentor">Mentor</option>

          </select>
          </div>
          <div className="edit-field">  
            <label>
              Co-ops:
              </label>
              <input
                value={profile.major}
                onChange={(e) =>
                  setProfile({ ...profile, major: e.target.value})
                }
              />
           
           
            </div> 
          <button className="btn btn-primary" onClick={save}> Save</button> 
        </div>
        

        <div>

           
        </div>
        </div>

      )}
      <div className="card h-100">
        <div className="card-header" style={{ textAlign: "left" }}>
          My Profile
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "left" }}>
            Profile Details
          </h5>
          <button
                className="btn btn-secondary"
                style={{ marginLeft: "5px", justifyContent: "end" }}
                onClick={(event) => {
                  event.preventDefault();
                  setProfile(profile);
                }}
              >
                Edit
              </button>
          <h3>{profile.firstName} {profile.lastName}</h3>
          <div className="field">
            <div className="d-flex align-items-center justify-content-between">
              <p className="">Email: {profile.email} </p>
             
        
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="">Phone Number: {profile.number}</p>

            
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="">Major: {profile.major}</p>

            </div>
          </div>
          <hr />
          <p className="bolded">Co-ops</p>
          <div className="list-group">
            {profile?.coops?.map((coop: any) => (
              <div
                key={coop._id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <p className="card-text">{coop.name}</p>
                <div>
                  <button
                    className="btn btn-secondary"
                    style={{ marginLeft: "5px", justifyContent: "end" }}
                    // onClick={() => fetchCoopById(coop.id)}
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
            {profile?.following?.map((following: any) => (
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
