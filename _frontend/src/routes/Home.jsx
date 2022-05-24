import React, { useCallback, useEffect, useState } from "react";
import Helmet from "react-helmet";
import Trail from "../components/ui/Trail";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import useScrollFadeIn from "../components/hooks/useScrollFadeIn";
import ServiceJoin from "../components/ServiceJoin";
import { Chip } from "@mui/material";

const Banner = styled.div`
  /* background-image: url("img/gramy_bg.png");
  background-repeat: no-repeat;
  background-size: cover; */
`;

const Home = () => {
  const [fade, setFade] = useState({
    realtime: false,
    feature: false,
  });

  const realtime = useScrollFadeIn({ fade, setFade });
  const feature = useScrollFadeIn({ fade, setFade });

  const onScroll = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      console.log(entry);
    }
  }, []);

  useEffect(() => {
    let observer;

    if (realtime.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(realtime.current);
    }
    if (feature.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(feature.current);
    }

    return () => observer && observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScroll]);

  return (
    <>
      <Helmet>
        <title>GRAMy | 홈</title>
      </Helmet>
      <div className="w-full h-auto">
        <Banner className=" w-full h-[900px] px-48 bg-[url('/public/img/gramybg.png')] bg-cover">
          <div className="px-14">
            <div className="h-36 flex items-center"></div>
            <div className="w-full h-[500px] flex">
              <div className=" mr-40">
                <Trail open={true}>
                  <div className="text-4xl pt-10 mb-5 font-extrabold">
                    <span>재고관리</span>
                  </div>
                  <div className="text-4xl font-extrabold mb-2">
                    <span className="text-[#3E72AF] font-bold">GRAMy </span>
                    <span>에게 맡겨보실래요?</span>
                  </div>
                  <div className="text-lg">
                    GRAMy는 재고 관리를 편하게 할 수 있게 해주는 서비스입니다.
                    <br />
                    언제, 어디서든, 간편하게 재고를 관리해보세요.
                  </div>
                </Trail>
                <ServiceJoin />
              </div>
            </div>
          </div>
        </Banner>
        {/* 제품 특징 */}
        <div className="w-full h-[800px] bg-white flex items-center justify-around px-20 relative">
          <Fade when={fade.feature} bottom>
            <div className="w-[400px] h-[400px] shadow-xl  rounded-3xl flex flex-col items-center hover:bg-[url('/public/img/gramymiddlebox.png')] hover:border border-[#BCD4FF] ">
              <img
                src="img/phoneTime.png"
                alt="실시간"
                className="w-[140px] h-[100px] mt-10"
              />
              <span className="my-5 text-2xl">실시간 재고 확인</span>
              <span>GRAMy는 실시간으로 재고를 파악하여</span>
              <br />
              <span>사용자가 언제 어디서든 쉽게</span>
              <br />
              <span>재고를 확인할 수 있도록 도와줍니다.</span>
            </div>
          </Fade>
          <Fade when={fade.feature} top>
            <div className="bg-white w-[400px] h-[400px] shadow-xl rounded-3xl relative bottom-20 flex flex-col items-center hover:bg-[url('/public/img/gramymiddlebox.png')] hover:border border-[#BCD4FF]">
              <img
                src="img/phoneGraph.png"
                alt="통계"
                className="w-[120px] h-[100px] mt-10"
              />
              <span className="my-5 text-2xl">소모 재고 통계</span>
              <span>재고 소모 통계를 확인하여</span>
              <br />
              <span>필요한 만큼만 주문해보세요!</span>
            </div>
          </Fade>
          <Fade when={fade.feature} bottom>
            <div className="bg-white w-[400px] h-[400px] shadow-xl rounded-3xl flex flex-col items-center hover:bg-[url('/public/img/gramymiddlebox.png')] hover:border border-[#BCD4FF]">
              <img
                src="img/phoneAlert.png"
                alt="알림"
                className="w-[150px] h-[100px] mt-10"
              />
              <span className="my-5 text-2xl">재고 부족 알림</span>
              <span>현재 관리하고 있는 품목의</span>
              <br />
              <span>재고가 부족하면 알림으로 알려줘요!</span>
            </div>
          </Fade>
        </div>
        {/* 위치 파악용 DIV */}
        <div {...feature} className="feature" />
        {/* 제품 소개 */}
        <div
          className="bg-[url('/public/img/gramybox.png')] bg-cover bg-no-repeat h-[800px] w-full px-48 "
          id="productInfo"
        >
          <div className="w-full h-full flex items-center">
            <div className="w-full h-[450px] flex items-center">
              <Fade when={fade.realtime} bottom>
                <img
                  src="img/phone.png"
                  className="hover:scale-110 transition-all w-[600px] h-[600px]"
                  alt="이미지"
                />
              </Fade>
              <div className=" ml-28">
                <p className=" text-4xl text-[#132C4D] font-semibold mb-2">
                  다양한 서비스
                </p>
                <p className=" text-lg">
                  지금 바로 GRAMy를 주변에게 공유해보세요.
                </p>
                <p className="text-lg">
                  GRAMy는 사용자에게 다양한 기능을 제공하고자
                </p>
                <p className="text-lg">다양한 노력을 하고있습니다.</p>
                {/* 위치 파악용 DIV */}
                <div {...realtime} className="realtime" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1200px] bg-white py-40">
          <div className="flex flex-col w-full h-auto items-center">
            <div className="mb-20 text-4xl text-[#132C4D]">
              <span className="font-bold ">팀 </span>
              <span>GRAMy</span>
            </div>
            <div className="flex w-[65%] justify-evenly mb-14">
              <div className="flex flex-col items-center">
                <img
                  src="img/dabin.png"
                  alt="avatar"
                  className="w-[150px] h-[150px]  rounded-full shadow-2xl mb-5 cursor-pointer hover:scale-110 transition-all"
                />
                <Chip
                  label="김다빈"
                  size="small"
                  variant="outlined"
                  className="mb-2"
                />
                <Chip
                  label="조원"
                  color="primary"
                  size="small"
                  className="mb-4"
                />
                <div className="flex">
                  <Chip
                    label="App"
                    color="success"
                    variant="outlined"
                    size="small"
                    className="mb-1 mr-2"
                  />
                  <Chip
                    label="Back-End"
                    color="error"
                    variant="outlined"
                    size="small"
                    className="mb-1"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="img/yeonghye.png"
                  alt="avatar"
                  className="w-[150px] h-[150px]  rounded-full shadow-2xl mb-5 cursor-pointer hover:scale-110 transition-all"
                />
                <Chip
                  label="조영혜"
                  size="small"
                  variant="outlined"
                  className="mb-2"
                />
                <Chip
                  label="조원"
                  color="primary"
                  size="small"
                  className="mb-4"
                />
                <div className="flex">
                  <Chip
                    label="App"
                    color="success"
                    size="small"
                    variant="outlined"
                    className="mb-1 mr-2"
                  />
                  <Chip
                    label="Back-End"
                    color="error"
                    variant="outlined"
                    size="small"
                    className="mb-1"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-[150px] h-[150px] rounded-full shadow-2xl border border-[#CFDAED] mb-5 cursor-pointer hover:scale-110 transition-all"
                  src="img/jongjae.png"
                  alt="team"
                />
                <Chip
                  label="박종재"
                  size="small"
                  variant="outlined"
                  className="mb-2"
                />
                <Chip
                  label="조장"
                  color="warning"
                  size="small"
                  className="mb-4"
                />
                <div>
                  <Chip
                    label="App"
                    color="success"
                    size="small"
                    variant="outlined"
                    className="mb-1 mr-2"
                  />
                  <Chip
                    label="Front-End"
                    color="primary"
                    size="small"
                    variant="outlined"
                    className="mb-1"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="img/minsuck.png"
                  alt="avatar"
                  className="w-[150px] h-[150px] rounded-full shadow-2xl mb-5 cursor-pointer hover:scale-110 transition-all"
                />
                <Chip
                  label="김민석"
                  size="small"
                  variant="outlined"
                  className="mb-2"
                />

                <Chip
                  label="조원"
                  color="primary"
                  size="small"
                  className="mb-4"
                />
                <Chip
                  label="Back-End"
                  color="error"
                  size="small"
                  variant="outlined"
                  className="mb-2"
                />
                <Chip
                  label="App"
                  color="success"
                  size="small"
                  variant="outlined"
                  className="mb-2"
                />
                <Chip
                  label="Raspberry Pi"
                  color="secondary"
                  size="small"
                  variant="outlined"
                  className="mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="img/jungjun.png"
                  alt="avatar"
                  className="w-[150px] h-[150px] rounded-full shadow-2xl mb-5 cursor-pointer hover:scale-110 transition-all"
                />
                <Chip
                  label="김정준"
                  size="small"
                  variant="outlined"
                  className="mb-2"
                />
                <Chip
                  label="조원"
                  color="primary"
                  size="small"
                  className="mb-4"
                />
                <div className="flex ">
                  <Chip
                    label="App"
                    color="success"
                    size="small"
                    variant="outlined"
                    className="mb-2 mr-2"
                  />
                  <Chip
                    label="Raspberry Pi"
                    color="secondary"
                    variant="outlined"
                    size="small"
                    className="mb-2"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <span className="text-4xl text-[#132C4D] mb-20">Use</span>
              <div className="flex w-[70%] justify-evenly">
                <div className="flex flex-col items-center">
                  <img
                    src="img/react.webp"
                    alt="react"
                    className="mb-10 w-[100px] h-[100px] rounded-full shadow-2xl"
                  />
                  <span className="text-xl font-semibold">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="img/springboot.png"
                    alt="springboot"
                    className="mb-10 w-[100px] h-[100px] rounded-full shadow-2xl"
                  />
                  <span className="text-xl font-semibold">Spring Boot</span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="img/raspberry.png"
                    alt="raspberry"
                    className="mb-10 w-[100px] h-[100px] rounded-full shadow-2xl"
                  />
                  <span className="text-xl font-semibold">Raspberry Pi</span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="img/android.png"
                    alt="android"
                    className="mb-10 w-[100px] h-[100px] rounded-full shadow-2xl"
                  />
                  <span className="text-xl font-semibold">Android Studio</span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="img/oracle.png"
                    alt="oracle"
                    className="mb-10 w-[100px] h-[100px] rounded-full shadow-2xl"
                  />
                  <span className="text-xl font-semibold">Oracle DataBase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
