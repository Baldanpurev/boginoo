import React, { useContext } from "react";
import { Context } from "../Context/Context";

function Search() {
  const { createPost, inputValue, setInputValue } = useContext(Context);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "1%",
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          style={{
            height: "44px",
            width: "531px",
            borderRadius: "100px",
            paddingLeft: "50px",
            fontSize: "20px",
            border: "none",
            outline: "none",
            boxShadow: "0px 0px 15px -10px",
          }}
          placeholder="https://www.web-huudas.mn"
          type="text"
        />
        <button
          onClick={() => {
            createPost();
          }}
          style={{
            height: "100%",
            borderRadius: "100px",
            paddingRight: "35px",
            paddingLeft: "35px",
            color: "white",
            backgroundColor: "#02B589",
            fontSize: "20px",
            border: "none",
          }}
        >
          БОГИНОСГОХ
        </button>
      </div>
    </>
  );
}
export default Search;