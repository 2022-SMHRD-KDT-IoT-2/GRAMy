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

const Router = () => {
  const ModalContext = useContext(AppContext);

  return (
    <>
      {ModalContext.terms.modal1 ? <Modal modalId="modal1" /> : null}
      {ModalContext.terms.modal2 ? <Modal modalId="modal2" /> : null}
      {ModalContext.terms.modal3 ? <Modal modalId="modal3" /> : null}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/purchase/:id" element={<PurchaseDetail />}></Route>
          <Route path="/purchase/write" element={<PurchaseWrite />}></Route>
          <Route path="/report" element={<Report />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
