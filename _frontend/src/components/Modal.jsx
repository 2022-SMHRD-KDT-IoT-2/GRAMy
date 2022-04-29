import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { cls } from "../utils/utils";

const Modal = ({ modalId }) => {
  const ModalContext = useContext(AppContext);
  const [isMouseLeave, setIsMouseLeave] = useState(false);

  const closeModal = (e) => {
    if (isMouseLeave === true) {
      ModalContext.setTerms({
        ...ModalContext.terms,
        [modalId]: false,
      });
    }
  };

  return (
    <>
      <div
        className="fixed top-0 w-screen h-screen bg-[#CCCCCC]/50 z-10 flex justify-center items-center"
        onClick={closeModal}
      >
        {/* 모달 컨테이너 */}
        <div
          onMouseOver={(e) => {
            setIsMouseLeave(false);
          }}
          onMouseLeave={(e) => {
            setIsMouseLeave(true);
          }}
          className={cls(
            "z-20 w-[700px] opacity-100 bg-white rounded-md",
            modalId === "modal1"
              ? "h-[870px]"
              : modalId === "modal2"
              ? "h-[600px]"
              : "h-[500px]"
          )}
        >
          {/* 모달 헤더 */}
          <div className="w-full px-7 py-5 flex items-center justify-between">
            <span className="font-semibold text-xl">
              {modalId === "modal1" ? "GRAMy 이용 약관 동의" : null}
              {modalId === "modal2" ? "GRAMy 개인정보 취급방침" : null}
              {modalId === "modal3" ? "GRAMy 개인정보 취급방침" : null}
            </span>
            <svg
              onClick={() => {
                ModalContext.setTerms({
                  ...ModalContext.terms,
                  [modalId]: false,
                });
              }}
              className="w-6 h-6 text-[#CCCCCC] cursor-pointer hover:text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <hr />
          {/* 모달 바디 */}
          <>
            {modalId === "modal1" ? (
              <div className="overflow-y-scroll h-[800px] py-5 px-5 font-extralight text-sm break-normal whitespace-pre-wrap">
                <p className=" text-xl font-bold">제 1 장 총칙</p>
                <p className="text-lg font-semibold">제 1 조 (목적)</p>
                <p>
                  본 약관은 (주)GRAMY(이하 “회사”라 합니다)이 운영하는 웹사이트
                  ‘GRAMy’ (www.gramy.com) (이하 “웹사이트”라 합니다)에서
                  제공하는 온라인 서비스(이하 “서비스”라 한다)를 이용함에 있어
                  사이버몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로
                  합니다.
                </p>
                <p className="text-lg font-semibold">제 2 조 (용어의 정의)</p>
                <p>
                  본 약관에서 사용하는 용어는 다음과 같이 정의한다. <br />
                  1. “웹사이트”란 회사가 재화 또는 용역을 이용자에게 제공하기
                  위하여 컴퓨터 등 정보통신설비를 이용하여 재화 또는 용역을 거래
                  할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을
                  운영하는 사업자의 의미로도 사용합니다. <br />
                  2. “이용자”란 “웹사이트”에 접속하여 서비스를 이용하는 회원 및
                  비회원을 말합니다. <br />
                  3. “회원”이라 함은 “웹사이트”에 개인정보를 제공하여 회원등록을
                  한 자로서, “웹사이트”의 정보를 지속적으로 제공받으며,
                  “웹사이트”이 제공하는 서비스를 계속적으로 이용할 수 있는 자를
                  말합니다. <br />
                  4. “비회원”이라 함은 회원에 가입하지 않고, “웹사이트”이
                  제공하는 서비스를 이용하는 자를 말합니다. <br />
                  5. “ID”라 함은 이용자가 회원가입당시 등록한 사용자
                  “개인이용문자”를 말합니다. <br />
                  6. “멤버십”이라 함은 회원등록을 한 자로서, 별도의 온/오프라인
                  상에서 추가 서비스를 제공 받을 수 있는 회원을 말합니다. <br />
                </p>
                <p className="text-lg font-semibold">
                  제 3 조 (약관의 공시 및 효력과 변경)
                </p>
                1. 본 약관은 회원가입 화면에 게시하여 공시하며 회사는 사정변경
                및 영업상 중요한 사유가 있을 경우 약관을 변경할 수 있으며 변경된
                약관은 공지사항을 통해 공시한다 <br />
                2. 본 약관 및 차후 회사사정에 따라 변경된 약관은 이용자에게
                공시함으로써 효력을 발생한다. <br />
                <p className="text-lg font-semibold">제 4 조 (약관 외 준칙)</p>
                본 약관에 명시되지 않은 사항이 전기통신기본법, 전기통신사업법,
                정보통신촉진법, ‘전자상거래등에서의 소비자 보호에 관한 법률’,
                ‘약관의 규제에관한법률’, ‘전자거래기본법’, ‘전자서명법’,
                ‘정보통신망 이용촉진등에 관한 법률’, ‘소비자보호법’ 등 기타 관계
                법령에 규정되어 있을 경우에는 그 규정을 따르도록 한다.
                <br />
                <br />
                <p className=" text-xl font-bold">제 2 장 이용계약 </p>
                <p className="text-lg font-semibold">제 5 조 (이용신청)</p>
                1. 이용신청자가 회원가입 안내에서 본 약관과 개인정보보호정책에
                동의하고 등록절차(회사의 소정 양식의 가입 신청서 작성)를 거쳐
                ‘확인’ 버튼을 누르면 이용신청을 할 수 있다.
                <br />
                2. 이용신청자는 반드시 실명과 실제 정보를 사용해야 하며 1개의
                생년월일에 대하여 1건의 이용신청을 할 수 있다.
                <br />
                3. 실명이나 실제 정보를 입력하지 않은 이용자는 법적인 보호를
                받을 수 없으며, 서비스 이용에 제한을 받을 수 있다.
                <br />
                <p className="text-lg font-semibold">
                  제 6 조 (이용신청의 승낙)
                </p>
                1. 회사는 제5조에 따른 이용신청자에 대하여 제2항 및 제3항의
                경우를 예외로 하여 서비스 이용을 승낙한다.
                <br />
                2. 회사는 아래 사항에 해당하는 경우에 그 제한사유가 해소될
                때까지 승낙을 유보할 수 있다.
                <br />
                가. 서비스 관련 설비에 여유가 없는 경우
                <br />
                나. 기술상 지장이 있는 경우
                <br />
                다. 기타 회사 사정상 필요하다고 인정되는 경우
                <br />
                3. 회사는 아래 사항에 해당하는 경우에 승낙을 하지 않을 수 있다.
                <br />
                가. 다른 사람의 명의를 사용하여 신청한 경우
                <br />
                나. 이용자 정보를 허위로 기재하여 신청한 경우
                <br />
                다. 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우
                <br />
                라. 기타 회사가 정한 이용신청 요건이 미비한 경우
                <br />
                <br />
                <p className=" text-xl font-bold">제 3 장 계약 당사자의 의무</p>
                <p className="text-lg font-semibold">제 7 조 (회사의 의무)</p>
                1. 회사는 사이트를 안정적이고 지속적으로 운영할 의무가 있다. 2.
                회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정될
                경우에는 즉시 처리해야 한다. 단, 즉시 처리가 곤란한 경우에는
                이용자에게 그 사유와 처리일정을 공지사항 또는 전자우편을 통해
                통보해야 한다. 3. 제1항의 경우 수사상의 목적으로 관계기관 및
                정보통신윤리위원회의 요청이 있거나 영장 제시가 있는 경우, 기타
                관계 법령에 의한 경우는 예외로 한다.
                <p className="text-lg font-semibold">제 8 조 (이용자의 의무)</p>
                1. 이용자는 본 약관 및 회사의 공지사항, 사이트 이용안내 등을
                숙지하고 준수해야 하며 기타 회사의 업무에 방해되는 행위를 해서는
                안된다. 2. 이용자는 회사의 사전 승인 없이 본 사이트를 이용해
                어떠한 영리행위도 할 수 없다. 3. 이용자는 본 사이트를 통해 얻는
                정보를 회사의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판, 방송
                및 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없다.
                <br />
                <br />
                <p className=" text-xl font-bold">
                  제 4 장 서비스의 제공 및 이용
                </p>
                <p className="text-lg font-semibold">제 9 조 (서비스 이용)</p>
                1. 이용자는 본 약관의 규정된 사항을 준수해 사이트를 이용한다.
                <br />
                2. 본 약관에 명시되지 않은 서비스 이용에 관한 사항은 회사가 정해
                ‘공지사항’에 게시하거나 또는 별도로 공지하는 내용에 따른다.
                <br />
                <p className="text-lg font-semibold">제 10 조 (정보의 제공)</p>
                1. 회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한
                정보에 대하여 전자메일이나 서신우편 등의 방법으로 회원에게
                정보를 제공할 수 있다.
                <br />
                <p className="text-lg font-semibold">제 11 조 (광고게재)</p>
                1. 회사는 서비스의 운용과 관련하여 서비스 화면, 홈페이지,
                전자우편 등에 광고 등을 게재할 수 있다.
                <br />
                2. 회사는 사이트에 게재되어 있는 광고주의 판촉활동에 회원이
                참여하거나 교신 또는 거래의 결과로서 발생하는 모든 손실 또는
                손해에 대해 책임을 지지 않는다.
                <br />
                <p className="text-lg font-semibold">
                  제 12 조 (서비스 이용의 제한)
                </p>
                본 사이트 이용 및 행위가 다음 각 항에 해당하는 경우 회사는 해당
                이용자의 이용을 제한할 수 있다.
                <br />
                1. 공공질서 및 미풍양속, 기타 사회질서를 해하는 경우
                <br />
                2. 범죄행위를 목적으로 하거나 기타 범죄행위와 관련된다고
                객관적으로 인정되는 경우
                <br />
                3. 타인의 명예를 손상시키거나 타인의 서비스 이용을 현저히
                저해하는 경우
                <br />
                4. 타인의 의사에 반하는 내용이나 광고성 정보 등을 지속적으로
                전송하는 경우
                <br />
                5. 해킹 및 컴퓨터 바이러스 유포 등으로 서비스의 건전한 운영을
                저해하는 경우
                <br />
                6. 다른 이용자 또는 제3자의 지적재산권을 침해하거나
                지적재산권자가 지적 재산권의 침해를 주장할 수 있다고 판단되는
                경우
                <br />
                7. 타인의 아이디 및 비밀번호를 도용한 경우
                <br />
                8. 기타 관계 법령에 위배되는 경우 및 회사가 이용자로서
                부적당하다고 판단한 경우
                <br />
                <p className="text-lg font-semibold">
                  제 13 조 (서비스 제공의 중지)
                </p>
                회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부의
                제공을 중지할 수 있다.
                <br />
                1. 전기통신사업법 상에 규정된 기간통신 사업자 또는 인터넷 망
                사업자가 서비스를 중지했을 경우
                <br />
                2. 정전으로 서비스 제공이 불가능할 경우
                <br />
                3. 설비의 이전, 보수 또는 공사로 인해 부득이한 경우
                <br />
                4. 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인
                서비스 제공이 어려운 경우
                <br />
                5. 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가
                발생하거나 발생할 우려가 있는 경우
                <br />
                <p className="text-lg font-semibold">제 14 조 (게시물 관리)</p>
                회사는 건전한 통신문화 정착과 효율적인 사이트 운영을 위하여
                이용자가 게시하거나 제공하는 자료가 제12조에 해당한다고 판단되는
                경우에 임의로 삭제, 자료이동, 등록거부를 할 수 있다.
                <p className="text-lg font-semibold">
                  제 15 조 (서비스 이용 책임)
                </p>
                이용자는 회사에서 권한 있는 사원이 서명한 명시적인 서면에
                구체적으로 허용한 경우를 제외하고는 서비스를 이용하여 불법상품을
                판매하는 영업활동을 할 수 없으며 특히 해킹, 돈벌기 광고, 음란
                사이트를 통한 상업행위, 상용 S/W 불법제공 등을 할 수 없다. 이를
                어기고 발생한 영업활동의 결과 및 손실, 관계기관에 의한 구속 등
                법적 조치 등에 관해서는 회사가 책임을 지지 않는다.
                <br />
                <br />
                <p className=" text-xl font-bold">
                  제 5 장 재화의 주문 및 결제 관련
                </p>
                <p className="text-lg font-semibold">제16조 (결제방법)</p>
                1. ‘회원’은 ‘회사’에서 판매하는 재화에 대하여 ‘선불카드,
                직불카드, 신용카드 등의 각종 카드 결제 수단’을 이용하여 결제할
                수 있다. 이때 ‘회사’는 이용자의 지급방법에 대하여 재화외 어떠한
                명목의 수수료를 추가 징수하지 않는다.
                <br />
                2. ‘회사’는 이용자의 구매신청이 있는 경우 이용자에게
                수신확인통지를 한다. 주문확인에 대한 내용은 해당게시판에서 확인
                할 수 있다.
                <br />
                3. 수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는
                경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를
                요청할 수 있고 ‘회사’는 배송전에 이용자의 요청이 있는 경우에는
                지체 없이 그 요청에 따라 처리한다. 다만 이미 대금을 지불한
                경우에는 제18조의 ‘반품규정’을 따른다.
                <br />
                <p className="text-lg font-semibold">제17조 (배송정책)</p>
                1. ‘회사’는 이용자와 재화의 공급시기에 관하여 별도의 약정이 없는
                이상, 이용자가 결재를 실시한 날부터 7일 이내에 재화 등을 배송할
                수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취한다.
                <br />
                2. ‘회사’는 이용자가 구매한 재화에 대해 배송수단, 수단별
                배송비용 부담자, 수단별 배송기간 등을 제품을 구매하는 웹 페이지
                하단에 명시한다. 만약 ‘회사’가 약정 배송기간을 초과한 경우에는
                그로 인한 이용자의 손해를 배상한다. 하지만 ‘회사’의 고의과실이
                없음을 입증한 경우에는 그러하지 아니한다.
                <br />
                <p className="text-lg font-semibold">
                  18조 (취소 및 반품 환불 규정)
                </p>
                1. ‘회사’는 이용자가 구매 신청한 재화 등이 품절 등의 사유로 인도
                또는 제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게
                통지하고 사전에 재화 등의 대금을 받은 경우에는 대금을 받은
                날부터 3영업일 이내에 환급하거나 환급에 필요한 조치를 한다.{" "}
                <br />
                2. 재화가 발송 되기전 이용자가 결제를 취소할 경우 ‘회사’는 해당
                주문건을 취소 처리하고 카드결제 승인을 취소한다.
                <br />
                3. 재화가 발송 된 이후 결제 취소는 불가하다. 단, ‘회사’의 부주의
                ‘배송’상의 문제로 인한 재화의 파손, 변질의 경우 ‘회사’는
                이용자에게 구매 금액의 반품 및 환불 조취 및 교환 조취를 취한다.
                <br />
              </div>
            ) : null}
            {modalId === "modal2" ? (
              <div className="py-5 px-5">
                <div className=" font-bold text-3xl mb-5">
                  개인정보 수집 * 이용 동의 (필수)
                </div>
                <table className=" w-full border border-slate-500 mb-14">
                  <thead>
                    <tr>
                      <th className="border border-slate-500 w-72 p-3 font-bold">
                        수집 목적
                      </th>
                      <th className="border border-slate-500 font-bold">
                        수집 항목
                      </th>
                      <th className="border border-slate-500 font-bold">
                        보유 기간
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" font-light">
                    <tr>
                      <td className="border border-slate-500 p-3">
                        이용자 식별 및 본인여부
                      </td>
                      <td
                        rowSpan="4"
                        className="border border-slate-500 align-middle px-2"
                      >
                        이름, 휴대폰번호, 이메일, 비밀번호(암호화)
                      </td>
                      <td
                        rowSpan="4"
                        className="border border-slate-500 align-middle px-2"
                      >
                        회원 탈퇴 즉시 파기 <br />
                        부정이용방지를 위하여 1년동안 보관 후 파기(이메일,
                        휴대폰번호)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-3">
                        계약 이행 및 약관변경 등의 고지를 위한 연락, 본인의사
                        확인
                        <br />및 민원 등의 고객 고충 처리
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-3">
                        부정 이용 방지, 비인가 사용방지 및 서비스 제공 및 계약의
                        이행
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-500 p-3">
                        만 14세 미만 아동인지 확인
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className=" text-sm font-medium mb-5">
                  서비스 제공을 위해서 필요한 최소한의 개인정보이므로 동의를 해
                  주셔야 서비스를 이용하실 수 있습니다.
                </div>
                <hr className="mb-8" />
                <div className="relative w-full">
                  <div className="flex items-center absolute right-0">
                    <button
                      className="h-10 bg-[#90C8B4] rounded-md text-white font-bold w-28"
                      onClick={() => {
                        ModalContext.setTerms({
                          ...ModalContext.terms,
                          [modalId]: false,
                        });
                      }}
                    >
                      확인
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
            {modalId === "modal3" ? (
              <div className="py-5 px-5">
                <div className=" font-bold text-3xl mb-5">
                  개인정보 수집 * 이용 동의 (선택)
                </div>
                <table className=" w-full border border-slate-500 mb-14">
                  <thead>
                    <tr>
                      <th className="border border-slate-500 w-72 p-3 font-bold">
                        수집 목적
                      </th>
                      <th className="border border-slate-500 w-32 font-bold">
                        수집 항목
                      </th>
                      <th className="border border-slate-500 font-bold">
                        보유 기간
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" font-light">
                    <tr>
                      <td className="border border-slate-500 p-3 text-base">
                        맞춤형 회원 서비스 제공
                      </td>
                      <td className="border border-slate-500 p-3 text-base">
                        성별, 생년월일
                      </td>
                      <td className="border border-slate-500 p-3 text-base">
                        회원 탈퇴 즉시 파기 <br />
                        부정이용방지를 위하여 1년동안 보관 후 파기(이메일,
                        휴대폰번호)
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className=" text-sm font-medium mb-5">
                  본 항목은 선택적 동의 항목으로서, 동의하지 않으셔도 서비스를
                  이용하실 수 있습니다.
                </div>
                <hr className="mb-8" />
                <div className="relative w-full">
                  <div className="flex items-center absolute right-0">
                    <button
                      className="h-10 bg-[#90C8B4] rounded-md text-white font-bold w-28"
                      onClick={() => {
                        ModalContext.setTerms({
                          ...ModalContext.terms,
                          [modalId]: false,
                        });
                      }}
                    >
                      확인
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        </div>
      </div>
    </>
  );
};

export default Modal;
