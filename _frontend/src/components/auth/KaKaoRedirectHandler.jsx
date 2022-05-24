import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const KaKaoRedirectHandler = () => {
  const navigate = useNavigate();
  const LoginContext = useContext(AppContext);

  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";
    let client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=https://localhost:3000/oauth/callback/kakao&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then(async (res) => {
        let { access_token } = res.data;

        window.Kakao.init(process.env.REACT_APP_KAKAO_CLIENT_ID);
        window.Kakao.Auth.setAccessToken(access_token);

        let data = await window.Kakao.API.request({
          url: "/v2/user/me",
        });

        console.log(data); // 이 데이터 핸들링
        sessionStorage.setItem(
          "socialUser",
          JSON.stringify({
            id: data.id,
            email: data.kakao_account.email,
            name: data.kakao_account.profile.nickname,
            type: "kakao",
          })
        );

        LoginContext.setIsLogin(true);

        navigate("/");
      });
  }, [navigate, LoginContext]);

  return <div></div>;
};

export default KaKaoRedirectHandler;
