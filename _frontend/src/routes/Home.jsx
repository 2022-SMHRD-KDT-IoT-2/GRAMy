import React from "react";
import Helmet from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GRAMy | 홈</title>
      </Helmet>
      <div className="w-screen h-auto">
        <div className=" w-full h-[660px] px-48">
          <div className="px-14">
            <div className="h-36 flex items-center">
              <span className="text-xl text-gray-400">GRAMy</span>
            </div>
            <div className="w-full h-[500px] flex">
              <div className=" mr-40">
                <div className="text-4xl pt-10 mb-5 font-extrabold">
                  <span>재고관리</span>
                </div>
                <div className="text-4xl font-extrabold mb-2">
                  <span className="text-[#90C8B4] font-serif">GRAMy </span>
                  <span>에게 맡겨보실래요?</span>
                </div>
                <div className="text-lg">
                  GRAMy는 재고 관리를 편하게 할 수 있게 해주는 서비스입니다.
                  <br />
                  언제, 어디서든, 간편하게 재고를 관리해보세요.
                </div>
              </div>
              {/* 분리 */}
              <img src="img/boxe.png" alt="박스이미지" />
            </div>
          </div>
        </div>
        {/* 제품 특징 */}
        <div className=" bg-[#90C8B4] h-[365px] w-full px-48">
          <div className="w-full h-full">
            <div className="font-semibold w-full h-auto pt-8 pl-8 text-2xl mb-6 text-gray-800">
              Why GRAMy?
            </div>
            <div className="flex w-full justify-between px-24">
              <div className="flex flex-col items-center">
                <svg
                  className="w-[200px] h-[200px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-2xl">실시간 재고 확인</div>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  className="w-[200px] h-[200px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
                <div className="text-2xl">소모 재고 통계</div>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  className="w-[200px] h-[200px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <div className="text-2xl">재고 부족 알림</div>
              </div>
            </div>
          </div>
        </div>
        {/* 제품 소개 */}
        <div className="w-full h-[1500px]" id="productInfo">
          <div>제품 소개 들어감</div>
        </div>
      </div>
    </>
  );
};

export default Home;
