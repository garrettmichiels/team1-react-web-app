import React, { useState, useEffect } from "react";
import "./styles.css"; // Import your CSS file
import * as client from "../../Users/Client";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import myUser from "../../Database/myUser.json";
import { ReactReduxContext, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { User, Company } from "../../Users/Client";
import { getCompany } from "../../TheMuse/client";
import { setCurrentUser } from "../../Users/reducer";
export default function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id, "paramas found");

  // const [user, setUser] = useState({ username: "", password: "" });
  const { currentUser } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    number: "",
    email: "",
    role: "USER",
    major: "",
    following: [{ id: "", name: "", _id: "" }],
    companies: [{ id: "", companyName: "", companyId: "", _id: "" }],
  });

  const [editedProfile, setEditedProfile] = useState({
    id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    number: "",
    email: "",
    role: "USER",
    major: "",
    following: [{ id: "", name: "", _id: "" }],
    companies: [{ id: "", companyName: "", companyId: "", _id: "" }],
  });

  const deleteFollower = async (follower: any) => {
    try {
      await client.deleteFollower(profile.id, follower);
      setProfile({
        ...profile,
        following: profile.following.filter((f) => f._id !== follower._id),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCompany = async (company: Company) => {
    try {
      await client.deleteCompany(company);
      setProfile({
        ...profile,
        companies: profile.companies.filter((u) => u._id !== company._id),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProfile = async () => {
    
      if (id) {
        console.log("in finding u")
        // If userId parameter exists, fetch profile of the specified user
        const user = await client.findUserById(id);
        setProfile(user);
        setEditedProfile(user);

      } 
      else{
        try {
          console.log("trying account")

        // setProfile(currentUser);
        const account = await client.profile();
        setProfile(account);
        setEditedProfile(account);
        dispatch(setCurrentUser(account));
      
        } catch (error) {
          console.log("eror account")

      dispatch(setCurrentUser(null));
      navigate("/Account/Login");
      }
  }
  };

  const save = async () => {
    // const d = {...profile}
    await client.updateUser(editedProfile);
    setProfile(editedProfile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(profile, "printed profile");

  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div className="profile">
      {currentUser && currentUser.id === profile.id && (
        <div>
          <div className="field">
            <div className="edit-field">
              <label>First Name:</label>
              <input
                value={editedProfile.firstName}
                onChange={(e) =>
                  setEditedProfile({
                    ...editedProfile,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="edit-field">
              <label>Last Name:</label>
              <input
                value={editedProfile.lastName}
                onChange={(e) =>
                  setEditedProfile({
                    ...editedProfile,
                    lastName: e.target.value,
                  })
                }
              />
            </div>

            <div className="edit-field">
              <label>Email:</label>
              <input
                value={editedProfile.email}
                onChange={(e) =>
                  setEditedProfile({ ...editedProfile, email: e.target.value })
                }
              />
            </div>

            <div className="edit-field">
              <label>DOB:</label>
              <input
                value={editedProfile.dob}
                type="date"
                onChange={(e) =>
                  setEditedProfile({ ...editedProfile, dob: e.target.value })
                }
              />
            </div>

            <div className="edit-field">
              <label>Phone Number:</label>
              <input
                value={editedProfile.number}
                onChange={(e) =>
                  setEditedProfile({ ...editedProfile, number: e.target.value })
                }
              />
            </div>

            <div className="edit-field">
              <label>Major:</label>
              <input
                value={editedProfile.major}
                onChange={(e) =>
                  setEditedProfile({ ...editedProfile, major: e.target.value })
                }
              />
            </div>

            <div className="edit-field">
              <label>Role:</label>
              <select
                onChange={(e) =>
                  setEditedProfile({ ...editedProfile, role: e.target.value })
                }
              >
                <option value="Mentee">Mentee</option>
                <option value="Mentor">Mentor</option>
              </select>
            </div>

            <button className="btn btn-primary" onClick={save}>
              {" "}
              Save
            </button>
          </div>

          <div></div>
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
          {/* <button
                className="btn btn-secondary"
                style={{ marginLeft: "5px", justifyContent: "end" }}
                onClick={(event) => {
                  event.preventDefault();
                  setProfile(profile);
                }}
              >
                Edit */}
          {/* </button> */}

          <h3>
            {profile.firstName} {profile.lastName}
          </h3>
          <div className="field">
            {currentUser && currentUser.id == profile.id && (
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="">Email: {profile.email} </p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="">Phone Number: {profile.number}</p>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <p className="">DOB: {profile.dob}</p>
                </div>
              </div>
            )}

            <div className="d-flex align-items-center justify-content-between">
              <p className="">Major: {profile.major}</p>
            </div>
          </div>
          <hr />
          <p className="bolded">Co-ops</p>

          <div className="list-group">
            {profile?.companies?.map((company: any) => (
              <div
                key={company._id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <p className="card-text">{company.companyName}</p>
                <div>
                  {/* <button
                    className="btn btn-secondary"
                    style={{ marginLeft: "5px", justifyContent: "end" }}
                    // onClick={() => fetchCoopById(coop.id)}
                  >
                    Edit
                  </button> */}

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
            {profile?.following?.map((follower: any) => (
              <div
                key={follower._id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <p className="card-text"> User {follower.id}</p>
                <div>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "5px" }}
                    onClick={deleteFollower}
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
