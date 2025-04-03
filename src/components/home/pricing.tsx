import { useState } from "react";
import SectionTitle from "../common/section-title";
import Button from "../ui/button";

export const pricingData = {
  data: [
    {
      title: "Individual",
      price: "$40/month",
      list: [
        "Capture clinical photos with SmartFrames™",
        "Automatic background removal",
        "Search & manage patient photos by name, date, or procedure",
        "HIPAA-compliant cloud storage",
        "Unlimited users",
        "iOS app—works on iPhone, iPad, and Web",
      ],
      label: "Get Started",
      redirect: "https://imageassist-28638.web.app/#/register",
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
      redirect: "https://imageassist-28638.web.app/#/register",
      label: "Get Started",
      tiers: [
        { label: "2 users", price: "$80/practice" },
        { label: "3-5 users", price: "$150/practice" },
        { label: "6-10 users", price: "$250/practice" },
        { label: "11-20 users", price: "$400/practice" },
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
      redirect: "https://form.typeform.com/to/a377DoS0",
      label: "Contact Sales",
    },
  ],
};

function Card({ pricingCardData, index }: { pricingCardData: any; index: number }) {
  const [tierIdx, setTierIdx] = useState(1);

  const isMiddle = index % 2 !== 0;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setTierIdx(value);
  };

  return (
    <section
      className={`relative flex flex-col text-start rounded-3xl pb-8 pt-8 md:pt-10 px-6 sm:px-8 max-w-[500px] overflow-hidden ${
        isMiddle ? "bg-neutral" : "bg-transparent"
      }`}
    >
      <p className={`order-first font-inter ${!isMiddle ? "text-neutral" : "text-slate-900"}`}>
        {pricingCardData.title}
      </p>

      {pricingCardData.tiers ? (
        <>
          <div
            className={`order-first font-display text-4xl font-light tracking-tight ${
              !isMiddle ? "text-neutral" : "text-primary"
            } mt-4`}
          >
            {pricingCardData.tiers[tierIdx].price}
            <br />
            <span className="text-base">{pricingCardData.tiers[tierIdx].label}</span>
          </div>
          <div className="flex flex-col items-center my-4">
            <div className="relative w-full">
              {/* Tooltip */}
              {/* <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg">
              {pricingCardData.tiers[tierIdx].label} - {pricingCardData.tiers[tierIdx].price}
            </div> */}

              {/* Slider */}
              <input
                type="range"
                min="0"
                max={pricingCardData.tiers.length - 1}
                step="1"
                value={tierIdx}
                onChange={handleSliderChange}
                className="w-full cursor-pointer accent-secondary"
              />

              {/* Custom Track */}
              {/* <div className="absolute left-0 right-0 top-1/2 h-2 bg-gray-300 rounded-full transform -translate-y-1/2"></div> */}

              {/* Custom Thumb */}
              {/* <div
              className="absolute top-1/2 h-6 w-6 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all"
              style={{
                left: `${(tierIdx / (pricingCardData.tiers.length - 1)) * 100}%`,
              }}
            ></div> */}
            </div>

            {/* Labels Below Slider */}
            <div className="flex justify-between w-full text-sm">
              <div className="text-center">2 users</div>
              <div className="text-center">20 users</div>
            </div>
          </div>
        </>
      ) : (
        <p
          className={`order-first font-display text-4xl font-light tracking-tight ${
            !isMiddle ? "text-neutral" : "text-accent"
          } mb-8 mt-4`}
        >
          {pricingCardData.price}
        </p>
      )}

      <ul role="list" className="order-last mt-6 flex flex-col gap-y-3 text-base text-neutral">
        {pricingCardData.list.map((listItem: any, index: number) => (
          <li className="flex" key={`${listItem}-${index}`}>
            <svg
              aria-hidden="true"
              className={`h-6 w-6 flex-none fill-current stroke-current ${
                !isMiddle ? "text-neutral" : "text-gray-900"
              }`}
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
            <span className={`ml-4 text-start font-inter ${!isMiddle ? "text-neutral" : "text-gray-500"}`}>
              {listItem}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={!isMiddle ? "outline" : "solid"}
        color={!isMiddle ? "neutral" : "primary"}
        aria-label="Get started"
        className={`py-4 ${!isMiddle ? "bg-neutral !text-accent !ring-0 hover:bg-neutral/90 font-semibold" : ""}`}
        onClick={() => {
          window.open(pricingCardData.redirect, "_blank");
        }}
      >
        {pricingCardData?.label ? pricingCardData.label : "Get Started"}
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
      className="py-20 sm:py-44 text-center relative isolate z-20 -scroll-mt-16 bg-primary"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="md:text-center">
          <SectionTitle title="Simple, Scalable Pricing for Every Practice" reverse={true} />

          <p className="mt-8 text-lg text-neutral tracking-tight font-inter">
            Whether you’re a solo provider, group practice or healthcare system, ImageAssist offers flexible plans
            designed to fit your workflow and budget.
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
