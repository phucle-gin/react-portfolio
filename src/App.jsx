import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import "./App.scss";

const AsyncNavbar = lazy(() => import("./components/Navbar/Navbar"));
const AsyncHeader = lazy(() => import("./container/Header/Header"));
const AsyncAbout = lazy(() => import("./container/About/About"));
const AsyncWork = lazy(() => import("./container/Work/Work"));
const AsyncSkills = lazy(() => import("./container/Skills/Skills"));
const AsyncFooter = lazy(() => import("./container/Footer/Footer"));
const AsyncNotFound = lazy(() => import("./container/NotFound/NotFound"));

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>{children}</Suspense>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <LoadingWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <div style={{overflow:"hidden"}}>
                <AsyncNavbar />
                <AsyncHeader />
                <AsyncAbout />
                <AsyncWork />
                <AsyncSkills />
                <AsyncFooter />
              </div>
            }
          />
          <Route path="*" element={<AsyncNotFound />} />
        </Routes>
      </LoadingWrapper>
    </Router>
  );
};

export default App;
