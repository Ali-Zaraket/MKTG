import SectionTitle from "../common/section-title";
import Wrapper from "../layouts/wrapper";

const faq = [
  {
    question: "What was that SmartFrames™ thing all about?",
    answer:
      "SmartFrames guide you to align body areas perfectly for consistent clinical photos. It’s like a green light for great photography.",
  },
  {
    question: "Is ImageAssist HIPAA-compliant?",
    answer: "Absolutely. We use encrypted cloud storage and never store photos on your personal camera roll.",
  },
  {
    question: "Is it easy for staff to learn?",
    answer: "Very. We designed ImageAssist to be intuitive—even new users can capture consistent photos on day one.",
  },
  {
    question: "How does background removal work?",
    answer:
      "With one click, ImageAssist automatically removes distractions, giving you clean, professional-looking images every time.",
  },
  {
    question: "Does it work with EMRs?",
    answer:
      "Yes! We integrate with 4D EMR, ARCC, and more. We also support custom workflows for most HIPAA-compliant platforms.",
  },
  {
    question: "Do I need special equipment?",
    answer: "Nope! Just an iPhone or iPad. No cords, no complicated setup—just download and go.",
  },
  {
    question: "Can I search for patient photos easily?",
    answer: "Yep—just type a patient name, procedure, or date. Everything’s organized and easy to find in seconds.",
  },
  {
    question: "Can I use ImageAssist with my whole team?",
    answer: "You bet. Our Teams subscription makes it easy to add users, share access, and manage permissions.",
  },
  {
    question: "What if I need help?",
    answer: "Email us at hello@imageassist.com. We’re real people, and we’re happy to walk you through it.",
  },
];

export default function Faq() {
  return (
    <section id="faqs" className="relative w-full overflow-hidden bg-neutral py-20">
      <Wrapper>
        <div className="mx-auto md:text-center">
          <SectionTitle title="Frequently Asked Questions" />
          <br />
          <p className="font-inter text-lg tracking-tight">
            Got questions? We've got quick, clear answers—so you can focus on patient care, not troubleshooting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {faq.map((item, index) => (
            <div key={index} className="rounded-lg p-4">
              <h3 className="text-xl font-medium">{item.question}</h3>
              <p className="mt-4 opacity-75">{item.answer}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
