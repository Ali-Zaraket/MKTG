import Wrapper from "./wrapper";

import NavLink from "../ui/nav-link";
import Button from "../ui/button";

// function MobileNavIcon({ open }: { open: boolean }) {
//   return (
//     <svg
//       aria-hidden="true"
//       className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
//       fill="none"
//       strokeWidth={2}
//       strokeLinecap="round"
//     >
//       <path d="M0 1H14M0 7H14M0 13H14" className={clsx("origin-center transition", open && "scale-90 opacity-0")} />
//       <path d="M2 2L12 12M12 2L2 12" className={clsx("origin-center transition", !open && "scale-90 opacity-0")} />
//     </svg>
//   );
// }

// function MobileNavigation() {
//   const { logout, isAuthenticated, loginWithRedirect, user } = useAuth0();

//   return (
//     <Popover className="md:hidden -mr-1">
//       <Popover.Button
//         className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
//         aria-label="Toggle Navigation"
//       >
//         {({ open }) => <MobileNavIcon open={open} />}
//       </Popover.Button>
//       <Transition.Root>
//         <Transition.Child
//           as={Fragment}
//           enter="duration-150 ease-out"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="duration-150 ease-in"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
//         </Transition.Child>
//         <Transition.Child
//           as={Fragment}
//           enter="duration-150 ease-out"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="duration-100 ease-in"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <Popover.Panel
//             as="div"
//             className="absolute min-w-[300px] right-0 left-auto w-full top-10 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
//           >
//             {isAuthenticated && user?.name ? (
//               <div className="text-sm text-slate-600 pb-3 ml-2 font-inter">
//                 Welcome, {user.name}
//                 <hr className="mt-2" />
//               </div>
//             ) : null}
//             {navData.map((nav, idx) => (
//               <Popover.Button
//                 as="a"
//                 href={nav.link}
//                 className="block w-full p-2 text-left hover:bg-slate-600/10 font-inter"
//                 key={`main-nav-${idx}`}
//               >
//                 {nav.title}
//               </Popover.Button>
//             ))}

//             {isAuthenticated ? (
//               <Popover.Button
//                 as="a"
//                 href={customerPortalLink}
//                 className="block w-full p-2 text-left hover:bg-slate-600/10 font-inter whitespace-nowrap"
//               >
//                 Manage Subscription
//               </Popover.Button>
//             ) : null}

//             <hr className="m-2 border-slate-300/40" />

//             {isAuthenticated ? (
//               <Button
//                 variant="solid"
//                 color="orange"
//                 onClick={() =>
//                   logout({
//                     logoutParams: { returnTo: window.location.origin },
//                   })
//                 }
//               >
//                 Sign Out
//               </Button>
//             ) : (
//               <Button variant="solid" color="orange" onClick={() => loginWithRedirect()}>
//                 Sign In
//               </Button>
//             )}
//           </Popover.Panel>
//         </Transition.Child>
//       </Transition.Root>
//     </Popover>
//   );
// }

const navData = [
  {
    link: "/#features",
    title: "Features",
  },
  {
    link: "/#previews",
    title: "Previews",
  },
  {
    link: "/#pricing",
    title: "Pricing",
  },
  {
    link: "/#team",
    title: "Team",
  },
  {
    link: "/#faqs",
    title: "FAQs",
  },
];

function RightSection() {
  return (
    <div className="flex gap-x-4">
      <NavLink
        link="https://imageassist-28638.web.app/#/login"
        target="_blank"
        title="Log in"
        className="items-center justify-center !hidden sm:!flex"
      />
      <Button
        variant="solid"
        color="primary"
        href="https://apps.apple.com/us/app/image-assist-2-0/id6657948612"
        className="!text-neutral"
      >
        Download
      </Button>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <Wrapper>
        <div className="flex items-center justify-between">
          <a href="/">
            <img src="/ImageAssist Logo.png" alt="ImageAssist Logo" width={250} height={125} />
          </a>

          <nav className="hidden md:flex md:gap-x-6">
            {navData.map((nav, idx) => (
              <NavLink link={nav.link} title={nav.title} key={`main-nav-${idx}`} />
            ))}
          </nav>
          <RightSection />
        </div>
      </Wrapper>
    </header>
  );
}
