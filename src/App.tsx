import React, { SetStateAction, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";

const About = React.lazy(() => import("./routes/About"));
const Home = React.lazy(() => import("./routes/Home"));
const Contact = React.lazy(() => import("./routes/Contact"));
const Portfolio = React.lazy(() => import("./routes/Portfolio"));
const NotFound = React.lazy(() => import("./components/404"));
const Nav = React.lazy(() => import("./utils/Navigation"));
const Footer = React.lazy(() => import("./utils/Footer"));

const RouteFallback: React.FunctionComponent = () => (
  <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-slate-500">
    <span className="inline-flex h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-slate-600" />
    <p className="text-sm font-medium tracking-wide uppercase">Loading next view</p>
  </div>
);

type AppLayoutProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({ isOpen, setIsOpen }) => (
  <React.Fragment>
    <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </React.Fragment>
);

const App: React.FunctionComponent<{}> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <div className="min-h-screen bg-slate-50/60">
          <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
            <WavyContainer />
            <Routes>
              <Route path="/" element={<AppLayout isOpen={isOpen} setIsOpen={setIsOpen} />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
