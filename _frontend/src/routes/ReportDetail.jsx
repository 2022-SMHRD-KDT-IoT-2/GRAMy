import React, { useContext, useEffect, useState } from "react";
import Helmet from "react-helmet";
import BoardTitle from "../components/BoardTitle";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import WriteComment from "../components/WriteComment";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { getCookie } from "../components/auth/cookie";
import { identifyUserId, identifyUserName } from "../utils/utils";
import { AppContext } from "../App";

const ReportDetail = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(""); // WriteComment 컴포넌트로 넘겨주는 State
  const [progress, setProgress] = useState("");

  const loginContext = useContext(AppContext);
  const { isLogin } = loginContext;

  const userCookie = getCookie("x_auth");
  const socialUser = JSON.parse(sessionStorage.getItem("socialUser"));

  const params = useParams();
  const postId = params.id; // 게시글번호

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .get(
        "http://211.48.228.51:8082/report/delete.do",
        {
          params: { report_seq: postId },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        navigate("/report");
      });
  };

  const loadArticle = () => {
    axios
      .post("http://211.48.228.51:8082/report/content.do", postId, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data);
        if (res.data.report_status === "n") {
          // default : n
          setProgress("고장접수");
        } else if (res.data.report_status === "p") {
          // progressing
          setProgress("처리중");
        } else if (res.data.report_status === "d") {
          // done
          setProgress("처리완료");
        }
        loadComment();
      });
  };

  const loadComment = () => {
    axios
      .post("http://211.48.228.51:8082/report/replylist.do", postId, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setComments(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadArticle();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Helmet>
            <title>GRAMy | 로딩..</title>
          </Helmet>
          <div className="w-full h-full">
            <BoardTitle title="구매 문의 게시판" />
            <div className="w-full h-full flex justify-center">
              <div className="w-[50%] mb-20 bg-white border-2 border-gray-300 shadow-md px-5 rounded-md">
                {/* 게시글 머리 */}
                <div className="py-4">
                  <div className="text-[#132C4D] text-sm font-bold mb-1">
                    고장 신고
                  </div>
                  <div className="text-3xl font-semibold">
                    <Skeleton variant="text" width={400} animation="wave" />
                  </div>
                  <div className="flex items-center py-2 justify-between">
                    <div className="flex items-center">
                      <div className="bg-slate-400 w-10 h-10 rounded-full mr-3" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-base">
                          <Skeleton
                            variant="text"
                            width={100}
                            animation="wave"
                          />
                        </span>
                        <span className="text-sm text-gray-400">
                          <Skeleton
                            variant="text"
                            width={100}
                            animation="wave"
                          />
                        </span>
                      </div>
                    </div>
                    <div className=" text-base text-gray-500">
                      <span className="cursor-pointer hover:border-b hover:border-gray-500">
                        수정
                      </span>
                      <span
                        className="ml-2 cursor-pointer hover:border-b hover:border-gray-500"
                        onClick={handleDelete}
                      >
                        삭제
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                {/* 게시글 몸 */}
                <div className="pb-10">
                  <Skeleton
                    variant="rectangular"
                    width={795}
                    height={118}
                    animation="wave"
                  />
                </div>
                <hr className="mb-3" />
                <div>
                  <div className="font-bold text-lg mb-4">댓글</div>
                  {/* 댓글 내용 */}
                  <Skeleton
                    variant="rectangular"
                    width={795}
                    height={300}
                    animation="wave"
                  />
                  {/* 댓글 작성 칸 */}
                  <WriteComment comment={comment} setComment={setComment} />
                </div>
                <div className="w-full flex justify-end items-center">
                  <button
                    className="border border-black py-3 px-10 mb-5 rounded-md font-bold"
                    onClick={() => {
                      navigate("/purchase");
                    }}
                  >
                    목록
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Helmet>
            <title>GRAMy | {`${data.report_title}`}</title>
          </Helmet>
          <div className="w-full h-full">
            <BoardTitle title="고장 신고 게시판" />
            <div className="w-full h-full flex justify-center">
              <div className="w-[50%] mb-20 bg-white border-2 border-gray-300 shadow-md px-5 rounded-md">
                {/* 게시글 머리 */}
                <div className="py-4">
                  <div className="text-[#132C4D] text-sm font-bold mb-1">
                    고장 신고
                  </div>
                  {progress === "고장접수" ? (
                    <div className="text-gray-600 text-sm mb-1">{progress}</div>
                  ) : progress === "처리중" ? (
                    <div className="text-red-600 text-sm mb-1">{progress}</div>
                  ) : (
                    <div className="text-green-600 text-sm mb-1">
                      {progress}
                    </div>
                  )}
                  <div className="text-3xl font-semibold">
                    {data.report_title}
                  </div>
                  <div className="flex items-center py-2 justify-between">
                    <div className="flex items-center">
                      <div className="bg-slate-400 w-10 h-10 rounded-full mr-3" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-base">
                          {data.user_name}
                        </span>
                        <span className="text-sm text-gray-400">
                          {data.report_date}
                        </span>
                      </div>
                    </div>
                    <div className=" text-base text-gray-500">
                      {isLogin ? (
                        identifyUserId(userCookie, socialUser) ===
                        data.user_id ? (
                          <>
                            <Link
                              to="update"
                              state={{
                                title: data.report_title,
                                content: data.report_content,
                              }}
                              className="cursor-pointer hover:border-b hover:border-gray-500"
                            >
                              수정
                            </Link>
                            <span
                              className="ml-2 cursor-pointer hover:border-b hover:border-gray-500"
                              onClick={handleDelete}
                            >
                              삭제
                            </span>
                          </>
                        ) : null
                      ) : null}
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                {/* 게시글 몸 */}
                <div className="pb-10">게시글게시글</div>
                <hr className="mb-3" />
                <div>
                  <div className="font-bold text-lg mb-4">댓글</div>
                  {/* 댓글 내용 */}
                  {comments.map((comment, index) => {
                    return (
                      <Comments
                        comment={comment}
                        key={index}
                        index={index}
                        length={comments.length}
                        article="report"
                      />
                    );
                  })}
                  {/* 댓글 작성 칸 */}
                  <WriteComment
                    comment={comment}
                    setComment={setComment}
                    postId={postId}
                    article="report"
                  />
                </div>
                <div className="w-full flex justify-end items-center">
                  <button
                    className="border border-black py-3 px-10 mb-5 rounded-md font-bold"
                    onClick={() => {
                      navigate("/report");
                    }}
                  >
                    목록
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ReportDetail;
