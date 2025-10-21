import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import New from "./components/New/New";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";
import Find from "./components/Find/Find";

function App() {
  const [showSetup, setShowSetup] = useState(false);

  return (
    <>
      {/* Header tetap muncul */}
      <Header />

      {/* Kalau setup aktif, section lain hide */}
      <div className={`transition-all duration-700 ${showSetup ? "hidden" : "block"}`}>
        <Hero />
        <New />
        <Featured />
        <About />
        
      </div>

      {/* Find selalu render tapi punya mode sendiri */}
      <div
        className={`transition-all duration-700 ${
          showSetup ? "mt-0" : "mt-[150vh]"
        }`}
      >
        <Find showSetup={showSetup} setShowSetup={setShowSetup} />
      </div>
      <Footer />
    </>
  );
}

export default App;
