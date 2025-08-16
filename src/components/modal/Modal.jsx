import { useEffect, useState } from "react";

import { ModalContent } from "./ModalContent";

import "./modal.scss";

export const Modal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (isOpenModal) {
      document.documentElement.classList.add("popup-opened");
    } else {
      document.documentElement.classList.remove("popup-opened");
    }
  }, [isOpenModal]);

  return (
    <div className="modal">
      <button
        onClick={() => setIsOpenModal(true)}
        className="modal__button"
        type="button"
      >
        Subscribe
      </button>
      <ModalContent isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  );
};
