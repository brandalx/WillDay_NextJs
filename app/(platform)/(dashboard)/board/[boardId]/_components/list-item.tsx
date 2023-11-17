"use client";
import { ListWithCards } from "@/types";
import React from "react";
import ListHeader from "./list-header";

interface ListItemProps {
  data: ListWithCards;
  index: number;
}
const ListItem = () => {
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#1F1F2F4]shadow-md pb-2">
        <ListHeader />
      </div>
    </li>
  );
};

export default ListItem;
