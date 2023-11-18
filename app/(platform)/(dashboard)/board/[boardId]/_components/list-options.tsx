"use client";

import { List } from "@prisma/client";
import React from "react";
interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}
const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  return <div>ListOptions</div>;
};

export default ListOptions;
