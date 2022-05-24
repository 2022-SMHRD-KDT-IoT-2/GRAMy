import React, { useContext } from "react";
import { AppContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import * as Scroll from "react-scroll";
import { getCookie } from "./auth/cookie";
import { useCookies } from "react-cookie";
import { identifyUserName, identifyUserId } from "../utils/utils";

const Header = () => {
  const location = useLocation();
  const loginContext = useContext(AppContext);
  const [, , removeCookie] = useCookies("x_auth");

  let userCookie = getCookie("x_auth");

  console.log(userCookie);
  let socialUser = JSON.parse(sessionStorage.getItem("socialUser"));

  const handleLogout = () => {
    removeCookie("x_auth");
    sessionStorage.clear();
    loginContext.setIsLogin(false);
  };

  return (
    <div className=" w-full h-[80px] bg-white flex">
      <div className=" w-[80px] h-[80px]" />
      <div className=" flex justify-between h-[80px] w-full">
        <div className=" flex items-center justify-around w-[450px] h-[80px]">
          <Link to="/" className=" font-bold">
            <img
              src="/img/logo.png"
              alt="로고"
              className=" w-[105px] h-[55px]"
            />
          </Link>
          {location.pathname === "/" ? (
            <Scroll.Link
              to="productInfo"
              spy={true}
              smooth={true}
              className="cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-md font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
            >
              제품 소개
            </Scroll.Link>
          ) : (
            <Link
              to="/"
              className="cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-md font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
            >
              제품 소개
            </Link>
          )}
          <Link
            to="/purchase"
            className="cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-md font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
          >
            구매 문의
          </Link>
          <Link
            to="/report"
            className="cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-md font-medium leading-5 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
          >
            고장 신고
          </Link>
        </div>
        <div className=" flex items-center justify-evenly w-[310px]">
          {loginContext.isLogin ? (
            <Link
              to={`/user/${
                userCookie || socialUser
                  ? identifyUserId(userCookie, socialUser)
                  : null
              }`}
            >
              <div className="flex items-center">
                <div className="rounded-full w-10 h-10 mr-2 flex items-center justify-center border border-green-200 bg-[#90C8B4]">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="font-semibold">
                  {userCookie || socialUser
                    ? identifyUserName(userCookie, socialUser)
                    : null}
                </span>
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <button className="relative inline-flex items-center px-8 py-3 border border-transparent text-md font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-400 active:bg-blue-700 transition ease-in-out duration-150">
                로그인
              </button>
            </Link>
          )}
          {loginContext.isLogin ? (
            <div>
              <button
                className="relative inline-flex items-center px-8 py-3 border border-transparent text-md font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-400 active:bg-blue-700 transition ease-in-out duration-150"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
          ) : (
            <Link to="/join">
              <button className="relative inline-flex items-center px-8 py-3 border border-transparent text-md font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-400 active:bg-blue-700 transition ease-in-out duration-150">
                회원가입
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
