import SectionTitle from "../common/section-title";

const team = [
  {
    name: "Dr. Michael Golinko",
    image: "/team/Golinko.png",
    role: "Founder & Chief Executive Officer",
    description:
      "Dr. Michael Golinko is the Delta Dental of Tennessee/Smile 180 Foundation Endowed Director of the Cleft & Craniofacial Program and Chief of Pediatric Plastic Surgery at Monroe Carrell Jr. Children's Hospital in Nashville and is currently Associate Professor of Plastic Surgery at Vanderbilt University Medical Center. Recognizing the crucial role that clear, high-quality patient photos play in clinical documentation, diagnosis, and treatment planning, Dr. Golinko sought to create an elegant tool that would simplify the process and ensure consistent and high-quality images each and every time.",
  },
  {
    name: "Jonathan Sadlowe",
    image: "/team/Sadlowe.png",
    role: "Co-founder & COO",
    description:
      "Jonathan Sadlowe is an EIR at Vanderbilt University Medical Center and General Partner at Gossamer Capital. With over 15 years as an entrepreneur and tech executive, he has achieved two successful exits, and continues to lead the data company Signal21. Previously, he was CMO at Spacious (acquired by WeWork), Marketing Manager at Google Cloud (Workspace and GCP), and strategist at top advertising agencies like Wieden + Kennedy, Young & Rubicam, and BBH. He holds an MBA and an MS in molecular biology.",
  },
  {
    name: "Jennifer Bennett",
    image: "/team/Bennett.png",
    role: "Head of Design",
    description:
      "Jennifer Bennett is a founding partner and head of product at LunarLincoln, a Nashville-based mobile development agency. With over 15 years of experience in product design, she specializes in crafting intuitive solutions for complex challenges. Jennifer has collaborated with startups and Fortune 50 companies to launch software that delights users and drives business results. She holds a BA from Vanderbilt University and enjoys mentoring junior designers and early-stage startups.",
  },
  {
    name: "Rafael de Marco",
    image: "/team/rafa.png",
    role: "Head of Product & Engineering",
    description:
      "Passionate about building products that solve real problems and make an impact, Rafael is the lead engineer at ImageAssist. With experience in healthcare, fintech, and e-commerce, they specialize in mobile app development, AI-powered solutions, and scalable core systems. At FlowLabs, he's helped startups and enterprises turn ideas into intuitive, high-performance applications, streamlining operations and optimizing workflows for fast, cost-effective results.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 bg-[#f5f1ed]">
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
              <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
              <p className="text-gray-600 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
