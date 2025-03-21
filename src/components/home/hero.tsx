import Companies from "../common/companies";
import Wrapper from "../layouts/wrapper";
import Button from "../ui/button";

export default function Hero() {
  return (
    <Wrapper>
      <div className="sm:py-10">
        <div className="flex md:flex-nowrap flex-wrap items-start py-5 gap-8 mt-6">
          <div className="mt-0 md:mt-24 max-w-[750px]">
            <h1 className="text-slate-900 text-4xl font-semibold leading-tight font-inter capitalize">
              The new standard in clinical <br /> photography
            </h1>
            <h3 className="text-slate-500 text-2xl mt-8">
              Capture, manage, and secure high-quality patient photos with simplicity, precision, and security—all in a
              seamless IOS experience.
            </h3>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="https://apps.apple.com/us/app/image-assist-2-0/id6657948612"
                target="_blank"
                rel="noopener noreferrer"
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
