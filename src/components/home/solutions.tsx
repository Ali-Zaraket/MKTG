import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import SectionTitle from "../common/section-title";

const features = [
  {
    title: "SmartFrames Technology",
    description:
      "As easy as mobile check deposit, and  built to meet plastic surgery society guidelines, 50+ full body SmartFrames ensure images are consistent and efficient. ImageAssist does the work so you don’t have to.",
    image: "/features/SmartFrame.gif",
    disabled: false,
  },
  {
    title: "Background Removal",
    description:
      "No need for special staff or space! ImageAssist utilizes the your iPad or iPhone camera to deliver high quality and perfectly clear images by automatically subtracting the subjects’ background.",
    image: "/features/BgRemoval.gif",

    disabled: false,
  },
  {
    title: "Patient Management",
    description:
      "ImageAssist is available as a standalone iOS app or a fully integrated solution via our API. It currently integrates with Epic, 4D EMR, Apollo, and Nextech and can be customized to route photos to any EMR or platform.",
    image: "/features/PatientManagement.gif",

    disabled: false,
  },
  {
    title: "HIPAA-Compliant",
    description:
      "Patients trust clinics to protect their data. ImageAssist’s HIPAA-compliant cloud storage keeps photos private, secure, and separate from personal galleries—ensuring professionalism and patient trust.",
    image: "/features/HIPAA.gif",
    disabled: false,
  },
];

export default function Solutions() {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section id="features" className="relative w-full overflow-hidden bg-[url('/bg.png')] bg-cover bg-center py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 relative">
        <SectionTitle reverse={true} title="Capture. Manage. Secure." />

        <p className="mt-8 text-lg tracking-tight text-neutral font-inter text-center">
          The future of clinical photography is here.
        </p>

        <Tab.Group
          as="div"
          className="mt-16 mb-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }: { selectedIndex: number }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 overflow-visible sm:pb-0 lg:col-span-5 font-inter">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-6 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        "group relative rounded-full px-6 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
                        selectedIndex === featureIndex
                          ? "bg-neutral lg:bg-neutral/10 lg:ring-1 lg:ring-inset lg:ring-neutral/10"
                          : "hover:bg-neutral/10 lg:hover:bg-neutral/5",
                        feature.disabled ? "pointer-events-none select-none" : ""
                      )}
                    >
                      <h3 className="font-medium">
                        <Tab
                          className={clsx(
                            "font-display text-lg ui-not-focus-visible:outline-none whitespace-nowrap",
                            selectedIndex === featureIndex
                              ? "text-slate-700 lg:text-neutral outline-none"
                              : "text-blue-100 hover:text-neutral lg:text-neutral"
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 hidden text-sm lg:block font-medium",
                          selectedIndex === featureIndex ? "text-neutral" : "text-blue-100 group-hover:text-neutral"
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7 h-full">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false} className="h-96 pb-12 sm:pb-0 sm:h-full">
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-neutral/10 ring-1 ring-inset ring-neutral/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-neutral sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="h-full mt-4 sm:mt-0 relative rounded-xl bg-neutral shadow-xl shadow-blue-900/20 sm:w-auto lg:w-[45rem]">
                      <div className="hidden lg:block absolute inset-0 sm:-top-14 sm:-bottom-14 bg-neutral sm:w-[150%] rounded-2xl" />

                      <img
                        className="relative m-auto mt-10 lg:ml-[20%] h-full object-cover rounded-2xl"
                        src={feature.image}
                        alt=""
                        sizes="(min-width: 1024px) 45rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </div>
    </section>
  );
}
