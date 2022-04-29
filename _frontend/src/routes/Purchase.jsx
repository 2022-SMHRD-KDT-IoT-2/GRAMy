import axios from "axios";
import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import BoardTitle from "../components/BoardTitle";
import PurchaseTableBody from "../components/PurchaseTableBody";

const Purchase = () => {
  const [articleInfo, setArticleInfo] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => setArticleInfo(res.data));
  }, []);

  return (
    <>
      <Helmet>
        <title>GRAMy | 구매 문의</title>
      </Helmet>
      <div className="w-full h-full ">
        <BoardTitle title="구매 문의 게시판" />
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-full flex justify-center items-center">
            {/* 게시글 리스트 */}
            <table className=" w-3/4 border border-slate-500 mb-4">
              <thead>
                <tr className="border border-slate-500">
                  <th className="w-[100px] py-3 font-extrabold">번호</th>
                  <th className="w-[1200px] font-extrabold">제목</th>
                  <th className="w-[200px] font-extrabold">작성자</th>
                  <th className="w-[200px] font-extrabold">작성일</th>
                  <th className="w-[100px] font-extrabold">조회</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <PurchaseTableBody articleInfo={articleInfo} />
              </tbody>
            </table>
          </div>
          <div className=" w-[87%] flex justify-end mb-4">
            {/* 글 작성 버튼 박스 */}
            <Link to="write">
              <button className="h-9 bg-[#90C8B4] rounded-md text-white font-bold w-28">
                글 쓰기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
