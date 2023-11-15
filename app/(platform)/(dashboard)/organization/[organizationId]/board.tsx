import React from "react";
interface BoardProps {
  title: string;
  id: string;
}
const Board = ({ title, id }: BoardProps) => {
  return (
    <div className="space-y-2 ">
      <div>Board title : {title}</div>
    </div>
  );
};

export default Board;
