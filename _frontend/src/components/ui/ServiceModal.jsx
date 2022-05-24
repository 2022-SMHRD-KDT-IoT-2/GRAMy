import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

const ServiceModal = () => {
  const ModalContext = useContext(AppContext);
  const [isMouseLeave, setIsMouseLeave] = useState(true);

  const closeModal = (e) => {
    if (isMouseLeave === true) {
      ModalContext.setServiceModal(false);
    }
  };

  return (
    <>
      <div
        className="fixed top-0 w-screen h-screen bg-[#CCCCCC]/50 z-10 flex justify-center items-center"
        onClick={closeModal}
      >
        <div
          onMouseOver={(e) => {
            setIsMouseLeave(false);
          }}
          onMouseLeave={(e) => {
            setIsMouseLeave(true);
          }}
          className="z-20 w-[700px] h-[600px] opacity-100 bg-white rounded-md shadow-2xl"
        >
          {/* 모달 헤더 */}
          <div className="w-full px-7 py-5  flex items-center justify-between">
            <span className="font-semibold text-xl">서비스 신청서</span>
            <svg
              onClick={() => {
                ModalContext.setServiceModal(false);
              }}
              className="w-6 h-6 text-[#CCCCCC] cursor-pointer hover:text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <hr />
          {/* 모달 바디 */}
          <form>
            {/* 인풋 컨테이너 */}
            <div className="flex flex-col items-center mt-10">
              <input
                className="w-1/2  h-10 mb-4 pl-2 rounded-lg"
                type="text"
                placeholder="이름"
                required
                name="name"
              />
              <input
                className="w-1/2 h-10 mb-4 pl-2 rounded-lg"
                type="email"
                placeholder="이메일 주소"
                required
                name="email"
              />
              <input
                className="w-1/2 h-10 mb-4 pl-2 rounded-lg"
                type="number"
                placeholder="연락처"
                required
                name="phone"
              />
              <input
                className="w-1/2 h-10 mb-4 pl-2 rounded-lg"
                type="text"
                placeholder="요청 내용"
                required
                name="content"
              />
              <div className="w-1/2">
                <div className="flex items-center mb-3">
                  <input
                    className="mr-2 focus:ring-0 text-green-500"
                    type="checkbox"
                  />
                  <span className=" font-semibold">개인정보 수집 동의</span>
                </div>
                <div className="flex items-center mb-3">
                  <input
                    className="mr-2 focus:ring-0 text-green-500"
                    type="checkbox"
                  />
                  <span className=" font-semibold">SMS / 이메일 수신 동의</span>
                </div>
                <div className="flex justify-center items-center cursor-pointer bg-[#132C4D] rounded-lg py-3 mb-4">
                  <span className=" font-bold text-white">서비스 신청</span>
                </div>
                <div>
                  <p className="text-base text-gray-400">
                    * 이용해주셔서 감사합니다.
                  </p>
                  <p className="text-base text-gray-400">
                    빠른 시일내에 연락드리겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceModal;
