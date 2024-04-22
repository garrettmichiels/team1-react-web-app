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
import Review from "../../Reviews";
import { Link } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id, "paramas found");

  // const [user, setUser] = useState({ username: "", password: "" });
  const { currentUser } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const [profile, setProfile] = useState<User>({
    id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    number: "",
    email: "",
    role: "MENTEE",
    major: "",
    reviews: [],
    following: [],
    companies: []});

  const [editedProfile, setEditedProfile] = useState<User>({
    id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    number: "",
    email: "",
    role: "MENTEE",
    major: "",
    reviews: [],
    following: [],
    companies: []});

  const deleteFollower = async (follower: any) => {
    console.log(follower);

    try {
      console.log(currentUser.id);

      await client.deleteFollower(currentUser.id,follower.id);
      setProfile({
        ...profile,
        following: profile.following.filter((f) => f.id !== follower.id),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCompany = async (company: any) => {
    console.log(company);

    try {
      console.log(currentUser.id);

      await client.deleteFollower(currentUser.id,company.id);
      setProfile({
        ...profile,
        following: profile.following.filter((f) => f.id !== company.id),
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


  const navigateToProfile = async() =>{
    navigate("/Account/Login");
  }

  const save = async () => {
    // const d = {...profile}
    await client.updateUser(editedProfile);
    setProfile(editedProfile);
  };

  useEffect(() => {
    fetchProfile();
  }, [id]);

  console.log(profile, "printed profile");
  console.log(profile.role, "role");


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
                <option value="MENTEE">Mentee</option>
                <option value="MENTOR">Mentor</option>
              </select>
            </div>

            <button className="btn btn-primary" onClick={save}>
              {" "}
              Save
            </button>
          </div>

        </div>
      )}
      <div className="card h-100">
        <div className="card-header" style={{ textAlign: "left" }}>
          Profile
        </div>
        <div className="card-body">
          

          <h3 className="border border-2 border-secondary rounded-pill bg-light  ">
            {profile.firstName} {profile.lastName}
          </h3>
          {currentUser && currentUser.id !== profile.id &&(
             <button
             className="btn btn-primary "
             style={{ marginLeft: "5px" }}
            //  onClick={addFollower}
           >
             Follow
           </button>
           
          )}
          <div className="field">
            {currentUser && currentUser.id === profile.id && (
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
            <div className="d-flex align-items-center justify-content-between">
              <p className="">Role: {profile.role}</p>
            </div>
          </div>
          <hr />
          
          {profile.role==="MENTEE" && (<p className="bolded">Saved Companies</p>)}
          {profile.role==="MENTOR" && (

<div>
<div>
          <p className="bolded">Reviews</p>
          </div>

          <div className="list-group">
            
          {profile?.reviews?.map((review: any) => (
            <div
              key={review._id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <p className="card-text">{review.title}</p>
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
     <hr></hr>
          <p className="bolded">Past Companies</p>
          </div>
          
          )}


          <div className="list-group">
            {profile?.companies?.map((company: any) => (
              <div
                key={company._id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <p className="card-text">{company.companyName}</p>
                <div>
                {currentUser && currentUser.id === profile.id && (
 <div>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "5px" }}
                    onClick={() => deleteCompany(company)}
                  >
                    Delete
                  </button>
                  </div>)}
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
               <Link to={`/Profile/${follower.id}`}>
               <p className="card-text"> {follower.firstName} {follower.lastName}</p>

               </Link>
                {/* <Link to={`/Profile/${follower.id}`} >
                  
                <a href={`/Profile/${follower.id}`} className="btn btn-primary">
            {" "}
            Profile
          </a> */}
                  {/* <button
                    className="btn btn-danger"
                    style={{ marginLeft: "5px" }}
                    // onClick={navigateToProfile(follower.id)}
                  >
                    Profile
                  </button> */}
                  {currentUser && currentUser.id === profile.id && (
                  <div>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "5px" }}
                    onClick={() => deleteFollower(follower)}
                  >
                    Unfollow
                  </button>
                  </div>)}
                </div>
          
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
