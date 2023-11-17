"use client";

import { ListWithCards } from "@/types";
import { List } from "@prisma/client";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

import React, { useEffect, useState } from "react";
import { ListForm } from "./list-form";
import ListItem from "./list-item";

const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);
  return (
    <ol>
      {orderedData.map((list, index) => {
        return <ListItem key={list.id} index={index} data={list} />;
      })}
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};

export default ListContainer;
