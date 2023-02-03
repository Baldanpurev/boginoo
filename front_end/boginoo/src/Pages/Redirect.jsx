import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Redirect = () => {
  const { redirect } = useParams;
  const navigate = useNavigate();
  useEffect(() => {
    const redirectTo = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/link/redirect/${"qcp37"}`
        );
        const originalLink = res.data.orignal_links?.orignal_link;
        console.log(originalLink);
        if (originalLink) {
          window.location.replace(originalLink);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log("err", error);
      }
    };
    redirectTo();
  }, []);
  return <div>...redirect</div>;
};

export default Redirect;
