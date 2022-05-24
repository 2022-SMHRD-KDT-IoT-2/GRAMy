import axios from "axios";
import React, { useContext, useState, useRef } from "react";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import PopupDom from "../components/PopupDom";
import PopupPostCode from "../components/PopupPostCode";

const Join = () => {
  const ModalContext = useContext(AppContext);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    user_id: "",
    user_pw: "",
    user_name: "",
    user_phone: "",
    user_gender: "",
    user_addr: "",
  });

  const [address, setAddress] = useState({
    addr: "",
    zonecode: "",
    detailAddr: "",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const checkBox1 = useRef();
  const checkBox2 = useRef();
  const checkBox3 = useRef();
  const checkBox4 = useRef();

  const checkBoxes = [checkBox1, checkBox2, checkBox3, checkBox4];

  const detailAddrInput = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
    setInput({
      ...input,
      user_addr: `${address.zonecode} ${address.addr} ${value}`,
    });
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handlePhoneAuth = (e) => {
    e.preventDefault();
    console.log(input);
  };

  const showTerms = (e) => {
    const { id } = e.target;
    ModalContext.setTerms({
      ...ModalContext.terms,
      [id]: true,
    });
  };

  const checkAll = (e) => {
    const { checked } = e.target;
    if (checked) {
      checkBoxes.forEach((i) => (i.current.checked = true));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("http://211.48.228.51:8082/join.do", {
      method: "POST", // *GET, POST, PUT, DELETE 등
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin
      body: JSON.stringify(input),
    });
    let resultText = await result.text();
    console.log(resultText);
    if (resultText === "success") {
      navigate("/login");
    } else if (resultText === "fail") {
      console.log("회원가입 실패 처리하기");
    }
  };

  return (
    <>
      <Helmet>
        <title>GRAMy | 회원가입</title>
      </Helmet>
      <div id="popupDom">
        {isPopupOpen && (
          <div>
            <PopupDom>
              <PopupPostCode
                onClose={closePopup}
                setAddress={setAddress}
                address={address}
              />
            </PopupDom>
          </div>
        )}
      </div>
      <div className="w-full h-full my-14 flex justify-center items-center">
        <div className=" bg-white w-[600px] h-[800px] shadow-lg">
          <div className=" px-10">
            <div className="font-semibold text-2xl w-full flex justify-center items-center mt-10 mb-5">
              회원가입
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="email"
                placeholder="이메일 주소 (필수)"
                required
                value={input.id}
                name="user_id"
                onChange={onChangeInput}
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="password"
                placeholder="비밀번호 (필수)"
                required
                value={input.pw}
                name="user_pw"
                onChange={onChangeInput}
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="text"
                placeholder="이름 (필수)"
                required
                value={input.username}
                name="user_name"
                onChange={onChangeInput}
              />
              <div>
                <input
                  className=" border-b-slate-700 border-b-[1px] w-1/2 h-10 mb-4 mr-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                  type="number"
                  placeholder="전화번호 (-없이 입력) (필수)"
                  required
                  value={input.phone}
                  name="user_phone"
                  onChange={onChangeInput}
                />
                <button
                  className="h-10 bg-[#132C4D] rounded-md text-white font-bold w-28 hover:bg-[#284770] transition ease-in-out duration-150"
                  onClick={handlePhoneAuth}
                >
                  인증 하기
                </button>
              </div>
              {/* 성별 */}
              <div className="flex w-80 justify-around mb-6">
                <span className=" text-[#6A7280]">성별 (선택)</span>
                <div className="flex items-center mr-1">
                  <span className="mr-2">남성</span>
                  <input
                    className="focus:ring-2 focus:ring-blue-300 text-blue-300"
                    type="radio"
                    name="user_gender"
                    value="man"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="flex items-center mr-1">
                  <span className="mr-2">여성</span>
                  <input
                    className="focus:ring-2 focus:ring-blue-300 text-blue-300"
                    type="radio"
                    name="user_gender"
                    value="women"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="flex items-center mr-1">
                  <span className="mr-2">상관없음</span>
                  <input
                    className="focus:ring-2 focus:ring-gray-500 text-gray-500"
                    type="radio"
                    name="user_gender"
                    value="nothing"
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              {/* 주소 */}
              <div className="flex px-2">
                <div className="text-[#6A7280] mr-4">주소</div>
                <div>
                  <div className="flex items-center mb-4">
                    {/* 우편번호 */}
                    <input
                      className="h-6 w-32 mr-4 py-4 bg-slate-100"
                      type="text"
                      placeholder="우편번호"
                      value={address.zonecode}
                      disabled
                    />
                    <button
                      className="h-8 bg-white border border-black text-black font-normal w-24"
                      onClick={openPopup}
                    >
                      주소검색
                    </button>
                  </div>
                  <div className="flex items-center mb-4">
                    {/* 주소 */}
                    <input
                      className="h-6 w-96 py-4 bg-slate-100"
                      type="text"
                      placeholder="주소"
                      value={address.addr}
                      disabled
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    {/* 상세 정보 */}
                    <input
                      className="h-6 w-80 py-4"
                      type="text"
                      placeholder="상세 주소"
                      required
                      name="detailAddr"
                      value={address.address}
                      onChange={detailAddrInput}
                    />
                  </div>
                </div>
              </div>
              {/* 이용 약관 */}
              <div className="mb-4">
                <div className="font-semibold text-xl">이용 약관 동의</div>
                <div className="flex flex-col justify-around h-44 font-thin">
                  <div className="flex items-center">
                    {/* 전체 약관 동의 */}
                    <input
                      className="mr-2 focus:ring-0 text-[#3E72AF]"
                      type="checkbox"
                      onClick={checkAll}
                    />
                    <span>전체 약관 동의합니다.</span>
                  </div>
                  <div className="flex items-center relative">
                    {/* GRAMy 이용 약관 동의 */}
                    <input
                      className="mr-2 focus:ring-0 text-[#3E72AF]"
                      type="checkbox"
                      ref={checkBox1}
                      required
                    />
                    <span>GRAMy 이용 약관 동의</span>
                    <div className="absolute right-0 font-semibold pr-5">
                      <span
                        className="cursor-pointer"
                        onClick={showTerms}
                        id="modal1"
                      >
                        약관보기 {">"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center relative">
                    {/* 개인정보 취급 방침 동의 (필수) */}
                    <input
                      className="mr-2 focus:ring-0 text-[#3E72AF]"
                      type="checkbox"
                      ref={checkBox2}
                      required
                    />
                    <span>개인정보 취급 방침 동의 (필수)</span>
                    <div className="absolute right-0 font-semibold pr-5">
                      <span
                        className="cursor-pointer"
                        onClick={showTerms}
                        id="modal2"
                      >
                        약관보기 {">"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center relative">
                    {/* 개인정보 취급 방침 동의 (선택) */}
                    <input
                      className="mr-2 focus:ring-0 text-[#3E72AF]"
                      type="checkbox"
                      ref={checkBox3}
                    />
                    <span>개인정보 취급 방침 동의 (선택)</span>
                    <div className="absolute right-0 font-semibold pr-5">
                      <span
                        className="cursor-pointer"
                        onClick={showTerms}
                        id="modal3"
                      >
                        약관보기 {">"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="mr-2 focus:ring-0 text-[#3E72AF]"
                      type="checkbox"
                      ref={checkBox4}
                    />
                    <span>할인/혜택/마케팅/광고 등 정보 수신 (선택)</span>
                  </div>
                </div>
              </div>
              <input
                className=" bg-[#132C4D] rounded-md text-white h-10 font-bold cursor-pointer hover:bg-[#284770] transition ease-in-out duration-150"
                type="submit"
                value="회원가입"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
