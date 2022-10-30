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
  return <h1>{count}</h1>;
};

export default ResizeWindow;
