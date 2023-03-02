import React, { useEffect, useState } from "react";

const getValue = (key, initialValue) => {
  const data = JSON.parse(localStorage.getItem(key));
  if (data) return data;
  return initialValue;
};

const UseLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
};

export default UseLocalStorage;
