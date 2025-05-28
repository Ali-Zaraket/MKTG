import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

export default function NotFound() {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col bg-accent/10">
      <h1 className="text-4xl font-medium text-center mb-4">
        The page you are looking for <br></br> does not exist.
      </h1>
      <Link to="/" title="Home page" className="mt-6">
        Back to Home page
      </Link>
    </div>
  );
}
