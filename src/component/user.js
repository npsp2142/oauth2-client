import React from "react";
import axios from "axios";

async function fetchUser() {
  const response = await axios
    .get("http://localhost:5000/user", { withCredentials: true })
  .catch((err) => {
    if (err.response.status === 401) return null;
  });
  if (response && response.data) {
    return response.data;
  } else return null;
}

async function logoutUser() {
  const response = await axios.get("http://localhost:5000/logout", {
    withCredentials: true,
  });
  if (response && response.data) {
    return response.data;
  } else return null;
}

export { fetchUser, logoutUser };
