import React from "react";
import { useState, useEffect } from "react";
import { About, Footer, Header, Skills, Work, NotFound } from "./container";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import "./App.scss";

const App = ({isVisible}) => {
  const [loading, setLoading] = useState(true);
  const override: CSSProperties = {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1"};
  useEffect(() => { setTimeout(() => { setLoading(false)}, 2000)}, []);

  return (
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
            : ( <RingLoader color={"#80b1e3"} loading={loading} size={100}cssOverride={override} />)
          }
          </m.div>
    </LazyMotion>
  );
};

export default App;
