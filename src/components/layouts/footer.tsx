import NavLink from "../ui/nav-link";
import ReactGA from "react-ga4";

const navData = [
  {
    link: "/traineediscount",
    title: "Trainee Discount",
  },
  {
    link: "https://form.typeform.com/to/Ql26NWwO",
    title: "Support",
  },
  {
    link: "/userguide",
    title: "User Guide",
  },
  {
    link: "/terms-of-service",
    title: "Terms of Service",
  },
  {
    link: "/privacy-policy",
    title: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="py-4 md:py-16">
          <div className="w-full flex items-center justify-center">
            <a href="/">
              <img src="/ImageAssist Logo.png" loading="lazy" alt="ImageAssist Logo" width={200} height={100} />
            </a>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex flex-col md:flex-row justify-center gap-x-6">
              {navData.map((nav, idx) => (
                <NavLink link={nav.link} title={nav.title} key={`main-nav-${idx}`} />
              ))}
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a
              className="group"
              aria-label="ImageAssist on LinkedIn"
              href="https://www.linkedin.com/company/imageassistinc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "Social Links",
                  action: "click",
                  label: "Linkedin",
                });
              }}
            >
              <svg className="h-6 w-6 fill-primary/75 group-hover:fill-primary" viewBox="0 0 310 310">
                <g id="XMLID_801_">
                  <path
                    id="XMLID_802_"
                    d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z"
                  />
                  <path
                    id="XMLID_803_"
                    d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                  />
                  <path
                    id="XMLID_804_"
                    d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z"
                  />
                </g>
              </svg>
            </a>

            <a
              className="group"
              aria-label="ImageAssist on X"
              href="https://x.com/imageassist"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "Social Links",
                  action: "click",
                  label: "X/Twitter",
                });
              }}
            >
              <svg className="h-6 w-6 fill-primary/75 group-hover:fill-primary" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path>
              </svg>
            </a>

            <a
              className="group"
              aria-label="ImageAssist on YouTube"
              href="https://www.youtube.com/@ImageAssist"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                ReactGA.event({
                  category: "Social Links",
                  action: "click",
                  label: "Youtube",
                });
              }}
            >
              <svg className="h-6 w-6 fill-primary/75 group-hover:fill-primary" viewBox="0 -3 20 20" aria-hidden="true">
                <g id="Page-1" strokeWidth="1">
                  <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">Copyright ©{new Date().getFullYear()} ImageAssist, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
