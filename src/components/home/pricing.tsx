import SectionTitle from "../common/section-title";
import Button from "../ui/button";

export const pricingData = {
  data: [
    {
      title: "Individual",
      price: "$39/user/month",
      list: [
        "Capture clinical photos with SmartFrames™",
        "Automatic background removal",
        "Search & manage patient photos by name, date, or procedure",
        "HIPAA-compliant cloud storage",
        "Unlimited users",
        "iOS app—works on iPhone, iPad, and Web",
      ],
    },
    {
      title: "Teams",
      price: "$35/user/month",

      list: [
        "Everything in Individual",
        "Centralized team photo management",
        "Admin tools to manage users and permissions",
        "Shared HIPAA-compliant cloud storage for your practice",
        "Easy EMR integrations, including 4D EMR & ARCC",
        "Volume pricing available and flexible team scaling—add/remove users anytime",
      ],
    },
    {
      title: "Enterprise",
      price: "Contact Sales",

      list: [
        "Everything in Teams",
        "Dedicated enterprise onboarding",
        "Custom API and EMR integrations",
        "Enterprise-grade security & compliance support",
        "Admin & reporting dashboards",
        "Priority customer support",
      ],
    },
  ],
};

function Card({ pricingCardData, index }: { pricingCardData: any; index: number }) {
  const isMiddle = index % 2 !== 0;

  return (
    <section
      className={`relative flex flex-col text-start rounded-3xl pb-8 pt-8 md:pt-10 md:pb-20  px-6 sm:px-8 max-w-[500px] overflow-hidden ${
        isMiddle ? "bg-[url('/bg.png')] bg-cover bg-center" : "bg-transparent"
      }`}
    >
      {/* {opposite ? (
        <img
          className="absolute invert right-0 bottom-0 opacity-90 -z-10 h-full"
          src="/background-call-to-action.jpg"
          alt=""
          draggable="false"
          loading="lazy"
        />
      ) : null} */}
      <span className="absolute top-2 left-2 bg-accent/10 text-accent px-2 w-fit mx-auto">
        {pricingCardData?.label && pricingCardData.label}
      </span>
      <p className={`order-first font-inter ${isMiddle ? "text-gray-50" : "text-slate-900"} mt-4`}>
        {pricingCardData.title}
      </p>

      <p
        className={`order-first font-display text-4xl font-light tracking-tight ${
          isMiddle ? "text-white" : "text-accent"
        } mb-8 mt-4`}
      >
        {pricingCardData.price}
      </p>
      <ul role="list" className="order-last mt-12 flex flex-col gap-y-3 text-base text-slate-200">
        {pricingCardData.list.map((listItem: any, index: number) => (
          <li className="flex" key={`${listItem}-${index}`}>
            <svg
              aria-hidden="true"
              className={`h-6 w-6 flex-none fill-current stroke-current ${isMiddle ? "text-gray-50" : "text-gray-900"}`}
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                strokeWidth="0"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>
            </svg>
            <span className={`ml-4 text-start font-inter ${isMiddle ? "text-gray-50" : "text-gray-500"}`}>
              {listItem}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={isMiddle ? "outline" : "solid"}
        color={isMiddle ? "neutral" : "primary"}
        aria-label="Get started"
        className={`py-4 ${isMiddle ? "bg-slate-50 !text-accent !ring-0 hover:bg-gray-200 font-semibold" : ""}`}
        onClick={() => {
          window.open("https://imageassist-28638.web.app/#/register", "_blank");
        }}
      >
        Get started
      </Button>
    </section>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      // className="py-20 sm:py-44 text-center relative isolate z-20 -scroll-mt-16 bg-[url('/bg.png')] bg-cover bg-center"
      className="py-20 sm:py-44 text-center relative isolate z-20 -scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="md:text-center">
          <SectionTitle title="Simple pricing, for everyone." reverse={false} />

          <p className="mt-8 text-lg tracking-tight font-inter">
            It doesn’t matter what size your business is, our software won’t work well for you.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid items-stretch max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-12 place-items-center">
          {pricingData.data.map((data, idx) => (
            <Card pricingCardData={data} key={`pricing-card-${idx}`} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
