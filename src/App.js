import "./App.css";
import { Route, Routes } from "react-router-dom";
import ResizeWindow from "./modules/ResizeWindow";
import UseEffect from "./modules/hooks/UseEffect";
import UseContextFunc from "./modules/hooks/UseContext";
import UseMemo from "./modules/hooks/UseMemo";
import UseReducer from "./modules/hooks/UseReducer";
import Home from "./modules/hooks/Home";
import UseTransition from "./modules/hooks/UseTransition";
import UseDeferredValue from "./modules/hooks/UseDeferredValue";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resize" element={<ResizeWindow />}></Route>
        <Route path="/use-effect" element={<UseEffect />}></Route>
        <Route path="/use-context" element={<UseContextFunc />}></Route>
        <Route path="/use-memo" element={<UseMemo />}></Route>
        <Route path="/use-reducer" element={<UseReducer />}></Route>
        <Route path="/use-transition" element={<UseTransition />}></Route>
        <Route
          path="/use-deferred-value"
          element={<UseDeferredValue />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
