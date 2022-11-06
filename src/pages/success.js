import React, { useState, useEffect } from "react";
import { fetchUser, logoutUser } from "../component/user";

const Success = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchUser().then((response) => {
      if (response != null) setProfile(response);
    });
  }, []);

  console.log(profile);
  if (Object.keys(profile).length !== 0) {
    return (
      <div className="background">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            height: "100vh",
          }}
        >
          <h2>Welcome, {profile.displayName}</h2>
          <h2>{profile.email}</h2>
          <button onClick={logoutUser}>Logout</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="background">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            height: "100vh",
          }}
        >
          <h2>401</h2>
        </div>
      </div>
    );
  }
};

export default Success;
