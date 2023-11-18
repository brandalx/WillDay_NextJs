"use client";
import { Card } from "@prisma/client";
import React from "react";
interface CardItemProps {
  index: number;
  data: Card;
}
const CardItem = ({ data, index }: CardItemProps) => {
  return <div>{data.title}</div>;
};

export default CardItem;
