
import Logo from "../components/Logo";
import Search from "../components/Search";
import { Context } from "../Context/Context";
import { useContext, } from "react";

function User_profile() {
  const { orignal, short } = useContext(Context);
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
        <Search />
      </div>
      <div>
        <p style={{ color: "#02B589", fontStyle: "bold", fontSize: "32px" }}>
          Түүх
        </p>

        <div style={{ borderBottom: "1px solid #E2E2E2" }}>
          <div className="" style={{ display: "flex", gap: "200px" }}>
            <p>Өгөгдсөн холбоос:</p>
            <p>Богино холбоос:</p>
          </div>
          <div className="" style={{ display: "flex", gap: "138px" }}>
            <p>{orignal}</p>
            <div style={{ display: "flex", gap: "25px" }}>
              <p>{short}</p>
              <p style={{ color: " #02B589", textDecoration: "underline" }}>
                Хуулж авах
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User_profile;