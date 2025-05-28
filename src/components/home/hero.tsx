import Companies from "../common/companies";
import Wrapper from "../layouts/wrapper";
import Button from "../ui/button";
import ReactGA from "react-ga4";

export default function Hero() {
  return (
    <Wrapper>
      <div className="sm:py-10">
        <div className="flex md:flex-nowrap flex-wrap items-start py-5 gap-8 mt-6">
          <div className="mt-0 md:mt-24 max-w-[750px]">
            <h1 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl capitalize text-primary">
              The new standard in clinical <br /> photography
            </h1>
            <h3 className="text-2xl mt-8">
              Capture, manage, and secure high-quality patient photos with ease. Whether you're building
              before-and-after galleries, presenting podium talks, publishing research, or simply ensuring consistent
              documentation—ImageAssist is your go-to app.
            </h3>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="https://apps.apple.com/us/app/image-assist-2-0/id6657948612"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "Download App",
                    action: "click",
                  });
                }}
              >
                <img src="/App+store.png" alt="" width="150" />
              </a>

              <a href="https://www.youtube.com/watch?v=jHBM3hYFi1k" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" color="primary">
                  <span className="material-symbols-outlined">play_arrow</span> watch the video
                </Button>
              </a>
            </div>
          </div>
          <div className="">
            <img src="/hero.png" alt="" width="1280" height="300" />
          </div>
        </div>
        <Companies />
      </div>
    </Wrapper>
  );
}
