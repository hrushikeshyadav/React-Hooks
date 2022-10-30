import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../AppContext";

const UseMemo = () => {
  const { isDark } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    console.log("email", email);
  }, [email]);
  useEffect(() => {
    console.log("pass", pass);
  }, [pass]);
  useEffect(() => {
    console.log("check", check);
  }, [check]);

  const styleSheetContainer = {
    backgroundColor: !isDark ? "#333" : "#CCC",
  };
  return (
    <>
      <div className="container" style={styleSheetContainer}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              onChange={(e) => setCheck(e.target.checked)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default UseMemo;
