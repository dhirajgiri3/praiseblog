import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Loader from "./component/Loader";
import Landing from "./component/Landing";
import Home from "./component/Home";
import Header from "./component/Header";
import Metaverse from "./component/Metaverse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Joebiden from './component/Joebiden';
import Londonstartup from './component/Londonstartup';
import Americannuc from './component/Americannuc';
import Sharda from './component/Sharda';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  });
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/metaverse" element={<Metaverse />}></Route>
            <Route path="/joebiden" element={<Joebiden />}></Route>
            <Route path="/londonstartup" element={<Londonstartup />}></Route>
            <Route path="/modernizMissiles" element={<Americannuc />}></Route>
            <Route path="/sharda" element={<Sharda />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
