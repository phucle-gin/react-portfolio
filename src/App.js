import React from "react";
import { useState, useEffect } from "react";
import { About, Footer, Header, Skills, Work, NotFound } from "./container";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => { setLoading(false)}, 2000)}, []);

  return (
    <>
     <LazyMotion features={domAnimation}>
         <m.div className="app">
          {loading === false ? (
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Navbar />
                      <Header />
                      <About />
                      <Work />
                      <Skills />
                      <Footer />
                    </>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>) 
            : ( <Loading/>)
          }
          </m.div>
      </LazyMotion>
    </>
  );
};

export default App;
