import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PopupDom from "../components/PopupDom";
import PopupPostCode from "../components/PopupPostCode";

const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user_id } = location.state;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [input, setInput] = useState({});

  const [address, setAddress] = useState({
    addr: "",
    zonecode: "",
    detailAddr: "",
  });

  const [loading, setLoading] = useState(true);

  const openPopup = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const loadUserInfo = () => {
    let url = "http://211.48.228.51:8082/selectOne.do";
    let data = {
      user_id: user_id,
    };
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setInput({
          user_id: res.data.user_id,
          user_pw: "",
          user_name: res.data.user_name,
          user_phone: "",
          user_gender: res.data.user_gender,
          user_addr: res.data.user_addr,
        });
        setLoading(false);
      });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "http://211.48.228.51:8082/updateUser.do";
    let data = input;
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        navigate("/");
      });
  };

  useEffect(() => {
    loadUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>GRAMy | ?????? ?????? ??????</title>
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
        <div className=" bg-white w-[600px] h-[700px] shadow-lg">
          <div className=" px-10">
            <div className="font-semibold text-2xl w-full flex justify-center items-center mt-10 mb-5">
              ?????? ?????? ??????
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="email"
                disabled
                required
                name="user_id"
                value={loading ? "????????? ????????????????????????..." : input.user_id}
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="password"
                placeholder="????????????"
                required
                name="user_pw"
                value={input.user_pw}
                onChange={onChangeInput}
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="password"
                placeholder="??????????????????"
                name="user_pw_confirm"
                required
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="text"
                placeholder="??????"
                required
                name="user_name"
                value={input.user_name}
                onChange={onChangeInput}
              />
              <div>
                <input
                  className=" border-b-slate-700 border-b-[1px] w-1/2 h-10 mb-4 mr-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                  type="number"
                  placeholder="???????????? (-?????? ??????)"
                  required
                  value={input.phone}
                  name="user_phone"
                  onChange={onChangeInput}
                />
                <button
                  className="h-10 bg-[#132C4D] rounded-md text-white font-bold w-28"
                  // onClick={handlePhoneAuth}
                >
                  ?????? ??????
                </button>
              </div>
              {/* ?????? */}
              <div className="flex w-80 justify-around mb-6">
                <span className=" text-[#6A7280]">?????? (??????)</span>
                <div className="flex items-center mr-1">
                  <span className="mr-2">??????</span>
                  <input
                    className="focus:ring-2 focus:ring-blue-300 text-blue-300"
                    type="radio"
                    name="user_gender"
                    value="man"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="flex items-center mr-1">
                  <span className="mr-2">??????</span>
                  <input
                    className="focus:ring-2 focus:ring-blue-300 text-blue-300"
                    type="radio"
                    name="user_gender"
                    value="women"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="flex items-center mr-1">
                  <span className="mr-2">????????????</span>
                  <input
                    className="focus:ring-2 focus:ring-gray-500 text-gray-500"
                    type="radio"
                    name="user_gender"
                    value="nothing"
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="flex px-2 mb-5">
                <div className="text-[#6A7280] mr-4">??????</div>
                <div>
                  <div className="flex items-center mb-4">
                    {/* ???????????? */}
                    <input
                      className="h-6 w-32 mr-4 py-4 bg-slate-100"
                      type="text"
                      placeholder="????????????"
                      value={address.zonecode}
                      disabled
                    />
                    <button
                      className="h-8 bg-white border border-black text-black font-normal w-24"
                      onClick={openPopup}
                    >
                      ????????????
                    </button>
                  </div>
                  <div className="flex items-center mb-4">
                    {/* ?????? */}
                    <input
                      className="h-6 w-96 py-4 bg-slate-100"
                      type="text"
                      placeholder="??????"
                      value={address.addr}
                      disabled
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    {/* ?????? ?????? */}
                    <input
                      className="h-6 w-80 py-4"
                      type="text"
                      placeholder="?????? ??????"
                      required
                      name="detailAddr"
                      value={address.address}
                      onChange={detailAddrInput}
                    />
                  </div>
                </div>
              </div>
              <input
                className=" bg-[#132C4D] rounded-md text-white h-10 font-bold cursor-pointer"
                type="submit"
                value="????????????"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
