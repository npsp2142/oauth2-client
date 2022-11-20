import { useNavigate } from "react-router-dom";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const submitLogin = async (data) => {
    const loginObject = { username: data.username, password: data.password };
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(loginObject),
    })
      .then((resp) => resp.json())
      .then((json) => {
        console.log("fetch json", json);
        navigate(json.redirect);
      });
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(submitLogin)();
          }}
        >
          <div>
            <Controller
              control={control}
              name="username"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { isTouched, isDirty, error },
              }) => (
                <TextField
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange} // send value to hook form
                  checked={value}
                  inputRef={ref}
                  label="username"
                  variant="filled"
                  style={{
                    color: "white",
                    backgroundColor: "#fcfcfb",
                  }}
                />
              )}
            />
          </div>
          <div>
            <Controller
              control={control}
              name="password"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { isTouched, isDirty, error },
              }) => (
                <TextField
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange} // send value to hook form
                  checked={value}
                  inputRef={ref}
                  label="password"
                  type="password"
                  variant="filled"
                  style={{
                    color: "white",
                    backgroundColor: "#fcfcfb",
                  }}
                />
              )}
            />
          </div>

          <button type="submit" onClick={() => {}}>
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
