import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const FaceBookLogin = () => {
  const LoginContext = useContext(AppContext);
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    const { id, name, email } = response; // 이 데이터 핸들링
    sessionStorage.setItem(
      "socialUser",
      JSON.stringify({ id: id, email: email, name: name, type: "facebook" })
    );

    LoginContext.setIsLogin(true);

    navigate("/");
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_APP_ID}
      autoLoad={false}
      fields="name, email"
      callback={responseFacebook}
      render={(renderProps) => (
        <button
          className="w-auto flex mb-5 cursor-pointer"
          onClick={renderProps.onClick}
        >
          <img
            src="img/facebook.png"
            alt="페이스북 아이콘"
            className="w-[50px] h-[50px]"
          />
          <div className="w-[350px] h-[50px] bg-[#517AD5] flex items-center justify-center text-lg font-semibold text-white">
            페이스북 아이디로 로그인
          </div>
        </button>
      )}
    />
  );
};

export default FaceBookLogin;
