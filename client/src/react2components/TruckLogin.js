import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../util/axiosWithAuth";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();

  // make a post request to retrieve a token from the api

  // post request created to retrieve token from API
  const onSubmit = (data) => {
    console.log(data);
    axiosWithAuth()
      .post("/api/login", {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/FoodtrkrPage");
      })
      .catch((err) => console.log(err));
  };

  // login input field created
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Truck-login">
      <h1>Food Truck Trkr</h1>

      <label htmlFor="username">
        <select>
          <option value="select">---Select---</option>
          <n />
          <option value="user">User</option>
          <option value="operator">Operator</option>
        </select>

        <input
          type="text"
          name="username"
          placeholder="Username"
          ref={register({ required: true })}
        />
        <br />
        {errors.username && <div>This is required</div>}
      </label>

      <br />

      <label htmlFor="password">
        Password:
        <input
          type="text"
          name="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        <br />
        {errors.password && <span>Password is required</span>}
      </label>

      <br />

      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
