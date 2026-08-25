import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const Portfolio = lazy(() => import("./routes/Portfolio"));
const Contact = lazy(() => import("./routes/Contact"));
const NotFound = lazy(() => import("./routes/NotFound"));

const RouteFallback = () => (
  <div className="flex min-h-[40vh] flex-col items-center justify-center gap-6">
    <span className="inline-flex h-10 w-10 animate-spin border-3 border-primary border-t-secondary" />
    <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">Loading next view</p>
  </div>
);

const Layout = () => (
  <>
    <Nav />
    <main className="mx-auto flex w-full max-w-container-max flex-grow flex-col px-6 py-12 md:px-margin md:py-margin">
      <Suspense fallback={<RouteFallback />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </>
);

const App = () => (
  <BrowserRouter>
    <div className="flex min-h-screen flex-col bg-background font-body-md text-primary">
      <WavyContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
