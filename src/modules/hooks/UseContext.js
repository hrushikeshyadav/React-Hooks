import React, { useContext } from "react";
import { BrightnessHigh, BrightnessHighFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../AppContext";

const UseContextFunc = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const styleSheet = {
    backgroundColor: isDark ? "#333" : "#CCC",
    color: !isDark ? "#333" : "#CCC",
  };
  const styleSheetContainer = {
    backgroundColor: !isDark ? "#333" : "#CCC",
  };
  return (
    <>
      <div className="container-div" style={styleSheetContainer}>
        <Button style={styleSheet} onClick={() => setIsDark((prev) => !prev)}>
          {isDark ? <BrightnessHighFill /> : <BrightnessHigh />}
        </Button>
      </div>
    </>
  );
};
export default UseContextFunc;
