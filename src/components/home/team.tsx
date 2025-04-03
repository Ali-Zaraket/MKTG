import SectionTitle from "../common/section-title";

const team = [
  {
    name: "Dr. Michael Golinko",
    image: "/team/Golinko.png",
    role: "Founder & Chief Executive Officer",
    description:
      "Dr. Michael Golinko is the Chief of Pediatric Plastic Surgery at Monroe Carrell Jr. Children's Hospital in Nashville and is currently Associate Professor of Plastic Surgery at Vanderbilt University Medical Center. Recognizing the crucial role that clear, high-quality patient photos play in clinical documentation, diagnosis, and treatment planning, Dr. Golinko created ImageAssist to simplify the process and ensure consistent and high-quality images each and every time.",
  },
  {
    name: "Jonathan Sadlowe",
    image: "/team/Sadlowe.png",
    role: "Co-founder & COO",
    description:
      "Jonathan Sadlowe is an EIR at Vanderbilt University Medical Center and General Partner at Gossamer Capital. With 15+ years as an entrepreneur and tech exec, he’s had two successful exits and now leads the data company Signal21. He was previously CMO at Spacious (acquired by WeWork), Marketing Manager at Google Cloud, and a strategist at top agencies including Wieden+Kennedy and BBH. He holds an MBA and an MS in molecular biology.",
  },
  {
    name: "Jennifer Bennett",
    image: "/team/Bennett.png",
    role: "Head of Design",
    description:
      "Jennifer Bennett leads design at ImageAssist with 15+ years of experience in product design, specializing in intuitive solutions for complex challenges. At LunarLincoln, she’s worked with startups and Fortune 50 companies to launch software that delights users and drives results. Jennifer holds a BA from Vanderbilt University and enjoys mentoring junior designers and early-stage startups.",
  },
  {
    name: "Rafael de Marco",
    image: "/team/rafa.png",
    role: "Head of Product & Engineering",
    description:
      "Rafael De Marco is the lead engineer at ImageAssist, passionate about building products that solve real problems and make an impact. With experience in healthcare, fintech, and e-commerce, he specializes in mobile app development, AI-powered solutions, and scalable systems. At FlowLabs, he helps startups and enterprises turn ideas into intuitive, high-performance apps that streamline operations and deliver fast, cost-effective results.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <SectionTitle title="Meet Our Team" reverse={false} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12">
          {team.map((member) => (
            <div key={member.name}>
              <img
                src={member.image}
                alt={member.name}
                className="object-contain aspect-square rounded-lg"
                loading="lazy"
              />
              <h3 className="text-neutral text-2xl font-semibold mt-4">{member.name}</h3>
              <p className="text-neutral/90 text-sm">{member.role}</p>
              <p className="text-neutral/70 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
