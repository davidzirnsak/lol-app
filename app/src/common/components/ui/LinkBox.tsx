import Link from "next/link";
import { ChevronLeft, ChevronRight } from "react-feather";
import { twMerge } from "tailwind-merge";

interface Props {
  text?: string;
  href: string;
  iconPosition?: "left" | "right";
  className?: string;
}

export default function LinkBox({
  text,
  href,
  iconPosition,
  className,
}: Props) {
  return (
    <Link className={twMerge("w-fit", className)} href={href}>
      <div className="cursor-pointer flex gap-1 items-center">
        {iconPosition === "left" && <ChevronLeft />}
        <p className="link">{text}</p>
        {iconPosition === "right" && <ChevronRight />}
      </div>
    </Link>
  );
}
