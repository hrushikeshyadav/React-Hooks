import React from "react";
import UseLocalStorage from "./customHooks/UseLocalStorage";

function UseLocalStorageHook() {
  const [name, setName] = UseLocalStorage("name", "");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e?.target?.value)}
      />
    </div>
  );
}

export default UseLocalStorageHook;
