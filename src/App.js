import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Particl from "./Components/Partical";

function App() {
  return (
    <>
     <Particl/>
      <Navbar />
      <Header />
      <About/>
      <Services/>
    </>
  );
}

export default App;
