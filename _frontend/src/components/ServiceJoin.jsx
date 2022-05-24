import React, { useContext } from "react";
import { AppContext } from "../App";

const ServiceJoin = () => {
  const modalContext = useContext(AppContext);

  const onClickServiceJoin = () => {
    modalContext.setServiceModal(true);
  };

  return (
    <div
      className=" mt-20 cursor-pointer bg-white inline-flex items-center justify-center px-5 py-3 border-transparent text-base hover:bg-[#132C4D] hover:text-white leading-6 rounded-md text-gray-800 focus:outline-none focus:ring border border-gray-700 transition duration-150 ease-in-out md:text-lg md:px-6 z-10"
      onClick={onClickServiceJoin}
    >
      <span className=" font-bold mr-2">구매 신청</span>
    </div>
  );
};

export default ServiceJoin;
