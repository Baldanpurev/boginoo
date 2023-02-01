import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Logo from "../components/Logo";
import Search from "../components/Search";
import { Context } from "../Context/Context";

function Home() {
  const { user } = useContext(Context);
  const [data, setData] = useState({
    orignal_link: "",
    short_link: "",
  });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Logo />
        <Search setData={setData} />
      </div>

      <div>
        <p style={{ color: "#02B589", fontStyle: "bold", fontSize: "32px" }}>
          Түүх
        </p>

        <div style={{ borderBottom: "1px solid #E2E2E2" }}>
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <p>Өгөгдсөн холбоос:</p>
            <p>Богино холбоос:</p>
          </div>
          <div className="" style={{ display: "flex", gap: "138px" }}>
            <div
              style={{
                display: "column",
                gap: "25px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 50,
                  width: "100%",
                }}
              >
                <p>{data.orignal_link}</p>
                <p>http://localhost:3000/{data.short_link}</p>

                <p style={{ color: " #02B589" }}>Хуулж авах</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
