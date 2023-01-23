import React from "react";

function Short() {
  return (
    <>
      <div>
        <div
          style={{
            display: onclick ? "flex" : "none",
            flexDirection: "column",
          }}
        >
          <div>
            <p
              style={{
                opacity: "30%",
              }}
            >
              Өгөгдсөн холбоос:
            </p>
            <p>aaaa</p>
          </div>
          <div>
            <p
              style={{
                opacity: "30%",
              }}
            >
              Богино холбоос:
            </p>
            <p>aaaa</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Short;