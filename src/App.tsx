import React, { SetStateAction, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { WavyContainer, WavyLink } from "react-wavy-transitions";

const About = React.lazy(() => import("./routes/About"));
const Home = React.lazy(() => import("./routes/Home"));
const Contact = React.lazy(() => import("./routes/Contact"));
const Portfolio = React.lazy(() => import("./routes/Portfolio"));
const NotFound = React.lazy(() => import("./components/404"));
const Nav = React.lazy(() => import("./utils/Navigation"));
const Footer = React.lazy(() => import("./utils/Footer"));

const App: React.FunctionComponent<{}> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BrowserRouter>
        <WavyContainer />
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
                <main className="flex-grow">
                  <Outlet />
                </main>
                <Footer />
              </React.Fragment>
            }
          >
            <Route index element={<Home />} />
            <Route
              path="/about"
              element={
                <Suspense fallback={<>...</>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<>...</>}>
                  <Contact />
                </Suspense>
              }
            />

            <Route
              path="/portfolio"
              element={
                <Suspense fallback={<>...</>}>
                  <Portfolio />
                </Suspense>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
