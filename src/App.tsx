import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/home";
import {Art} from "./components/art";
import {Contact} from "./components/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/art" element={<Art />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
