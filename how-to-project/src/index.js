import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Feeds from "./Feeds";
// import "../public/index.css";

function Main() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header/>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Feeds />} />
          <Route path="/communities" element={"2"} />
          <Route path="/events" element={"3"} />
          <Route path="/profile" element={"4"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
