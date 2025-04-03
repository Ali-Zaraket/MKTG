import Hero from "../components/home/hero";
import DownloadApp from "../components/home/download-app";
import Solutions from "../components/home/solutions";
import Team from "../components/home/team";
import Pricing from "../components/home/pricing";
import Research from "../components/home/research";
import Quotes from "../components/home/quotes";
import Contact from "../components/home/contact";
import Videos from "../components/home/videos";
import Press from "../components/home/press";
import FAQ from "../components/home/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <Research />
      {/* <Videos /> */}
      <DownloadApp />
      <Quotes />
      <Pricing />
      <FAQ />
      <Team />
      <Press />
      <Contact />
    </>
  );
}
