import SectionTitle from "../common/section-title";
import Wrapper from "../layouts/wrapper";

const quotes = [
  {
    name: "Dr. Foad Nahai",
    company: "MetroDerm & Past President ISAPS",
    quote:
      "Unless your practice has a professional photographer this app is for you. All the guess work is taken out and the images are standardized and professional in quality. Its for my practice so all nurses and assistants can take publication quality photos!",
    image: "/quotes/dr+nahai.png",
  },
  {
    name: "Michele Crain",
    company: "Face Forward Correctives",
    quote:
      "ImageAssist has transformed how I capture consistent, professional before-and-after photos to document my clients’ corrective journeys.",
    image: "/quotes/Michele+Crain.png",
  },
  {
    name: "Nicolas Biro, MD",
    company: "Pacific Eye Institute",
    quote:
      "ImageAssist makes patient photos fast, professional, and HIPAA-compliant. It’s an essential tool for any oculoplastic practice.",
    image: "/quotes/Nicolas+Biro.png",
  },
  {
    name: "Danielle Hayes, MD",
    company: "Department of Plastic Surgery VUMC",
    quote:
      "ImageAssist makes it easy to capture board-standard photos with consistent angles and backgrounds. A game-changer for residents like me!",
    image: "/quotes/Danielle+Hayes.png",
  },
  {
    name: "Dr. Rahman Barry",
    company: "Wake Plastic Surgery",
    quote:
      "ImageAssist is a game-changer for consistent, professional before-and-after photos. Easy to use, customizable, and essential for my practice.",
    image: "/quotes/Dr+Rahman+Barry.png",
  },

  {
    name: "Clare Gargaro PA-C",
    company: "Vanderbilt University Medical Center",
    quote:
      "ImageAssist makes sharing standardized patient photos easy and secure, improving team communication, decision-making, and workflow efficiency",
    image: "/quotes/Clare+Gargaro.png",
  },
];

function Quote({ quote }: { quote: (typeof quotes)[number] }) {
  return (
    <article className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
      <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-100">
        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
      </svg>
      <blockquote className="relative">
        <p className="text-lg tracking-tight text-slate-900">{quote.quote}</p>
      </blockquote>
      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div>
          <div className="font-display text-base text-slate-900">{quote.name}</div>
          <div className="mt-1 text-sm text-slate-500 max-w-[260px]">{quote.company}</div>
        </div>
        <div className="overflow-hidden rounded-full bg-slate-50">
          <img
            alt=""
            loading="lazy"
            width="56"
            height="56"
            decoding="async"
            data-nimg="1"
            className="h-14 w-14 object-cover"
            style={{ color: "transparent" }}
            src={quote.image}
          />
        </div>
      </figcaption>
    </article>
  );
}

export default function Quotes() {
  return (
    <section id="features" className="relative w-full overflow-hidden bg-neutral py-20">
      <Wrapper>
        <SectionTitle reverse={false} title="Why Clinicans Love ImageAssist!" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-12">
          <div className="flex flex-col gap-12">
            <Quote quote={quotes[0]} />
            <Quote quote={quotes[1]} />
          </div>
          <div className="flex flex-col gap-8">
            <Quote quote={quotes[3]} />
            <Quote quote={quotes[2]} />
          </div>
          <div className="flex flex-col gap-8">
            <Quote quote={quotes[4]} />
            <Quote quote={quotes[5]} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
