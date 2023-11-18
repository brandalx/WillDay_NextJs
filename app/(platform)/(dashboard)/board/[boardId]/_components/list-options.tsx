"use client";

import { List } from "@prisma/client";
import React from "react";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { IconDots } from "@tabler/icons-react";
interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}
const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="ghost">
          <IconDots className="H-4 W-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          List actions
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ListOptions;
