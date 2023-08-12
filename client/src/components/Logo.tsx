import { HTMLAttributes } from "preact/compat";
import { cn } from "../lib/utils";
import { Link } from "preact-router";

export const Logo = ({
  class: className,
  ...props
}: HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      href="/"
      {...props}
      class={cn(
        "font-bold text-3xl bg-gradient-to-tr from-white to-slate-400 inline-block bg-clip-text text-transparent",
        className
      )}
    >
      tx/.
    </Link>
  );
};
