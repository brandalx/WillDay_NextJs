"use client";
import { IconPlus } from "@tabler/icons-react";
import ListWrapper from "./list-wrapper";
import { useState, useRef, ElementRef } from "react";
export const ListForm = () => {
  const { isEditing, setIsEditing } = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  return (
    <ListWrapper>
      <button className="w-full rounded-md bg-white/80 hover:bg-white/50 transition p-3 flex items-center font-medium text-sm">
        <IconPlus className="h-4 w-4 mr-2" />
        Add list
      </button>
    </ListWrapper>
  );
};
