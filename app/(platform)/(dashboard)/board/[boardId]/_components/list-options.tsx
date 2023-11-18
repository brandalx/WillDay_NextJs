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
import {
  IconBolt,
  IconChecklist,
  IconCopy,
  IconDots,
  IconPlus,
  IconTrashX,
  IconX,
} from "@tabler/icons-react";
import { FormSubmit } from "@/components/form/form-submit";
import { Separator } from "@/components/ui/separator";
interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}
const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2 mx-2" variant="ghost">
          <IconDots className="H-4 W-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-1 pt-3 pb-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-900 pb-4 flex items-center justify-center">
          <IconChecklist className="h-4 w-4 mr-1 text-[#FF87AB] " />
          List actions
        </div>
        <PopoverClose asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <IconX className="h-4 w-4 " />
          </Button>
        </PopoverClose>
        <Button
          onClick={onAddCard}
          className="rounded-sm w-full h-auto  p-2 px-5 justify-start font-normal text-sm"
          variant="ghost"
        >
          <IconPlus className="h-4 w-4 mr-2 " />
          Add card
        </Button>
        <form>
          <input hidden name="id" id="id" defaultValue={data.id} />
          <input hidden name="boardId" id="boardId" defaultValue={data.id} />
          <FormSubmit
            className="rounded-sm w-full h-auto  p-2 px-5 justify-start font-normal text-sm flex"
            variant="ghost"
          >
            <IconCopy className="h-4 w-4 mr-2 " />
            Duplicate list
          </FormSubmit>
        </form>
        <Separator className="my-2" />
        <form>
          <input hidden name="id" id="id" defaultValue={data.id} />
          <input hidden name="boardId" id="boardId" defaultValue={data.id} />
          <FormSubmit
            className="  rounded-sm  w-full h-auto  p-2 px-5  justify-start font-normal text-sm flex  hover:bg-rose-300 bg-rose-500"
            variant="destructive"
          >
            <IconTrashX className="h-4 w-4 mr-2  " />
            Delete list
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default ListOptions;
