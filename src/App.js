import React from "react";
import { useState, useEffect } from "react";
import { About, Footer, Header, Skills, Work, NotFound } from "./container";
import { Navbar } from "./components";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader"
import "./App.scss";

export const App = () => {
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 2000)
 },[])
 const override: CSSProperties = {
  position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1", 
};

  return (         
  <div className="app">
    { loading === false ? (   
        <Router>
        <Routes>
          <Route path="/" element ={
            <>
              <Navbar />
              <Header />
              <About />
              <Work />
              <Skills />
              <Footer />
            </>
        }/>
          <Route path="*" element= {<NotFound />}/>
        </Routes>
     </Router>  
      ) : (<RingLoader
      color={"#80b1e3"}
      loading={loading}
      size={100}
      cssOverride={override}
    />
    )} 
  </div>
  );
};

export default App;