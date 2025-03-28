import Wrapper from "../layouts/wrapper";

export default function Videos() {
  return (
    <section id="videos" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
      <Wrapper>
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="mx-auto md:text-center">
            <h2 className="font-medium text-2xl sm:text-5xl tracking-tight text-primary">
              Explore ImageAssist in Action
            </h2>
            <br />
            <p className="font-inter text-lg tracking-tight">
              Discover how ImageAssist transforms clinical photography with our brief introductory video both in EPIC
              and the iOS app . See firsthand the simplicity, security, and sophistication of our technology that helps
              healthcare professionals focus on what truly matters—patient care.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-8 justify-between mb-6 mt-20">
          <div className="w-full">
            <legend className="text-secondary font-medium text-lg text-center mb-4">iOS App for iPhone & iPad</legend>
            <iframe
              //   width="200"
              //   height="113"
              src="https://www.youtube.com/embed/jHBM3hYFi1k?feature=oembed&amp;enablejsapi=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
              title="ImageAssist Overview"
              id="yui_3_17_2_1_1743123162160_78"
              data-gtm-yt-inspected-8="true"
              className="w-full min-h-96"
            ></iframe>
          </div>

          <div className="w-full">
            <legend className="text-secondary font-medium text-lg text-center mb-4">EPIC Integration at VUMC</legend>
            {/* <video
              playsInline={true}
              webkit-playsinline=""
              data-poster="https://video.squarespace-cdn.com/content/v1/65e8c23f70a5d66cebb6dabf/bb28f667-ba44-4c86-b6ec-a16fc47b47fa/thumbnail"
              src="blob:https://www.imageassist.com/9d5dffc1-d35c-46fa-b1ad-153a20bd7f85"
            ></video> */}

            <iframe
              //   width="200"
              //   height="113"
              src="https://www.youtube.com/embed/ujAMugNR6uU?feature=oembed&amp;enablejsapi=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
              title="ImageAssist Overview"
              id="yui_3_17_2_1_1743123162160_78"
              data-gtm-yt-inspected-8="true"
              className="w-full min-h-96"
            ></iframe>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
