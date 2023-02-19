import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import CustomModal from "../components/Modal";

function UseImperativeHandle() {
  const [show, setShow] = useState(false);
  const ref = useRef();

  return (
    <div className="container-div">
      <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
        Launch Modal
      </Button>
      {show && (
        <div className="mt-10">
          <Button
            variant="secondary"
            className="mr-10"
            onClick={() => ref.current.focusClose()}
          >
            Focus Close
          </Button>
          <Button variant="secondary" onClick={() => ref.current.focusSave()}>
            Focus Save
          </Button>
        </div>
      )}
      {show && <CustomModal modalRef={ref} setShow={setShow} show={show} />}
    </div>
  );
}

export default UseImperativeHandle;
