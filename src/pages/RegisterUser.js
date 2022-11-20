const RegisterUser = () => {
  const submitRegister = async () => {
    const loginObject = { username: "jacky", password: "jacky" };
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObject),
    }).then();
    // window.location.href = authURL;
  };
  return (
    <div>
      <form
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
      </form>
    </div>
  );
};

export default RegisterUser;
