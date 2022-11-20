import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const redirectToGoogle = async () => {
    const authURL = "http://localhost:5000/auth/google";
    window.location.href = authURL;
  };

  const navigate = useNavigate();

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
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Index;
