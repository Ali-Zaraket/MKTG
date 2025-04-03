import { Link } from "react-router-dom";
import Wrapper from "../layouts/wrapper";

export default function Press() {
  return (
    <section id="press" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
      <Wrapper>
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="mx-auto md:text-center">
            <h2 className="font-medium text-2xl sm:text-5xl tracking-tight text-primary">
              Recognized for Innovation & Impact
            </h2>
            <br />
            <p className="font-inter text-lg tracking-tight">
              Featured in Annals of Plastic Surgery and spotlighted by the American Society of Plastic Surgeons, our
              platform is trusted by leading institutions for its innovation, impact, and ease of use.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-8 justify-between mb-6 mt-20">
          <Link
            to="https://journals.lww.com/annalsplasticsurgery/abstract/2024/04000/imageassist__a_novel_smartphone_application_for.6.aspx"
            className="w-full flex flex-col items-center"
            target="_blank"
          >
            <img className="mb-6" src="/press/ImageAssist Annals of Plastic Surgery.png" width="250" alt="" />
            <legend className="font-light text-lg text-center mb-4">
              Read how ImageAssist is redefining clinical photography in peer-reviewed research.
            </legend>
          </Link>

          <Link
            to="https://issuu.com/plasticsurgerynews/docs/1-2-25_psn?fr=xKAE9_zU1NQ"
            target="_blank"
            className="w-full flex flex-col items-center"
          >
            <img className="mb-6" src="/press/ImageAssist ASPS Magazine.png" alt="" width="250" />
            <legend className="font-light text-lg text-center mb-4">
              Discover why ImageAssist won the ASPS Innovation Challenge and is reshaping workflows.
            </legend>
          </Link>

          <Link to="/" className="w-full flex flex-col items-center">
            <img className="mb-6" src="/press/ImageAssist US Patent.png" alt="" width="250" />
            <legend className="font-light text-lg text-center mb-4">
              ImageAssist SmartFrames™ are patent-pending technology built for clinical precision.
            </legend>
          </Link>
        </div>
      </Wrapper>
    </section>
  );
}
