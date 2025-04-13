export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1480px] mx-auto px-3 md:px-6">{children}</div>;
}
