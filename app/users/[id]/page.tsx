import React from "react";

const IDPage = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default IDPage;
