import React,{ useState, useContext } from "react";
import Logo from "../components/Logo";
import eye from "../image/eye.png";
import hide from "../image/hide.png";
import { Context } from "../Context/Context";

export default function Login() {
  const { Login, user,inputValue } = useContext(Context);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [show, setShow] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
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
              height: "44px",
              width: "351px",
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
              alignItems: "center",
              justifyContent: "space-around",
              height: "44px",
              width: "380px",
              border: "none",
              outline: "none",
              boxShadow: "0px 0px 15px -10px",
              borderRadius: "100px",
            }}
          >
            <input
              style={{
                border: "none ",
                fontSize: "20px",
              }}
              focus
              placeholder="••••••••••"
              type={`${show ? "text" : "password"}`}
              onChange={(e) => {
                setPasswordValue(e.target.value);
              }}
              className="input"
            />
            <img
              style={{ width: "22px" }}
              src={`${show ? hide : eye}`}
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
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#02B589",
            }}
          >
            <input
              label="Намайг сана"
              className="checkbox"
              style={{
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
            />
            <p>Намайг сана</p>
          </div>
          <a
            style={{
              color: "black",
            }}
            href="none"
          >
            Нууц үгээ мартсан
          </a>
        </div>
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
            console.log(inputValue)
            Login( emailValue, passwordValue );
          }}
        >
          НЭВТРЭХ
        </button>
        <a
          style={{
            color: "#02B589",
            padding: "15px",
            fontSize: "16px",
          }}
          href="signup"
        >
          Шинэ хэрэглэгч бол энд дарна уу?
        </a>
      </div>
    </div>
  );
}