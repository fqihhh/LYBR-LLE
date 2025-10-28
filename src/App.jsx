import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import New from "./components/New/New";
import Featured from "./components/Featured/Featured";

import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Find from "./components/Find/Find";


function App() {


  return (
    <>
      <Header />
      <Hero />
      <New />
      <Featured />
      <Products />
      <About />
      <Find />
      <Footer />
    </>
  );
}

export default App;


// import { useState } from "react";
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import New from "./components/New/New";
// import Featured from "./components/Featured/Featured";
// import Footer from "./components/Footer/Footer";
// import Products from "./components/Products/Products";

// function App() {
//   const [page, setPage] = useState("home");

//   return (
//     <>
//       <Header setPage={setPage} />

//       {page === "home" && (
//         <>
//           <Hero />
//           <About />
//           <New />
//           <Featured />
//         </>
//       )}

//       {page === "products" && <Products />}

//       <Footer />
//     </>
//   );
// }

// export default App;


