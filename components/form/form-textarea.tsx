"use client";

import { KeyboardEventHandler, forwardRef } from "react";

interface FormTextAreaProps {
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  onBlur?: () => void;
  onClick: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
  defaultValue?: string;
}

import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  (
    {
      id,
      label,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onClick,
      onKeyDown,
      defaultValue,
    },
    ref
  ) => {
    return (
      <div className="space-y-2 w-full">
        <div className="space-y-1 w-full">
          {label ? (
            <Label
              htmlFor="id"
              className="text-xs font-semibold text-neutral-700 "
            >
              {label}
            </Label>
          ) : null}
          <Textarea />
        </div>
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";
