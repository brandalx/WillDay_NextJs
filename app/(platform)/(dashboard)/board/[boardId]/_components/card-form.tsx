"use lcient";

import { FormSubmit } from "@/components/form/form-submit";
import { FormTextarea } from "@/components/form/form-textarea";
import { useAction } from "@/hooks/use-action";
import { createCard } from "@/actions/create-card";
import { Button } from "@/components/ui/button";
import { IconPlus, IconX } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import React, {
  forwardRef,
  useRef,
  ElementRef,
  KeyboardEventHandler,
} from "react";
interface CardFormProps {
  listId: string;
  isEditing: boolean;
  enableEditing: () => void;
  disableEditing: () => void;
}
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, disableEditing, enableEditing, isEditing }, ref) => {
    const params = useParams();
    const formRef = useRef<ElementRef<"form">>(null);
    const { execute, fieldErrors } = useAction(createCard);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        disableEditing();
      }
    };
    if (isEditing) {
      return (
        <form className="m-1 py-0.5 px-1 space-y-4">
          <FormTextarea
            id="title"
            onKeyDown={() => {}}
            ref={ref}
            placeholder="Enter a title for this card..."
          />
          <input hidden id="listId" name="lisyId" value={listId} />
          <div className="flex items-center gap-x-1 ">
            <FormSubmit>
              <IconPlus className="h-4 w-4 mr-2 " />
              Add card
            </FormSubmit>
            <Button onClick={disableEditing} size="sm" variant="ghost">
              <IconX className="h-5 w-5" />
            </Button>
          </div>
        </form>
      );
    }
    return (
      <div className="pt-2 px-2 ">
        <Button
          onClick={enableEditing}
          className="h-auto px-2 py-1.5 w-full justify-start text-muted-foreground text-sm"
          size="sm"
          variant="ghost"
        >
          <IconPlus className="h-4 w-4 mr-2 " />
          Add a card
        </Button>
      </div>
    );
  }
);

CardForm.displayName = "CardForm";

export default CardForm;
