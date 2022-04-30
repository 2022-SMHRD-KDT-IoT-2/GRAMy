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
          <div className="w-full h-full flex justify-center items-center ">
            <div className="flex items-center justify-between bg-slate-400 w-[60%] h-8 px-10 font-semibold">
              <div className="">1</div>
              <div className="">얼마죠?</div>
              <div className="">2022-04-30</div>
            </div>
          </div>
          {/* 게시글 내용 */}
          <div>나도 몰러</div>
        </div>
      </div>
    </>
  );
};

export default PurchaseDetail;
