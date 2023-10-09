import cn from "clsx";
import { twMerge } from "tailwind-merge";

type TButtonProps = {
  children: React.ReactNode;
  className: string;
} & React.ComponentProps<"button">;

function TButton({ children, className, ...restProps }: TButtonProps) {
  return (
    <button
      {...restProps}
      className={twMerge(cn("rounded-sm bg-blue-100 px-5 py-2", className))}
    >
      {children}
    </button>
  );
}

export default TButton;
