import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Component/NavBar";
import Forms from "./Component/Forms";
import Tables from "./Component/Tables";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Forms />
      <Tables />
    </div>
  );
}

export default App;
