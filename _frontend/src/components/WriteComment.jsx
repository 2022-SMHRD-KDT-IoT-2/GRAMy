import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { identifyUserId, identifyUserName } from "../utils/utils";
import { getCookie } from "./auth/cookie";

const WriteComment = ({ postId, comment, setComment, article }) => {
  const navigate = useNavigate();
  const loginContext = useContext(AppContext);
  let userCookie = getCookie("x_auth");
  let socialUser = JSON.parse(sessionStorage.getItem("socialUser"));

  let { isLogin } = loginContext;

  const onChangeComment = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const handleSubmit = () => {
    let url;
    let data;
    if (article === "purchase") {
      url = "http://211.48.228.51:8082/purchase/replyinsert.do";
      data = {
        purchase_seq: postId,
        user_id: identifyUserId(userCookie, socialUser),
        user_name: identifyUserName(userCookie, socialUser),
        pr_content: comment,
      };
    } else if (article === "report") {
      url = "http://211.48.228.51:8082/report/replyinsert.do";
      data = {
        report_seq: postId,
        user_id: identifyUserId(userCookie, socialUser),
        user_name: identifyUserName(userCookie, socialUser),
        reply_content: comment,
      };
    }
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        navigate(0);
      });
  };

  return (
    <div className="border-2 border-[#0000002c] my-3 py-3 px-3 rounded-md">
      <div className="mb-2 font-semibold text-sm">
        {/* 작성자 이름 */}
        {isLogin ? (
          identifyUserName(userCookie, socialUser)
        ) : (
          <span>비회원</span>
        )}
      </div>
      <div className="flex">
        {isLogin ? (
          <textarea
            placeholder="내용을 입력하세요."
            className="w-full h-10 resize-none text-sm border-0 focus:ring-0"
            value={comment}
            onChange={onChangeComment}
          />
        ) : (
          <textarea
            placeholder="로그인이 필요합니다."
            className="w-full h-10 resize-none text-sm border-0 focus:ring-0"
            disabled
          />
        )}
        {isLogin ? (
          <button
            className="w-20 bg-[#132C4D] ml-3 text-sm rounded-md text-white"
            onClick={handleSubmit}
          >
            등록
          </button>
        ) : (
          <button className="w-20 bg-[#132C4D] ml-3 text-sm rounded-md text-white">
            등록
          </button>
        )}
      </div>
    </div>
  );
};

export default WriteComment;
