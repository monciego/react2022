import "./App.css";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Interests from "./components/Interests";
import NameIntroduction from "./components/NameIntroduction";

function App() {
  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <Image />
          <NameIntroduction />
          <CTA />
          <About />
          <Interests />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
