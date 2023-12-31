"use client";

import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { c } from "@/lib/console-log";
import { Board } from "@prisma/client";
import { updateBoard } from "@/actions/update-board";
import { useAction } from "@/hooks/use-action";
import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";
import { error } from "console";
import {
  IconArrowAutofitLeft,
  IconArrowLeft,
  IconEdit,
} from "@tabler/icons-react";
import Link from "next/link";
interface BoardTitleFormProps {
  data: Board;
}
export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const formRef = useRef<ElementRef<"form">>(null);

  const inputRef = useRef<ElementRef<"input">>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(data.title);

  const { execute } = useAction(updateBoard, {
    onSuccess: (data: any) => {
      toast.success(`Board "${data.title}" updated"`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    //todo:" focus input"
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title, id: data.id });

    c("submitted" + title);
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <div className="flex items-center">
        <Button className="mx-1" variant="transparent">
          <Link href="/">
            <IconArrowLeft strokeWidth={3} className="h-4 w-4 " />
          </Link>
        </Button>
        <form action={onSubmit} ref={formRef}>
          <FormInput
            ref={inputRef}
            id="title"
            onBlur={onBlur}
            defaultValue={title}
            className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
          />
        </form>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Button className="mx-1" variant="transparent">
        <Link href="/">
          <IconArrowLeft strokeWidth={3} className="h-4 w-4 " />
        </Link>
      </Button>
      <Button
        onClick={enableEditing}
        variant="transparent"
        className="font-bold text-lg h-auto w-auto p-1 px-2"
      >
        <IconEdit className="h-4 w-4 mr-2" />
        {title}
      </Button>
    </div>
  );
};
