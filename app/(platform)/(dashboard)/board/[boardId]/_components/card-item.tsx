"use client";
import { Card } from "@prisma/client";
import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { useCardModal } from "@/hooks/use-card-modal";
interface CardItemProps {
  index: number;
  data: Card;
}
const CardItem = ({ data, index }: CardItemProps) => {
  const cardModal = useCardModal();
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          onClick={() => cardModal.onOpen(data.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          className="truncate border-2 border-transparent hover:border-neutral-700 transition-all py-2 px-3 text-sm bg-white rounded-md shadow-sm "
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
