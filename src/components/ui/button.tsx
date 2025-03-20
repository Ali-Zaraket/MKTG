import clsx from "clsx";

const baseStyles = {
  solid:
    "group cursor-pointer inline-flex items-center justify-center rounded-full py-2 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group cursor-pointer inline-flex ring-1 items-center justify-center rounded-full py-2 px-6 text-sm focus:outline-none",
};

const variantStyles = {
  solid: {
    primary:
      "bg-primary text-white hover:bg-primary/90 hover:text-white active:bg-primary/90 active:text-white focus-visible:outline-primary disabled:pointer-events-none",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 hover:text-white active:bg-secondary/90 active:text-white focus-visible:outline-secondary disabled:pointer-events-none",
    neutral:
      "bg-neutral text-white hover:bg-neutral/90 hover:text-primary active:bg-neutral/90 active:text-primary focus-visible:outline-neutral disabled:pointer-events-none",
  },
  outline: {
    primary: "ring-primary text-primary hover:text-primary/90 hover:ring-primary/90 active:ring-primary/90",
    secondary: "ring-secondary text-secondary hover:text-secondary/90 hover:ring-secondary/90 active:ring-secondary/90",
    neutral: "ring-neutral text-primary hover:text-primary/90 hover:ring-neutral/90 active:ring-neutral/90",
  },
};

type ButtonProps = {
  variant: "solid" | "outline";
  color: "primary" | "secondary" | "neutral";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: { className?: string; href?: string } & ButtonProps) {
  props.variant ??= "solid";
  props.color ??= "primary";

  className = clsx(
    baseStyles[props.variant],
    props.variant === "outline"
      ? variantStyles.outline[props.color]
      : props.variant === "solid"
      ? variantStyles.solid[props.color]
      : undefined,
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <a className={className} href={props.href} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
  );
}
