import React from "react";
import Helmet from "react-helmet";
import BoardTitle from "../components/BoardTitle";
import { useLocation } from "react-router-dom";

const PurchaseDetail = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Helmet>
        <title>GRAMy | {`${location.state.info.name}`}</title>
      </Helmet>
      <div className="w-full h-full">
        <BoardTitle title="구매 문의 게시판" />
        <div className="w-full h-full bg-orange-300">
          {/* 게시글 번호, 제목 */}
          <div className="w-full h-full flex justify-center items-center">
            <span>번호</span>
            <span>제목</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseDetail;
