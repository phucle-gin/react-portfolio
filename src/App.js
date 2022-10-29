import React from "react";
import { About, Footer, Header, Skills, Work, NotFound } from "./container";
import { Navbar } from "./components";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.scss";

export const App = () => {
  
  return (         
  
  <div className="app">
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
  </div>
  );
};

export default App;