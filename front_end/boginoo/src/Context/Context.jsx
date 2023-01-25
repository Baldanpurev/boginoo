import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Context = createContext({});

export function Provider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [short, setShort] = useState("");
  const [orignal, setOrignal] = useState("");

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      config.headers.set("token", token);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const Login = async (user, password) => {
    try {
      await axios
        .post("http://localhost:8000/user/login", {
          email: user,
          password: password,
        })
        .then((el) => {
          setUser(el?.data?.user);
          navigate("/userProfile");
        });
    } catch (error) {
      alert("Нууц үг эсвэл Цахим хаяг буруу байна");
    }
  };

  return (
    <Context.Provider
      value={{
        Login,
        user,
        inputValue,
        setInputValue,
        orignal,
        setOrignal,
        short,
        setShort,
      }}
    >
      {children}
    </Context.Provider>
  );
}
