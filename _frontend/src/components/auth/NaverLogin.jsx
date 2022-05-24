import React, { useEffect, useRef } from "react";

const NaverLogin = () => {
  const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_REDIRECT_URL = "https://localhost:3000/oauth/callback/naver";

  const { naver } = window;
  const naverRef = useRef();

  const handleNaverLogin = () => {
    const login = new naver.LoginWithNaverId({
      clientId: CLIENT_ID,
      callbackUrl: NAVER_REDIRECT_URL,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 55 },
      callbackHandle: true,
    });
    login.init();
  };

  useEffect(() => {
    handleNaverLogin();
  });

  const handleClick = () => {
    naverRef.current.children[0].click();
  };

  return (
    <>
      <div ref={naverRef} className="hidden" id="naverIdLogin"></div>
      <div className="w-auto flex cursor-pointer" onClick={handleClick}>
        <img
          src="img/naver.png"
          alt="네이버 아이콘"
          className="w-[50px] h-[50px]"
        />
        <div className="w-[350px] h-[50px] bg-[#20CE00] flex items-center justify-center text-lg font-semibold text-white">
          네이버 아이디로 로그인
        </div>
      </div>
    </>
  );
};

export default NaverLogin;
