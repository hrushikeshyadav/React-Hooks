import React, { useState, useTransition } from "react";

function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setData(l);
    });
  };
  return (
    <div className="container-div">
      <input value={name} onChange={handleChange} />
      {isPending
        ? "\n Loading....."
        : data.map((item) => <div key={Math.random()}>{item}</div>)}
    </div>
  );
}

export default UseTransition;
