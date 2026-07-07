import { useEffect, useState } from "react";
import FormComponent from "../FormComponent";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../apiCalls/AuthThunk";
import { useNavigate } from "react-router-dom";
import { updateAddResponse } from "../../../slice/AuthSlice";

const Register = () => {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  let { name, email, password, confirmPassword, gender } = details;
  let dispatch = useDispatch();
  let { addResponse } = useSelector((state) => state.auth);
  let data = [
    {
      name: "name",
      displayName: "UserName",
      state: name,
      type: "text",
    },
    {
      name: "email",
      displayName: "Email",
      type: "email",
      state: email,
    },
    {
      name: "password",
      displayName: "Password",
      type: "password",
      state: password,
    },
    {
      name: "confirmPassword",
      displayName: "Confirm Password",
      type: "password",
      state: confirmPassword,
    },
  ];

  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      gender === ""
    ) {
      alert("Fill All The Fields");
    } else if (password !== confirmPassword) {
      alert("Password Mismatch");
    } else {
      console.log(details);

      let detailsData = {
        name: name,
        email: email,
        password: password,
        gender: gender,
        following: [],
        followers: [],
      };
      dispatch(addUser(detailsData));
    }
  };

  let inputStyle = {
    width: "20px",
    marginRight: "10px",
  };

  let spanStyle = {
    fontSize: "20px",
    fontWeight: "500",
  };

  let navigate = useNavigate();
  useEffect(() => {
    if (addResponse === 201) {
      dispatch(updateAddResponse());
      navigate("/login");
    }
  }, [addResponse]);
  return (
    <form onSubmit={handleSubmit}>
      <h1>Register Page</h1>
      <FormComponent data={data} handleChange={handleChange} />
      <aside value={gender} name="gender" onChange={handleChange}>
        <label htmlFor="gender">Gender</label>
        {["male", "female", "others"].map((value) => {
          return (
            <>
              <input
                key={value}
                type="radio"
                value={value}
                name="gender"
                style={inputStyle}
              />
              <span style={spanStyle}>{value}</span>
            </>
          );
        })}
      </aside>
      <aside>
        <button>Submit</button>
      </aside>
    </form>
  );
};

export default Register;
