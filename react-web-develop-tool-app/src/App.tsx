import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <div className="main-area wrapper">
          <SideBar />
          <Content />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
