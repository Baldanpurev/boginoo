import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context"
export const Header = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const path = window.location.pathname;
    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [user]);
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          fontSize: "20px",
          color: "#02B589",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "2%",
            width: "100%",
            paddingTop: "56px",
            paddingRight: "78px",
          }}
        >
          <p
            style={{
              padding: "0",
              margin: "0",
            }}
          >
            ХЭРХЭН АЖИЛЛАДАГ ВЭ?
          </p>
          {user ? (
            <div>{user.email}</div>
          ) : (
            <Link
              style={{
                display:
                  path === "/login" || path === "/signup" ? "none" : "block",
              }}
              to={"/login"}
            >
              <button
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  padding: "10px",
                  color: "white",
                  backgroundColor: "#02B589",
                  borderRadius: "100px",
                  border: "none",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                НЭВТРЭХ
              </button>
            </Link>
          )}
        </div>
      </div>
    );
  };