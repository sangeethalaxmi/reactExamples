import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const responseData = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res);
        return res.data;
      });

    setData(responseData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data.length > 0 &&
        data.map((data) => {
          return <li key={data.id}>{data?.title}</li>;
        })}
    </div>
  );
}
