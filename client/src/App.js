import React, { useContext, useEffect } from "react";
import SwitcherMode from "./components/SwitcherMode";
import { ThemeContext } from "./contexts/themes";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Facts from "./components/Facts";
import LogIn from "./Pages/LogIn";
import Logout from "./Pages/Logout";
import Register from "./Pages/Register";
import axios from "axios";
import { useRecoilState } from "recoil";
import userState from "./atoms/userAtoms";
import Account from "./Pages/Account";

const App = () => {
  const [{ theme }] = useContext(ThemeContext);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, {
          withCredentials: true,
        });
        setUser({
          isAuth: true,
          user: res.data,
        });
        console.log("getUser", res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    getUser();
  }, []);
  return (
    <BrowserRouter>
      <div className="app" style={theme}>
        <SwitcherMode />

        <nav>
          <Link to="/">Home</Link>
          {!user.isAuth && <Link to="/login">Login</Link>}
          {!user.isAuth && <Link to="/register">Register</Link>}
          {user.isAuth && <Link to="/account">{user.user.email}</Link>}
          {user.isAuth && <Link to="/logout">Logout</Link>}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
