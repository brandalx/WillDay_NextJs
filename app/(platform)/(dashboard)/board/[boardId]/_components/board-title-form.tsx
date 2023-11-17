"use client";

import { Button } from "@/components/ui/button";
import { Board } from "@prisma/client";
interface BoardTitleFormProps {
  data: Board;
}
export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  return <Button></Button>;
};
