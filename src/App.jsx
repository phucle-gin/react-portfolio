import React, { Suspense, lazy } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import "./App.scss";

const Loadable = (importFunc) => {
  const LazyComponent = lazy(importFunc);
  return (props) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const AsyncAbout = Loadable(() => import("./container/About/About"));
const AsyncHeader = Loadable(() => import("./container/Header/Header"));
const AsyncFooter = Loadable(() => import("./container/Footer/Footer"));
const AsyncSkills = Loadable(() => import("./container/Skills/Skills"));
const AsyncWork = Loadable(() => import("./container/Work/Work"));
const AsyncNotFound = Loadable(() => import("./container/NotFound/NotFound"));
const AsyncNavbar = Loadable(() => import("./components/Navbar/Navbar"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LazyMotion features={domAnimation}>
              <AsyncNavbar />
              <AsyncHeader />
              <AsyncAbout />
              <AsyncWork />
              <AsyncSkills />
              <AsyncFooter />
            </LazyMotion>
          }
        />
        <Route path="*" element={<AsyncNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
