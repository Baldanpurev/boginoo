import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Context = createContext({});

export function Provider({ children }) {
  const navigate = useNavigate()
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

  const Login = async (user, password ) => {
    try {
      console.log("Adsf")
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
  const createPost = async () => {
    try {
      const shortRes = await axios.post("http://localhost:8000/link/", {
        orignal_link: inputValue,
      });
      setShort(shortRes?.data?.short_link);
      console.log(short);
      console.log(shortRes);
    } catch (error) {
      console.log("erer");
    }
  };

  return (
    <Context.Provider
      value={{
        Login,
        user,
        inputValue,
        createPost,
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

