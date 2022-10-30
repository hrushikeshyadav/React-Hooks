import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceType]);
  useEffect(() => {
    setCount((Prev) => Prev + 1);
  }, [resourceType]);

  return (
    <>
      {count}
      <Button variant="secondary" onClick={() => setResourceType("posts")}>
        Posts
      </Button>{" "}
      <Button variant="secondary" onClick={() => setResourceType("users")}>
        Users
      </Button>{" "}
      <Button variant="secondary" onClick={() => setResourceType("comments")}>
        Comments
      </Button>{" "}
      <br />
      {data.map((item) => (
        <pre>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
};
export default UseEffect;
