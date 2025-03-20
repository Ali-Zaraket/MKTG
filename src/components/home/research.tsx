/* eslint-disable react/prop-types */
import { Tab } from "@headlessui/react";
import clsx from "clsx";

const screenshotContacts = "";
const screenshotInventory = "";
const screenshotProfitLoss = "";

const features = [
  {
    name: "Teams",
    summary: "Understand Bitcoin Macro like never before.",
    description:
      "Get a holistic look at the Bitcoin Economy and all the macro and moving parts that impact the network and future of finance.",
    image: screenshotProfitLoss,
    icon: "currency_bitcoin",
  },
  {
    name: "Bitcoin Layers",
    summary: "Stay on top of Bitcoin Scaling Solutions.",
    description:
      "Explore Stacks, Rootstock, Lightning Network, sidechains, and their impact on faster transactions & wider adoption.",
    image: screenshotInventory,
    icon: "stacks",
  },
  {
    name: "Bitcoin Projects",
    summary: "Deep dive into the top Bitcoin Dapps on the internet.",
    description:
      "Go beyond finance. Discover real-world use cases of innovative Bitcoin Dapps shaping the future of DeFi, Ordinals, NFTs, and more.",
    image: screenshotContacts,
    icon: "web_asset",
  },
];

function Feature({ feature, className, ...props }: { feature: any; className: string; props?: any }) {
  return (
    <div className={clsx(className)} {...props}>
      <div className={clsx("w-10 rounded-lg bg-accent/85")}>
        <span
          aria-hidden="true"
          className="h-10 w-10 text-slate-50 flex items-center justify-center font-bold material-symbols-outlined"
        >
          {feature.icon}
        </span>
      </div>
      <h3 className={clsx("mt-6 text-sm font-medium text-accent/90")}>{feature.name}</h3>
      <p className="mt-2 font-display text-xl text-slate-900">{feature.summary}</p>
      <p className="mt-4 text-sm text-slate-600 font-inter">{feature.description}</p>
    </div>
  );
}

function ResearchMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-6 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl pointer-events-none" />
          {/* <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <img
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
                loading="lazy"
              />
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
}

function ResearchDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {() => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none font-inter">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                className="relative pointer-events-none"
              />
            ))}
          </Tab.List>
          {/* <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.summary}
                  className={clsx(
                    "px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none",
                    featureIndex !== selectedIndex && "opacity-60"
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <img
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                      loading="lazy"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels> */}
        </>
      )}
    </Tab.Group>
  );
}

export default function Research() {
  return (
    <section id="research" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h2 className="font-medium text-2xl sm:text-5xl tracking-tight text-primary">
            Enterprise grade for any size team
          </h2>
          <br />
          <p className="font-inter text-lg tracking-tight">
            ImageAssist makes clinical photography simple, precise, and secure. Incubated at Vanderbilt University
            Medical Center and designed for healthcare professionals, our intuitive iOS app streamlines photo capture,
            management, and storage—so you can focus on patient care.
          </p>
        </div>
        <ResearchMobile />
        <ResearchDesktop />
      </div>
    </section>
  );
}
