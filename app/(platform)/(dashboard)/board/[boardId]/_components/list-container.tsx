"use client";

import { ListWithCards } from "@/types";
import { List } from "@prisma/client";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

import React from "react";

const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return <div>ListContainer</div>;
};

export default ListContainer;
