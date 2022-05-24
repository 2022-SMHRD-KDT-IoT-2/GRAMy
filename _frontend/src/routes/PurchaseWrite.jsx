import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useLocation, useParams } from "react-router-dom";
import BoardTitle from "../components/BoardTitle";
import DraftEditor from "../components/DraftEditor";

const PurchaseWrite = ({ mode }) => {
  const location = useLocation();
  const params = useParams();

  console.log(location);

  const articleId = params.id; // 수정할 게시글 번호
  const editTitle = location.state === null ? "" : location.state.title; // 게시글 제목
  const editContent = location.state === null ? "" : location.state.content; // 수정할 게시글 내용

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (mode === "edit") {
      // 만약 게시글 수정 모드일 시, 전에 입력했던 게시글 제목 SET
      setTitle(editTitle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <>
      <Helmet>
        <title>GRAMy | 구매문의 작성</title>
      </Helmet>
      <div className="w-full h-full">
        <BoardTitle title="구매 문의 작성" />
        <form action="/purchase">
          <div className="w-full h-full flex justify-center">
            <div className="w-[50%] bg-white">
              {/* 게시글 제목 */}
              <div className="border border-gray-400">
                <input
                  className="w-full border-0 focus:ring-0"
                  type="text"
                  placeholder="제목을 입력해주세요."
                  value={title}
                  onChange={onChangeTitle}
                />
              </div>
              {/* 게시글 내용 작성 */}
              <div>
                <DraftEditor
                  title={title}
                  mode={mode}
                  articleId={articleId}
                  editContent={editContent}
                  board="purchase"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PurchaseWrite;
