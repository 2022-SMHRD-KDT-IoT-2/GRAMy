import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
  margin-top: 30px;
  margin-bottom: 100px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  padding: 8px;
  margin: 0;
  background: white;
  color: black;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: #80808087;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #dae2ef;
    color: black;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

const Pagination = ({ total, limit, page, setPage }) => {
  // Props
  // total : 전체 게시글 수
  // limit : 한 페이지에 보여줄 게시글 수
  // page : 현재 페이지
  // setPage : 페이지 설정 함수
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button
          className="shadow-md font-extrabold"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              className="shadow-md transition-all"
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button
          className="shadow-md font-extrabold"
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </Button>
      </Nav>
    </>
  );
};

export default Pagination;
