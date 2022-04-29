import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[300px] bg-[#222222] px-40 flex items-center">
      <div>
        <p className="text-2xl font-serif text-[#777777]">GRAMy</p>
        <p className="text-base text-white">스마트 재고관리 서비스</p>
        <p className="text-xl font-semibold text-[#777777]">CUSTOMER CENTER</p>
        <p className="text-2xl font-bold text-white">1996-0414</p>
        <p className="text-sm text-[#AAAAAA] leading-6">
          상담시간 : 월~금 AM 10:00 ~ PM 5:00
        </p>
        <p className="text-sm text-[#AAAAAA] leading-6">
          점심 PM 12:00 ~ PM 1:00 | 토요일, 일요일, 공휴일 휴무
        </p>
        <p className="text-xl font-semibold text-[#777777]">BANK INFO</p>
        <p className="text-sm text-[#AAAAAA] leading-6">
          농협은행 | 356-0981-5490-03 | 박종재
        </p>
        <a
          href="https://www.instagram.com/ppi_je_je/?hl=ko"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-[#AAAAAA] hover:underline underline-offset-4 hover:text-white"
        >
          Instagarm
        </a>
      </div>
    </div>
  );
};

export default Footer;
