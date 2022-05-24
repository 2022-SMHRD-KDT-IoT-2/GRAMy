import React from "react";

const KaKaoLogin = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const REDIRECT_URL = "https://localhost:3000/oauth/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  return (
    <a href={KAKAO_AUTH_URL} className="w-auto flex mb-5">
      <img
        src="img/kakao.jpeg"
        alt="카카오 아이콘"
        className="w-[50px] h-[50px]"
      />
      <div className="w-[350px] h-[50px] bg-[#FFD301] flex items-center justify-center text-lg font-semibold">
        카카오 아이디로 로그인
      </div>
    </a>
  );
};

export default KaKaoLogin;
