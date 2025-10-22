import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import New from "./components/New/New";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";
// import Find from "./components/Find/Find";
function App() {
  return (
    <>
      <Header  />
      <Hero />
      <About />
      <New />
      <Featured />
      <Footer />
    </>
  );
}

export default App;




