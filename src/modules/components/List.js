import React, { useEffect, useState } from "react";

const List = ({ getNumbers }) => {
  const [name, setName] = useState([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    setName(getNumbers(number));
  }, [getNumbers, number]);
  return (
    <>
      <h3>Enter number to multiply table.</h3>
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        type="number"
      />
      <ul>
        {name.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
