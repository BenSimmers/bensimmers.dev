import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="flex flex-grow flex-col items-center justify-center gap-8 py-20 text-center">
    <p className="neo-eyebrow">Error 404</p>
    <h1 className="font-display text-[6rem] font-bold leading-none tracking-tighter text-primary sm:text-[10rem]">
      404
    </h1>
    <p className="neo-chip neo-shadow bg-secondary text-on-secondary">Page Not Found</p>
    <p className="max-w-md font-body-lg text-body-lg text-on-surface-variant">
      The page you are looking for has been moved, removed, or never existed.
    </p>
    <Link to="/" className="neo-button">
      Back to home
    </Link>
  </section>
);

export default NotFound;
