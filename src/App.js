import "./App.css";
import NavBar from "./modules/components/NavBar";
import ContentRoutes from "./Routes";

function App() {
  return (
    <>
      <div className="layout-div">
        <NavBar className="navbar" />
        <div className="content">
          <ContentRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
