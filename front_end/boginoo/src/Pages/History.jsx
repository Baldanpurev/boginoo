import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../Context/Context";
import { useContext } from "react";

export const History = () => {
  const { email } = useContext(Context);
  console.log(email);
  const [links, setLinks] = useState("");
  useEffect(() => {
    const getHistory = async () => {
      const res = await axios.get(`http://localhost:8000/link/:shortlink`);
      setLinks(res?.data);
    };
    getHistory();
    console.log(links);
  }, []);
  return <div>History</div>;
};
export default History;
