import React from "react";
import Helmet from "react-helmet";
import BoardTitle from "../components/BoardTitle";

const PurchaseWrite = () => {
  return (
    <>
      <Helmet>
        <title>GRAMy | 구매문의 작성</title>
      </Helmet>
      <div className="w-full h-full">
        <BoardTitle title="구매 문의 작성" />
      </div>
    </>
  );
};

export default PurchaseWrite;
