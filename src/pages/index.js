import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";


 
const Index = () => {
  const redirectToGoogle = async () => {
    const authURL = "http://localhost:5000/auth/google";
    window.location.href = authURL;
  };

  const navigate = useNavigate();


  const submitLogin = async () => {
    const loginObject = { username: "jacky", password: "jacky" };
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // contentLength: JSON.stringify(loginObject).length,
      },
      credentials: "include",
      body: JSON.stringify(loginObject),
    }).then((resp)=>resp.json())
    .then(json=>{
      console.log("fetch json",json);
      navigate(json.redirect);
    });
    // window.location.href = authURL;
  };



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
        <h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, Please login your account with Google")
                .pauseFor(1500)
                .typeString("!!!!")
                .pauseFor(2500)
                .start();
            }}
          />
        </h2>
        <button onClick={redirectToGoogle}> Google Login </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitLogin();
          }}
        >
          <label for="username">Username</label>
          <input id="username" name="username" type="text"></input>
          <label for="current-password">Password</label>
          <input id="current-password" name="password" type="password"></input>
          <button type="submit" onClick={() => {}}>
            {" "}
            Login{" "}
          </button>
        </form>
        <button onClick={()=>{navigate('/register')}}>register</button>
      </div>
    </div>
  );
};

export default Index;
