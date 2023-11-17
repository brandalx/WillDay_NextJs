"use client";

import { ListWithCards } from "@/types";
import { List } from "@prisma/client";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

import React, { useEffect, useState } from "react";
import { ListForm } from "./list-form";

const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};

export default ListContainer;
