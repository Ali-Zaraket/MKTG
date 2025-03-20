import clsx from "clsx";

export default function NavLink({
  link,
  title,
  className,
  ...props
}: { link: string; title: string; className?: string } & React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={clsx(
        "inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-accent/10 hover:text-slate-900 hover:bg-secondary/10",
        className
      )}
      href={link}
      {...props}
    >
      {title}
    </a>
  );
}
