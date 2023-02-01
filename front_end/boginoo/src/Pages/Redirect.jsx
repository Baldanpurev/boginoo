import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Redirect = () => {
  const { redirect } = useParams;

  useEffect(() => {
    const redirectTo = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/link/redirect/${"qcp37"}`
        );
        window.location.replace(res.data.orignal_link.orignal_link);
      } catch (error) {
        console.log("err", error);
      }
    };
    redirectTo();
  }, []);
  return <div>...redirect</div>;
};

export default Redirect;
