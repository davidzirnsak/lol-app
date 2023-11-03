"use client";
import { useState } from "react";
import Button from "../ui/Button";
import SearchInput from "../ui/Forms/SearchInput";

export default function ButtonBox() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="w-fit ml-2 gap-2 flex text-black">
      <SearchInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-[200px] rounded-regular border-0 h-[50px]"
        placeholder="Search"
      />
      <Button className="w-[150px] h-[50px]" variant="primary">
        Sign In
      </Button>
    </div>
  );
}
