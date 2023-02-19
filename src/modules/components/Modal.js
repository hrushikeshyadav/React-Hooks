import React, { useImperativeHandle, useRef } from "react";
import { Button, Card } from "react-bootstrap";

function CustomModal({ show, modalRef }) {
  const closeRef = useRef(null);
  const saveRef = useRef(null);
  useImperativeHandle(modalRef, () => {
    return {
      focusClose: () => (closeRef.current.style.opacity = "0.5"),
      focusSave: () => (saveRef.current.style.opacity = "0.5"),
    };
  });

  return (
    <Card className="mt-10" hidden={!show}>
      <Card.Header>React 18</Card.Header>
      <Card.Body>
        <Card.Title>UseImperativeHandle hook</Card.Title>
        <Card.Text>
          We are going to handle focus event by ref using UseImperativeHandle
          hook.
        </Card.Text>
        <Button ref={closeRef} variant="secondary" className="mr-10">
          Close
        </Button>
        <Button ref={saveRef} variant="primary">
          Save Changes
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CustomModal;
