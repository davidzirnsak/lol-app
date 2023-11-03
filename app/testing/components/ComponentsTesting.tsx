"use client";

import Button from "@/app/src/common/components/ui/Button";
import Input from "@/app/src/common/components/ui/Forms/Input";
import SearchInput from "@/app/src/common/components/ui/Forms/SearchInput";
import LinkBox from "@/app/src/common/components/ui/LinkBox";
import { useState } from "react";
import { Maximize } from "react-feather";

export default function ComponentsTesting() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <p className="my-3 h3">Components</p>
      <div className="w-full mb-3 h-[1px] bg-black" />
      <h5 className="mb-2">Buttons</h5>
      <div className="w-full flex flex-col gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="primary" loading>
          Primary
        </Button>
        <Button variant="secondary" loading>
          Secondary
        </Button>
        <Button variant="outline" loading>
          Outline
        </Button>
      </div>
      <h5 className="my-2">Inputs</h5>
      <div className="w-full flex flex-col gap-3">
        <Input label="Label" Icon={<Maximize />} />
        <Input
          label="Error"
          value="Error"
          error
          errorText="Invalid"
          Icon={<Maximize />}
        />
        <Input
          label="Valid"
          value="Valid"
          valid
          errorText="Invalid"
          Icon={<Maximize />}
        />
        <SearchInput
          value={searchValue}
          placeholder="Search"
          onCloseClick={() => setSearchValue("")}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <LinkBox href="/" iconPosition="left" text="Link" />
        <LinkBox href="/" iconPosition="right" text="Link" />
      </div>
    </>
  );
}
