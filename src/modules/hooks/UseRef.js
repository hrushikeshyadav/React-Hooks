import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const count = useRef(1);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          setName(e?.target?.value);
        }}
      />
      <div>My name is {name}</div>
      <div>
        Component is rerendered <b>{count.current}</b> times.
      </div>
    </>
  );
};
export default UseRef;
