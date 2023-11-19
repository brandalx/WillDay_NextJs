"use client";

import { FormSubmit } from "@/components/form/form-submit";
import { FormTextarea } from "@/components/form/form-textarea";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/types";
import { IconAlignLeft, IconCheck } from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useRef, ElementRef } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { useAction } from "@/hooks/use-action";
import { updateCard } from "@/actions/update-card";
import { toast } from "sonner";
import { error } from "console";

interface DescriptionProps {
  data: CardWithList;
}

export const Description = ({ data }: DescriptionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams();
  const queryClient = useQueryClient();
  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const formRef = useRef<ElementRef<"form">>(null);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      disableEditing();
    }
  };

  useEventListener("keydown", onKeyDown);
  useOnClickOutside(formRef, disableEditing);

  const { execute, fieldErrors } = useAction(updateCard, {
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["card", data.id],
      });
      toast.success(`Description for "${data.title}" is updated`);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const description = formData.get("description") as string;
    const boardId = params.boardId as string;
    execute({ id: data.id, description, boardId });
  };
  return (
    <div className="flex items-start gap-x-3 w-full">
      <IconAlignLeft className="h-5 w-5 mt-0.5 text-neutral-700 " />
      <div className="w-full">
        <p className="font-semibold text-neutral-700 mb-2"> Description</p>
        {isEditing ? (
          <form action={onSubmit} ref={formRef} className="space-y-2 ">
            <FormTextarea
              ref={textareaRef}
              errors={fieldErrors}
              id="description"
              className="w-full mt-2"
              placeholder="Add your description here..."
              defaultValue={data.description || undefined}
            />
            <div className="flex items-center gap-x-2">
              <FormSubmit>
                <IconCheck className="h-4 w-4 mr-2" /> Save
              </FormSubmit>
              <Button
                type="button"
                onClick={disableEditing}
                size="sm"
                variant="ghost"
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div
            onClick={enableEditing}
            role="button"
            className="min-h-[78px] bg-neutral-100 text-sm font-medium py-3 px-3.5 rounded-md"
          >
            {data.description || "Add your description here..."}
          </div>
        )}
      </div>
      {/* {data.description} */}
    </div>
  );
};

Description.Skeleton = function DescriptionSkeleton() {
  return (
    <div className="flex items gap-x-3 w-full ">
      <Skeleton className="h-6 w-6 bg-neutral-200" />
      <div className="w-full">
        <Skeleton className="w-24 h-6 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-[78px]  bg-neutral-200" />
      </div>
    </div>
  );
};
