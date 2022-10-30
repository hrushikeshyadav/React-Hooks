import React, { useState } from "react";
import DataList from "../components/DataList";

function UseDeferredValue() {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <DataList name={name} />
    </div>
  );
}

export default UseDeferredValue;
