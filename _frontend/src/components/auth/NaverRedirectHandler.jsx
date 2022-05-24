import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { AppContext } from "../../App";

const NaverRedirectHandler = () => {
  const LoginContext = useContext(AppContext);
  const { hostname, protocol } = window.location;
  const navigate = useNavigate();

  const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;

  const callbackUrl = `${protocol}//${hostname}/naver-login`;
  const naverLogin = new window.naver.LoginWithNaverId({
    clientId: CLIENT_ID,
    callbackUrl,
    isPopup: false,
    callbackHandle: true,
  });
  naverLogin.init();

  useEffect(() => {
    // const location = window.location.href.split("=")[1];
    // const access_token = location.split("&")[0];

    naverLogin.getLoginStatus(async function (status) {
      if (status) {
        // 이 값 핸들링
        const userId = naverLogin.user.getId();
        const userEmail = naverLogin.user.getEmail();
        const userName = naverLogin.user.getName();

        sessionStorage.setItem(
          "socialUser",
          JSON.stringify({
            id: userId,
            email: userEmail,
            name: userName,
            type: "naver",
          })
        );
        LoginContext.setIsLogin(true);
        navigate("/");
      }
    });
  });

  return (
    <div>
      <Skeleton variant="rectangular" width={10000} height={1000} />
    </div>
  );
};

export default NaverRedirectHandler;
