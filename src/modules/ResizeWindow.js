import React, { useEffect, useState } from "react";
const ResizeWindow = () => {
  const [count, setCount] = useState(window.innerWidth);

  const handleResize = () => {
    setCount(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <h1>
      Width of current window is : <b>{count}</b>
    </h1>
  );
};

export default ResizeWindow;
