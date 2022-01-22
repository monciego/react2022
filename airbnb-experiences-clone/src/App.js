import "./App.css";
import Activities from "./components/Activities";
import Cities from "./components/Cities";
import Experiences from "./components/Experiences";
import Hosts from "./components/Hosts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Activities />
      <Hosts />
      <Cities />
      <Experiences />
    </>
  );
}

export default App;
