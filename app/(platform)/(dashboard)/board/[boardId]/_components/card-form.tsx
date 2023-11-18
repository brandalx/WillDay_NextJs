"use lcient";

import React from "react";
interface CardFormProps {
  listId: string;
  isEditing: boolean;
  enableEditing: () => void;
  disableEditing: () => void;
}
const CardForm = ({
  listId,
  disableEditing,
  enableEditing,
  isEditing,
}: CardFormProps) => {
  return <div>CardForm</div>;
};

export default CardForm;
