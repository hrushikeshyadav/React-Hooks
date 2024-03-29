import React from "react";
import { Route, Routes } from "react-router-dom";
import ResizeWindow from "./modules/ResizeWindow";
import UseEffect from "./modules/hooks/UseEffect";
import UseContextFunc from "./modules/hooks/UseContext";
import UseMemo from "./modules/hooks/UseMemo";
import UseReducer from "./modules/hooks/UseReducer";
import Home from "./modules/hooks/Home";
import UseTransition from "./modules/hooks/UseTransition";
import UseDeferredValue from "./modules/hooks/UseDeferredValue";
import UseRef from "./modules/hooks/UseRef";
import UseCallback from "./modules/hooks/UseCallback";
import UseLayoutEffect from "./modules/hooks/useLayoutEffect";
import UseImperativeHandle from "./modules/hooks/UseImperativeHandle";
import UseId from "./modules/hooks/UseId";
import UseLocalStorageHook from "./modules/hooks/UseLocalStorageHook";

function ContentRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resize" element={<ResizeWindow />}></Route>
        <Route path="/use-ref" element={<UseRef />}></Route>
        <Route path="/use-effect" element={<UseEffect />}></Route>
        <Route path="/use-context" element={<UseContextFunc />}></Route>
        <Route path="/use-memo" element={<UseMemo />}></Route>
        <Route path="/use-reducer" element={<UseReducer />}></Route>
        <Route path="/use-transition" element={<UseTransition />}></Route>
        <Route path="/use-callback" element={<UseCallback />}></Route>
        <Route path="/use-layout-effect" element={<UseLayoutEffect />}></Route>
        <Route
          path="/use-deferred-value"
          element={<UseDeferredValue />}
        ></Route>
        <Route
          path="/use-imperative-handle"
          element={<UseImperativeHandle />}
        ></Route>
        <Route path="/use-id" element={<UseId />}></Route>
        <Route
          path="/use-local-storage"
          element={<UseLocalStorageHook />}
        ></Route>
      </Routes>
    </>
  );
}

export default ContentRoutes;
