export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1048px] mx-auto px-6">{children}</div>;
}
