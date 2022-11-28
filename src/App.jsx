import React, { Suspense, lazy} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Loading from "./components/Loading";
import "./App.scss";
const Loadable = (Component) => (props) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
);
const About = Loadable(lazy(() => import('./container/About/About')));
const Header =Loadable(lazy(() => import('./container/Header/Header')));
const Footer =Loadable(lazy(() => import('./container/Footer/Footer')));
const Skills =Loadable(lazy(() => import('./container/Skills/Skills')));
const Work = Loadable(lazy(() => import('./container/Work/Work')));
const NotFound = Loadable(lazy(() => import('./container/NotFound/NotFound')));
const Navbar  = Loadable(lazy(() => import('./components/Navbar/Navbar')));

const App = () => {
  return ( 
          <Router>
            <Routes>
              <Route path="/" element={
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
          </Router>
    );
  };

export default App;
