import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import styled from "styled-components";
import axios from "axios";
import htmlToDraft from "html-to-draftjs";
import { useNavigate } from "react-router-dom";
import { getCookie } from "./auth/cookie";
import { identifyUserId, identifyUserName } from "../utils/utils";

const MyBlock = styled.div`
  background-color: white;

  .wrapper-class {
    width: 100%;
    margin: 0 auto;
  }
  .editor {
    height: 500px !important;
    border: 2px solid #9ba3af !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

// 게시판 구분 : board
// title props는 게시글 제목, mode props는 게시글 수정 모드
const DraftEditor = ({ title, mode, articleId, editContent, board }) => {
  let socialUser = JSON.parse(sessionStorage.getItem("socialUser"));
  let userCookie = getCookie("x_auth");
  const navigate = useNavigate();
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };

  // 입력한 텍스트
  // DB에 HTML 태그가 적용된 상태로 들어가야함
  // 백엔드에 얘를 보내야된다. -> 함수를 만들자 (axios)
  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  const htmlToEditor = editContent;

  useEffect(() => {
    // 게시글 수정 모드일 때
    if (mode === "edit") {
      const blocksFromHtml = htmlToDraft(htmlToEditor);
      if (blocksFromHtml) {
        const { contentBlocks, entityMap } = blocksFromHtml;
        // https://draftjs.org/docs/api-reference-content-state/#createfromblockarray
        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );
        // ContentState를 EditorState기반으로 새 개체를 반환.
        // https://draftjs.org/docs/api-reference-editor-state/#createwithcontent
        const editorState = EditorState.createWithContent(contentState);
        setEditorState(editorState);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let url; // API URL
    let data; // 보낼 데이터
    if (mode === "edit") {
      // 게시글 수정
      switch (board) {
        case "purchase":
          console.log("구매 문의 게시글 수정!");
          url = "http://211.48.228.51:8082/purchase/update.do"; // 구매 문의 게시글 수정 url
          data = {
            purchase_seq: articleId,
            purchase_title: title,
            purchase_content: editorToHtml,
          };
          axios
            .post(url, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res);
            });
          break;
        case "report":
          console.log("고장 신고 게시글 수정!");
          url = "http://211.48.228.51:8082/report/update.do"; // 고장 신고 게시글 수정 url
          data = {
            report_seq: articleId,
            report_title: title,
            report_content: editorToHtml,
          };
          axios
            .post(url, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res);
            });
          break;
        default:
          break;
      }
    } else {
      // 게시글 등록
      switch (board) {
        case "purchase":
          console.log("구매 문의 게시글 등록!");
          url = "http://211.48.228.51:8082/purchase/insert.do"; // 구매 문의 게시글 등록 url
          data = {
            user_id: identifyUserId(userCookie, socialUser),
            user_name: identifyUserName(userCookie, socialUser),
            purchase_title: title,
            purchase_content: editorToHtml,
          };
          axios
            .post(url, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res);
              navigate("/purchase");
            });
          break;
        case "report":
          console.log("고장 신고 게시글 등록!");
          url = "http://211.48.228.51:8082/report/insert.do"; // 고장 신고 게시글 등록 url
          data = {
            user_id: identifyUserId(userCookie, socialUser),
            user_name: identifyUserName(userCookie, socialUser),
            report_title: title,
            report_content: editorToHtml,
          };
          axios
            .post(url, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res);
              navigate("/report");
            });
          break;
        default:
          break;
      }
    }
  };

  const writeCancel = (e) => {
    e.preventDefault();
    if (board === "purchase") {
      navigate(`/purchase/${articleId}`);
    } else if (board === "report") {
      navigate(`/report/${articleId}`);
    }
  };

  return (
    <>
      <MyBlock>
        <Editor
          // 에디터와 툴바 모두에 적용되는 클래스
          wrapperClassName="wrapper-class"
          // 에디터 주변에 적용된 클래스
          editorClassName="editor"
          // 툴바 주위에 적용된 클래스
          toolbarClassName="toolbar-class"
          // 툴바 설정
          toolbar={{
            // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
          placeholder="내용을 작성해주세요."
          // 한국어 설정
          localization={{
            locale: "ko",
          }}
          // 초기값 설정
          editorState={editorState}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          onEditorStateChange={onEditorStateChange}
        />
      </MyBlock>
      <div className="bg-white flex justify-end pt-3 mb-3">
        <button
          onClick={handleSubmit}
          className="h-9 bg-[#132C4D] rounded-md text-white font-bold w-20"
        >
          등록
        </button>
        <button
          className="ml-4 mr-4 h-9 bg-white rounded-md text-black font-bold w-20 border border-black"
          onClick={writeCancel}
        >
          취소
        </button>
      </div>
    </>
  );
};

export default DraftEditor;
