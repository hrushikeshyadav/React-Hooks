import React, { useCallback, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../AppContext";
import List from "../components/List";

const UseCallback = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [number, setNumber] = useState(1);
  const getNumbers = useCallback(
    (j = 1) => {
      const data = [];
      for (let i = 1; i <= 10; i++) {
        data.push(number * i * j);
      }
      return data;
    },
    [number]
  );

  const styleSheetContainer = {
    backgroundColor: !isDark ? "#333" : "#CCC",
    color: isDark ? "#333" : "#CCC",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <div className="container-div" style={styleSheetContainer}>
        <Button onClick={() => setIsDark((prev) => !prev)}>Change Theme</Button>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
        />
        <h2>Table of Number : {number}</h2>
        <List getNumbers={getNumbers} />
      </div>
    </>
  );
};
export default UseCallback;
