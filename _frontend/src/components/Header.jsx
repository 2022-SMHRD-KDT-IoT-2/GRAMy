import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as Scroll from "react-scroll";

const Header = () => {
  const location = useLocation();

  return (
    <div className=" w-full h-[80px] bg-white flex">
      <div className=" w-[80px] h-[80px]" />
      <div className=" flex justify-between h-[80px] w-full">
        <div className=" flex items-center justify-around w-[450px] h-[80px]">
          <Link to="/" className=" font-bold">
            <img
              src="/img/logo.png"
              alt="로고"
              className=" w-[80px] h-[80px]"
            />
          </Link>
          {location.pathname === "/" ? (
            <Scroll.Link
              to="productInfo"
              spy={true}
              smooth={true}
              className="cursor-pointer"
            >
              제품 소개
            </Scroll.Link>
          ) : (
            <Link to="/">제품 소개</Link>
          )}
          <Link to="/purchase">구매 문의</Link>
          <Link to="/report">고장 문의</Link>
        </div>
        <div className=" flex items-center justify-evenly w-[310px]">
          <Link to="/login">
            <button className="bg-[#2F74F1] text-white w-[100px] h-[35px] rounded-md">
              로그인
            </button>
          </Link>
          <Link to="/join">
            <button className="bg-[#2F74F1] text-white w-[100px] h-[35px] rounded-md">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
