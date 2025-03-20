export default function SectionTitle({ title, reverse }: { title: string; reverse?: boolean }) {
  return (
    <h2
      className={`font-display text-center text-3xl tracking-tight sm:text-4xl md:text-5xl ${
        reverse ? "text-neutral" : "text-primary"
      }`}
    >
      {title}
    </h2>
  );
}
