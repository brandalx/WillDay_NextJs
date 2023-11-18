"use client";
import React from "react";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { deleteBoard } from "@/actions/delete-board";
import { useAction } from "@/hooks/use-action";
import { IconDots, IconLayout, IconTrashX, IconX } from "@tabler/icons-react";
import { error } from "console";
import { toast } from "sonner";
interface BoardOptionsProps {
  id: string;
}
const BoardOptions = ({ id }: BoardOptionsProps) => {
  const { execute, isLoading } = useAction(deleteBoard, {
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: () => {
      toast.success("Board successfully deleted");
    },
  });

  const onDelete = () => {
    execute({ id });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="transparent">
          <IconDots className="h-4 w-4 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="px-2 mx-2 pt-3 pb-3"
        side="bottom"
        align="start"
      >
        <div
          className="text-sm font-medium text-center text-neutral-600 pb-4 
        flex items-center justify-center"
        >
          <IconLayout className="h-4 w-4 mr-1 text-[#FF87AB] " />
          Board actions
        </div>
        <PopoverClose asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2"
            variant="ghost"
          >
            <IconX className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <Button
          onClick={onDelete}
          disabled={isLoading}
          className="  rounded-sm  w-full h-auto  p-2 px-5  justify-start font-normal text-sm flex  hover:bg-rose-300 bg-rose-500"
          variant="destructive"
        >
          <IconTrashX className="h-4 w-4 mr-2  " />
          Delete this board
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default BoardOptions;
