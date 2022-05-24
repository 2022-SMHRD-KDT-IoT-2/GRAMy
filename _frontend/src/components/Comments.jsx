import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LongMenu from "../components/ui/LongMenu";
import { identifyUserId, identifyUserName } from "../utils/utils";
import { getCookie } from "./auth/cookie";
const Comments = ({ comment, index, length, article }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState();
  const [editComment, setEditComment] = useState(
    article === "purchase" ? comment.pr_content : comment.reply_content
  );

  const userCookie = getCookie("x_auth");
  const socialUser = JSON.parse(sessionStorage.getItem("socialUser"));

  let currentUserName;
  let currentUserId;

  if (userCookie || socialUser) {
    currentUserName = identifyUserName(userCookie, socialUser);
    currentUserId = identifyUserId(userCookie, socialUser);
  }

  const onChangeEditComment = (e) => {
    const { value } = e.target;
    setEditComment(value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    let url;
    let data;
    if (article === "purchase") {
      url = "http://211.48.228.51:8082/purchase/replyupdate.do";
      data = {
        pr_seq: comment.pr_seq,
        pr_content: editComment,
      };
      axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          navigate(0);
        });
    } else if (article === "report") {
      url = "http://211.48.228.51:8082/report/replyupdate.do";
      data = {
        reply_seq: comment.reply_seq,
        reply_content: editComment,
      };
      axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          navigate(0);
        });
    }
  };

  useEffect(() => {}, []);

  // TODO : 게시물 별 코멘트 처리해야함
  return (
    <>
      {mode === "edit" ? (
        <div className="flex w-full justify-between items-center">
          <div>
            <div className="font-semibold text-base">{comment.user_name}</div>
            {/* 이 부분 */}
            <textarea
              placeholder="내용을 입력하세요."
              className="w-[700px] h-10 resize-none text-sm border-2 border-[#0000002c] focus:ring-0 rounded-md my-2"
              value={editComment}
              onChange={onChangeEditComment}
            />
            <div className="text-xs mb-2 text-gray-500">
              {article === "purchase"
                ? comment.pr_date.substring(0, 11)
                : comment.reply_date}
            </div>
          </div>
          <div className="w-full flex items-center justify-center relative left-[-30px]">
            <button
              className="w-20 py-2 bg-[#132C4D] text-sm rounded-md text-white"
              onClick={handleEdit}
            >
              수정
            </button>
          </div>
          <LongMenu comment={comment} setMode={setMode} />
        </div>
      ) : (
        <div className="flex w-full justify-between">
          <div>
            <div className="font-semibold text-base">{comment.user_name}</div>
            <div className="text-sm">
              {article === "purchase"
                ? comment.pr_content
                : comment.reply_content}
            </div>
            <div className="text-xs mb-2 text-gray-500">
              {article === "purchase"
                ? comment.pr_date.substring(0, 11)
                : comment.reply_date}
            </div>
          </div>
          {currentUserName === comment.user_name ? (
            <LongMenu comment={comment} setMode={setMode} />
          ) : null}
        </div>
      )}

      {index === length - 1 ? null : <hr className="mb-2" />}
    </>
  );
};

export default Comments;
