import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Redirect = () => {
  const { redirect } = useParams;
  useEffect(() => {
    const redirectTo = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/link/redirect/${redirect}`
        );
        window.location.href = res.data.orginal_link;
      } catch (error) {
        console.log("err");
      }
    };
    redirectTo();
  }, []);
};

export default Redirect;
