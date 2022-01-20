import React, { useEffect,useState } from "react";
import axios from 'axios'
const RegisterComponent = () => {
  const [form, setForm] = useState({
    email: "",
    email_cfg: "",
    password: "",
    password_cfg: "",
  });
  const handlerOnChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handlerOnSubmit = async (event) => {
    event.preventDefault();

    console.log(form);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        form
      );

      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
     
  },[form.email,form.password])

  return (
    <form onSubmit={handlerOnSubmit}>
      <label for="email">Email</label>
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
      <label for="email_cfg">Email</label>
      <br />
      <input
        onChange={handlerOnChange}
        id="email_cfg"
        type="text"
        value={form.email_cfg}
        name="email_cfg"
        placeholder="Email"
        required={true}
      />
      <br />

      <label for="password">Password</label>
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

      <label for="password_cfg">Password Confirmation</label>
      <br />
      <input
        onChange={handlerOnChange}
        id="password_cfg"
        type="password"
        value={form.password_cfg}
        name="password_cfg"
        placeholder="Password"
        required={true}
      />

      <br />
      <input type="submit" value="Register" />
    </form>
  );
};

export default RegisterComponent;
