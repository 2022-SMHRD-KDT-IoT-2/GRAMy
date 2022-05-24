import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { getCookie } from "../components/auth/cookie";

const AuthHOC = (SpecificComponent, mode = null, option, adminRoute = null) => {
  // Component : 컴포넌트
  // option : null (누구든 출입 가능) true(로그인 한 유저만 출입가능) false (로그인 한 유저는 출입 불가)
  const AuthenticationCheck = (props) => {
    // 유저 인증 처리
    const LoginContext = useContext(AppContext);
    let userCookie = getCookie("x_auth");
    let socialUser = sessionStorage.getItem("socialUser");

    console.log(socialUser);

    useEffect(() => {
      if (userCookie) {
        if (userCookie.user_id !== "" && userCookie.user_name !== "") {
          LoginContext.setIsLogin(true);
        }
      } else if (socialUser) {
        LoginContext.setIsLogin(true);
      }
    }, []);

    if (mode === "edit") {
      return <SpecificComponent mode={mode} />;
    } else {
      return <SpecificComponent />;
    }
  };

  return <AuthenticationCheck />;
};

export default AuthHOC;
