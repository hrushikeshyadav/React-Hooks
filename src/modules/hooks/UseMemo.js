import React, { useContext, useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../AppContext";

const makeDouble = (number) => {
  for (let i = 0; i <= 1000000000; i++) {}
  return number * 2;
};
const UseMemo = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [number, setNumber] = useState(0);
  const doubleNumber = useMemo(() => {
    return makeDouble(number);
  }, [number]);

  const styleSheetContainer = {
    backgroundColor: !isDark ? "#333" : "#CCC",
    color: isDark ? "#333" : "#CCC",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <div className="container-div" style={styleSheetContainer}>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
        />
        <div>
          The double of entered number is : <b>{doubleNumber}</b>
        </div>
        <Button onClick={() => setIsDark((prev) => !prev)}>Change Theme</Button>
      </div>
    </>
  );
};
export default UseMemo;
