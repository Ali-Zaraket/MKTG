export const companiesData = [
  {
    link: "#",
    img: "/EPIC.png",
  },
  {
    link: "#",
    img: "/Vanerbilt Health.png",
  },

  {
    link: "#",
    img: "/4D EMR.png",
  },
  {
    link: "#",
    img: "/Predators.png",
  },
  {
    link: "#",
    img: "/Nextech.png",
  },
  {
    link: "#",
    img: "/Apollo.png",
  },
];

export default function Companies() {
  return (
    <>
      <div className="font-semibold text-primary text-center mt-12">Trusted By</div>
      <div className="flex gap-4 items-center justify-center w-full overflow-auto flex-wrap">
        {companiesData.map((company, index) => (
          <img width="200" height="200" src={company.img} alt="" key={`hero-section-company-${index}`} />
        ))}
      </div>
    </>
  );
}
