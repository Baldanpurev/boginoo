import React from "react";
import { useState, } from "react";
import Logo from "../components/Logo";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import eye from "../image/eye.png";
import hide from "../image/hide.png";

export default function Signup() {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [show, setShow] = useState(false);
    const [again, setAgain] = useState(false);
    const navigate = useNavigate();
  
    const signUp = async (req, res) => {
      try {
        await axios.post("http://localhost:8000/user/createUser", {
          email: emailValue,
          password: passwordValue,
        });
        console.log("gfdgdfgddfgdgfdd")
        alert("User created");
        navigate("/Login");
      } catch (error) {
        alert("Энэ цахим хаяг бүртгэлтэй байна");
        console.log("err");
      }
    };
  
    const path = window.location.pathname;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "10%",
          }}
        >
          <div
            style={{
              witdh: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <img width={181} height={118} src={Logo} alt="" />
            <p
              style={{
                fontSize: "32px",
                color: "#02B589",
                fontWeight: "bold",
              }}
            >
              Нэвтрэх
            </p>
          </div>
          <div>
            <p
              style={{
                marginLeft: "15px",
              }}
            >
              Цахим хаяг
            </p>
            <input
              style={{
                height: "50px",
                width: "380px",
                borderRadius: "100px",
                paddingLeft: "30px",
                fontSize: "20px",
                border: "none",
                outline: "none",
                boxShadow: "0px 0px 15px -10px",
              }}
              placeholder="name@mail.domain"
              type="text"
              onChange={(e) => {
                setEmailValue(e.target.value);
                console.log(emailValue)
              }}
            />
          </div>
          <div>
            <p
              style={{
                marginLeft: "15px",
              }}
            >
              Нууц үг
            </p>
            <div
              style={{
                display: "flex",
                border: "1px solid grey",
                padding: "0px 10px",
                borderRadius: "100px",
                border: "none",
                outline: "none",
                boxShadow: "0px 0px 15px -10px",
                alignItems: "center",
                height: "50px",
              }}
            >
              <input
                style={{
                  height: "40px",
                  width: "351px",
                  paddingLeft: "30px",
                  fontSize: "20px",
                  border: "none",
                }}
                placeholder="••••••••••"
                type={`${again ? "password" : "text"}`}
              />
              <img
                src={`${again ? hide : eye}`}
                style={{ height: "20px" }}
                onClick={() => {
                  setAgain(!again);
                  console.log(again);
                }}
              />
            </div>
          </div>
          <div>
            <p
              style={{
                marginLeft: "15px",
              }}
            >
              Нууц үгээ давтна уу?
            </p>
            <div
              style={{
                display: "flex",
                border: "1px solid grey",
                padding: "0px 10px",
                borderRadius: "100px",
                border: "none",
                outline: "none",
                boxShadow: "0px 0px 15px -10px",
                alignItems: "center",
                height: "50px",
              }}
            >
              <input
                style={{
                  height: "40px",
                  width: "351px",
                  paddingLeft: "30px",
                  fontSize: "20px",
                  border: "none",
                }}
                placeholder="••••••••••"
                type={`${show ? "password" : "text"}`}
                onChange={(e) => {
                  setPasswordValue(e.target.value);
                  console.log(passwordValue);
                }}
              />
              <img
                src={`${show ? hide : eye}`}
                style={{ height: "20px" }}
                onClick={() => {
                  setShow(!show);
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          ></div>
          <button
            style={{
              height: "44px",
              fontWeight: "bold",
              fontSize: "20px",
              padding: "10px",
              color: "white",
              backgroundColor: "#02B589",
              borderRadius: "100px",
              border: "none",
              paddingLeft: "145px",
              paddingRight: "145px",
            }}
            onClick={() => {
              signUp();
            }}
          >
            НЭВТРЭХ
          </button>
          <a
            style={{
              display: path === "/signup" ? "none" : "block",
              color: "#02B589",
              padding: "15px",
              fontSize: "16px",
            }}
            href="none"
          >
            Шинэ хэрэглэгч бол энд дарна уу?
          </a>
        </div>
      </div>
    );
  }