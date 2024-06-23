import React, { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div></div>
      ))}
    </div>
  );
};
