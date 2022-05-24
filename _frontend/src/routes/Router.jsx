import React, { useContext } from "react";
import { AppContext } from "../App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";
import Join from "./Join";
import Login from "./Login";
import Modal from "../components/Modal";
import Purchase from "./Purchase";
import Report from "./Report";
import PurchaseDetail from "./PurchaseDetail";
import PurchaseWrite from "./PurchaseWrite";
import KaKaoRedirectHandler from "../components/auth/KaKaoRedirectHandler";
import NaverRedirectHandler from "../components/auth/NaverRedirectHandler";
import ReportDetail from "./ReportDetail";
import ReportWrite from "./ReportWrite";
import ServiceModal from "../components/ui/ServiceModal";
import AuthHOC from "../HOC/AuthHOC";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

const Router = () => {
  const ModalContext = useContext(AppContext);

  return (
    <>
      {ModalContext.terms.modal1 ? <Modal modalId="modal1" /> : null}
      {ModalContext.terms.modal2 ? <Modal modalId="modal2" /> : null}
      {ModalContext.terms.modal3 ? <Modal modalId="modal3" /> : null}
      {ModalContext.serviceModal ? <ServiceModal /> : null}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={AuthHOC(Home, null)} />
          <Route path="/login" element={AuthHOC(Login, null)} />
          <Route path="/join" element={AuthHOC(Join, null)} />
          <Route path="/user/:id" element={AuthHOC(Profile, null)} />
          <Route path="/user/:id/edit" element={AuthHOC(EditProfile, null)} />
          <Route path="/purchase" element={AuthHOC(Purchase, null)} />
          <Route path="/purchase/:id" element={AuthHOC(PurchaseDetail, null)} />
          <Route
            path="/purchase/write"
            element={AuthHOC(PurchaseWrite, null)}
          />
          <Route
            path="/purchase/:id/update"
            element={AuthHOC(PurchaseWrite, "edit", null)}
          />
          <Route path="/report" element={AuthHOC(Report, null)} />
          <Route path="/report/:id" element={AuthHOC(ReportDetail, null)} />
          <Route path="/report/write" element={AuthHOC(ReportWrite, null)} />
          <Route
            path="/report/:id/update"
            element={AuthHOC(ReportWrite, "edit", null)}
          />
          <Route
            path="/oauth/callback/kakao"
            element={<KaKaoRedirectHandler />}
          />
          <Route
            path="/oauth/callback/naver"
            element={<NaverRedirectHandler />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
