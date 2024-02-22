import ModuleList from "../Modules/List";
import "./index.css";
import Status from "./Status";


function Home() {
  return (
    <div className="home-container">
      <div style={{ marginRight: "20px" }}>
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px" }}>
      <div className="status-sidebar"  style={{ marginLeft: "5px", marginRight: "10px" }}>
        <Status />
      </div>
      </div>
    </div>
  );
}
export default Home;