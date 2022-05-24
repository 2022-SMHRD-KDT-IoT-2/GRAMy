import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Profile = () => {
  // const loginContext = useContext(AppContext);
  // const { isLogin } = loginContext;
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();

  const loadUserInfo = () => {
    let url = "http://211.48.228.51:8082/selectOne.do";
    let data = {
      user_id: params.id,
    };
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUserData(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadUserInfo();
  }, []);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="mb-10">
        <span className=" font-semibold text-3xl">
          {loading ? `누구세요~?` : `${userData.user_name}님 어서오세요`}
        </span>
      </div>
      <div className="bg-white w-[30%] h-[450px] flex justify-evenly items-center shadow-2xl">
        <Link to="edit" state={{ user_id: params.id }}>
          <div className="border-2 border-black w-[300px] h-[300px] flex flex-col items-center cursor-pointer">
            <svg
              className="w-[80%] h-[80%]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
            <span className=" text-3xl">회원 정보 수정</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
