import React, { useState } from "react";
import FormComponent from "../FormComponent";

const Login = () => {
  let [details, setDetails] = useState({
    email: "",
    password: "",
  });
  let { email, password } = details;
  let data = [
    {
      displayName: "Email",
      name: "email",
      type: "email",
      state: email,
    },
    {
      displayName: "Password",
      name: "password",
      type: "password",
      state: password,
    },
  ];

  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Fill All The Fields");
    } else {
      console.log(details);
      setDetails({
        email: "",
        password: "",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Log In </h1>
      <FormComponent data={data} handleChange={handleChange} />
      <aside style={{textAlign:"center"}}>
        <button>Submit</button>
      </aside>
    </form>
  );
};

export default Login;
