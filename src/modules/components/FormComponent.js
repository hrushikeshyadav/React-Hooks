import React, { useId } from "react";

function FormComponent() {
  const id = useId();
  return (
    <div className="container-div">
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="text" />
    </div>
  );
}

export default FormComponent;
