import { HTMLAttributes, forwardRef } from "preact/compat";
import { cn, getOptimizedImageUrl } from "../../lib/utils";
import { Person } from "./icons";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  url?: string;
  size?: number;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { className, size = 40, url, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      class={cn(
        className,
        "rounded-full flex items-center justify-center aspect-square bg-secondary"
      )}
      style={{ height: size, width: size }}
      {...props}
    >
      {url ? (
        <img src={getOptimizedImageUrl(url, size, size)} alt="User's avatar" />
      ) : (
        <Person class="text-white" style={{ fontSize: size / 2 }} />
      )}
    </div>
  );
});
