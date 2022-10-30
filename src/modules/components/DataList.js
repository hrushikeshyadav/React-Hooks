import React, { useDeferredValue, useMemo } from "react";

function DataList({ name }) {
  const deferredName = useDeferredValue(name, { timeoutMs: 1000 });

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(<div key={Math.random()}>{deferredName}</div>);
    }
    return l;
  }, [deferredName]);

  return list;
}

export default DataList;
