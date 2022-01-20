import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import userState from "../atoms/userAtoms";

const LoginComponent = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useRecoilState(userState);

  const handlerOnChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  let navigate = useNavigate();

  const handlerOnSubmit = async (event) => {
    event.preventDefault();

    console.log(form);
    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + "/users/login",
        form,
        {
          withCredentials: true,
        }
      );

      setUser({
        isAuth: true,
        user: res.data.user,
      });

      console.log(res.data);

      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {}, []);

  return (
    <form onSubmit={handlerOnSubmit}>
      <label htmlFor="email">Email</label>
      <br />
      <input
        onChange={handlerOnChange}
        id="email"
        type="text"
        value={form.email}
        name="email"
        placeholder="Email"
        required={true}
      />
      <br />

      <label htmlFor="password">Password</label>
      <br />
      <input
        onChange={handlerOnChange}
        id="password"
        type="password"
        value={form.password}
        name="password"
        placeholder="Password"
        required={true}
      />

      <br />
      <input type="submit" value="Log In" />
    </form>
  );
};

export default LoginComponent;
