import React from "react";

const Failure = () => {
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
        <h2>Failed to authenticate.</h2>
      </div>
    </div>
  );
};

export default Failure;
