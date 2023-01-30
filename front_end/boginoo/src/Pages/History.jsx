import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const History = () => {
  const { email } = useParams();
  console.log(email);
  const [links, setLinks] = useState("");
  useEffect(() => {
    const getHistory = async () => {
      const res = await axios.get(`http://localhost:8000/link/${email}`);
      setLinks(res?.data);
    };
    getHistory();
    console.log(links);
  }, []);
  return <div>History</div>;
};
export default History;
