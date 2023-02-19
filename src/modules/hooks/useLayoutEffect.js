import React, { useLayoutEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

function UseLayoutEffect() {
  const [show, setShow] = useState(false);
  const buttonRef = useRef();
  const titleRef = useRef();

  useLayoutEffect(() => {
    if (buttonRef.current == null || titleRef.current == null) return;
    const { bottom } = buttonRef.current.getBoundingClientRect();
    titleRef.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <div className="container-div">
      <Button ref={buttonRef} onClick={() => setShow((prev) => !prev)}>
        Click Me
      </Button>
      {show && (
        <div style={{ position: "absolute" }} ref={titleRef}>
          This is UseLayoutEffect example.
        </div>
      )}
    </div>
  );
}

export default UseLayoutEffect;
