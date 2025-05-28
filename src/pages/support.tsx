import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Support() {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });

  useEffect(() => {
    window.location.replace("https://form.typeform.com/to/Ql26NWwO");
  }, []);

  return <></>;
}
