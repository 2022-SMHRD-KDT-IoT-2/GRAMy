import React from "react";
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = ({ onClose, setAddress, address }) => {
  const onComplete = (data) => {
    // 필요한 데이터 : data.address , zoneCode
    console.log(data);
    setAddress({
      ...address,
      addr: data.address,
      zonecode: data.zonecode,
    });
    onClose();
  };

  return (
    <div className=" border-4 border-black z-30 shadow-2xl w-[500px] h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-[#ECECEC]">
      <DaumPostcode onComplete={onComplete} />
      <button
        className="h-10 bg-[#90C8B4] rounded-md text-white font-bold w-28"
        onClick={onClose}
      >
        닫기
      </button>
    </div>
  );
};

export default PopupPostCode;
