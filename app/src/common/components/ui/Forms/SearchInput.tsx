import { ChangeEventHandler } from "react";
import { Search, X } from "react-feather";
import { twMerge } from "tailwind-merge";

interface Props {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onCloseClick?: () => void;
}
export default function SearchInput({
  placeholder,
  value,
  className,
  onChange,
  onCloseClick,
}: Props) {
  return (
    <div
      className={twMerge(
        "relative  gap-2 flex items-center px-2 rounded-medium border-1 border-gray50 bg-white",
        className
      )}
    >
      <Search
        className="text-black min-w-[24px] min-h-[24px]"
        width={24}
        height={24}
      />
      <input
        className="h-full flex-1 w-full select-none outline-none"
        placeholder={placeholder || "Placeholder"}
        value={value}
        onChange={onChange}
        type="text"
      />
      {value && (
        <div onClick={onCloseClick} className="cursor-pointer">
          <X />
        </div>
      )}
    </div>
  );
}
