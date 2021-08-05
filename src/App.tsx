import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContainer from "./components/main_container/MainContainer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
