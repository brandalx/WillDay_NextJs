"use client";

import { FormInput } from "@/components/form/form-input";
import { CardWithList } from "@/types";
import { IconLayout2 } from "@tabler/icons-react";
import React, { useState } from "react";
interface HeaderProps {
  data: CardWithList;
}
export const Header = ({ data }: HeaderProps) => {
  const [title, setTitle] = useState(data?.title);
  return (
    <div className="flex items-start gap-x-3 mb-6 w-full">
      <IconLayout2 className="h-5 w-5 mt-1 text-neutral-700" />
      <div className="w-full">
        <form>
          <FormInput
            className="font-semibold text-xl px-1 text-neutral-700 bg-transparent border-transparent relative -left-1.5 w-[95%] focus-visible:bg-white focus-visible:border-input mb-0.5 truncate "
            defaultValue={title}
            id="title"
          />
        </form>
      </div>
    </div>
  );
};
