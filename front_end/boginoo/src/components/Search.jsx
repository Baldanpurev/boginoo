import React, { useState, useContext } from "react";
import { Context } from "../Context/Context";
import axios from "axios";

function Search(props) {
  const { setData } = props;
  const { inputValue, setInputValue } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const { email } = useContext(Context);

  const urlShortener = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/link/short", {
        orignal_link: inputValue,
        // ownerID: user?._id,
        ownerID: email,
      });
      console.log(response);
      setData(response.data.short);
    } catch (error) {
      console.log("err");
    }
    setLoading(false);
  };

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
          disabled={loading}
          onClick={urlShortener}
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
          {loading ? "...LOADING" : "БОГИНОСГОХ"}
        </button>
      </div>
    </>
  );
}
export default Search;
