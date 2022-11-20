import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const RegisterUser = () => {
  const submitRegister = async (data) => {
    const newUser = { username: data.username, password: data.password };
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then();
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

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
        {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          submitRegister();
        }}
      >
        <label for="username">Username</label>
        <input id="username" name="username" type="text"></input>
        <label for="current-password">Password</label>
        <input id="current-password" name="password" type="password"></input>
        <button type="submit" onClick={() => {}}>
          Register
        </button>
      </form> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(submitRegister)();
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
            Register{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
