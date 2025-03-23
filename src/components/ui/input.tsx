import clsx from "clsx";

export default function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        "block w-full appearance-none rounded-lg border-2 border-neutral/50 px-4 py-3 text-neutral placeholder-neutral focus:outline-none focus:ring focus:ring-neutral sm:text-sm",
        props.className
      )}
      {...props}
    />
  );
}
