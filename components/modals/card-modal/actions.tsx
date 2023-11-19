"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/types";
import { IconCopy, IconTrash } from "@tabler/icons-react";
import { useAction } from "@/hooks/use-action";
import { copyCard } from "@/actions/copy-card/index";
import { deleteCard } from "@/actions/delete-card";
import React from "react";
import { useParams } from "next/navigation";

interface ActionsProps {
  data: CardWithList;
}

const Actions = ({ data }: ActionsProps) => {
  const params = useParams();
  const { execute: executeCopyCard } = useAction(copyCard);
  const { execute: executeDeleteCard } = useAction(deleteCard);

  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold">Actions</p>
      <Button size="inline" className="w-full justify-start" variant="gray">
        <IconCopy className="h-4 w-4 mr-2" /> Copy
      </Button>
      <Button
        size="inline"
        className="w-full justify-start hover:bg-rose-300 text-white bg-rose-500"
        variant="gray"
      >
        <IconTrash className="h-4 w-4 mr-2 " /> Delete
      </Button>
    </div>
  );
};

export default Actions;

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};
