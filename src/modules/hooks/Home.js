import React from "react";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Button variant="dark">UseContext</Button>
      <Button variant="dark">UseEffect</Button>
      <Button variant="dark">UseMemo</Button>
      <Button variant="dark">UseReducer</Button>
      <Button variant="dark">UseTransition</Button>
    </div>
  );
}

export default Home;
