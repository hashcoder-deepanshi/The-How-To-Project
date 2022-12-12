import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Feeds from "./Feeds";
import MyActivity from './MyActivity';
import BlogPost from './BlogPost';
import SearchPage from './SearchPage';
import LoginPage from './LoginPage';
import { AuthContextProvider } from "../src/Firebase/AuthContext";

// import "../public/index.css";

function Main() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header/>  */}
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feeds />} />
          <Route path="/Trending" element={<Feeds />} />
          <Route path="/My-Activity" element={<MyActivity/>} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="/SearchPage" element={<SearchPage/>} />
          <Route path="/LoginPage" element={<LoginPage/>} />
        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
