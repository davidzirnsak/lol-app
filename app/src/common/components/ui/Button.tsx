import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Loading from "./Loading";

interface Props {
  children: ReactNode;
  className?: string;
  loading?: boolean;
  variant: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  className,
  loading,
  variant = "primary",
}: Props) {
  const variantStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "outline":
        return "bg-transparent border-1 text-black active:opacity-30";
    }
  };
  return (
    <button
      className={twMerge(
        "h-button  active:opacity-80 flex justify-center items-center outline-none select-none  rounded-regular cursor-pointer text-white button",
        variantStyle(),
        className
      )}
    >
      {loading ? (
        <>
          <Loading fill={variant === "outline" ? "black" : "white"} />
        </>
      ) : (
        children
      )}
    </button>
  );
}
