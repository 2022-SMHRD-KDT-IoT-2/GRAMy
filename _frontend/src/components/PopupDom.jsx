import ReactDOM from "react-dom";

const PopupDom = ({ children }) => {
  const el = document.getElementById("popupDom");
  // children 에서 el를 찾아서 접근
  return ReactDOM.createPortal(children, el);
};

export default PopupDom;
