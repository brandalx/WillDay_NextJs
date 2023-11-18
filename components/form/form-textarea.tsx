"use client";

import { KeyboardEventHandler } from "react";

interface FormTextAreaProps {
  id: string;
  label: string;
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
