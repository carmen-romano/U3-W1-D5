import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Netflix-assets/css/index.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/myFooter";

function App() {
  return (
    <div className="App bg-dark">
      <MyNavbar />
      <MyFooter />
    </div>
  );
}

export default App;
