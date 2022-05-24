import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Helmet from "react-helmet";
import BoardTitle from "../components/BoardTitle";
import Pagination from "../components/Pagination";
import ReportTableBody from "../components/ReportTableBody";

const Report = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(10); // 한 페이지에 보여줄 게시글 수
  const [page, setPage] = useState(1); // 현재 페이지
  const offset = (page - 1) * limit; // 현재 페이지의 첫번

  useEffect(() => {
    axios.get("http://211.48.228.51:8082/report/list.do").then((res) => {
      setLoading(false);
      setPosts(res.data);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>GRAMy | 고장 신고</title>
      </Helmet>
      <div className="w-full h-full pb-24">
        <BoardTitle title="고장 신고 게시판" />
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-full flex justify-center items-center">
            {/* 게시글 리스트 */}
            <table className=" w-3/4 border border-slate-500 mb-4 bg-white">
              <thead>
                <tr className="border border-slate-500">
                  <th className="w-[100px] py-3 font-extrabold">번호</th>
                  <th className="w-[100px] font-extrabold">처리상황</th>
                  <th className="w-[1200px] font-extrabold">제목</th>
                  <th className="w-[200px] font-extrabold">작성자</th>
                  <th className="w-[200px] font-extrabold">작성일</th>
                  <th className="w-[100px] font-extrabold">조회</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <ReportTableBody
                  posts={posts}
                  loading={loading}
                  offset={offset}
                  limit={limit}
                />
              </tbody>
            </table>
          </div>
          <div className=" w-[87%] flex justify-end mb-4">
            {/* 글 작성 버튼 박스 */}
            <Link to="write">
              <button className="h-9 bg-[#3E72AF] rounded-md text-white font-bold w-28">
                글 쓰기
              </button>
            </Link>
          </div>
          {loading ? null : (
            <Pagination
              total={posts.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Report;
