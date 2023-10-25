import { useState } from "react";

import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Home from "./components/home";
import CssHome from "./components/css/cssHome";
import JsHome from "./components/javascript/jsHome";
import PhpHome from "./components/php/phpHome";
import ReactjsHome from "./components/reactjs/reactjsHome";
import CssIntro from "./components/css/cssPages/cssIntro";
import CssSetup from "./components/css/cssPages/cssSetup";
import Aboutus from "./footer/aboutus";
import Shadow from "./components/css/cssPages/cssShadows/shadow";

{
  /* <script
  src="https://kit.fontawesome.com/d18d22a038.js"
  crossorigin="anonymous"
></script>; */
}
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-wrap">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="css" element={<CssHome />}>
          <Route index element={<CssIntro />} />
          <Route path="cssIntro" element={<CssIntro />} />
          <Route path="cssShadows" element={<Shadow />} />
        </Route>
        <Route path="javascript" element={<JsHome />} />
        <Route path="reactjs" element={<ReactjsHome />} />
        <Route path="php" element={<PhpHome />} />
        <Route path="AboutUs" element={<Aboutus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
