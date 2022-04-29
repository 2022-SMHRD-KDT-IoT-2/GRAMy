import React from "react";

const BoardTitle = ({ title }) => {
  return (
    <div className="py-10 flex w-full h-full items-center justify-center text-3xl font-semibold">
      {title}
    </div>
  );
};

export default BoardTitle;
