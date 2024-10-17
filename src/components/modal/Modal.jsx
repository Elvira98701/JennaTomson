import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import "./modal.scss";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("popup-opened");
    } else {
      document.documentElement.classList.remove("popup-opened");
    }
  }, [isOpen]);

  return (
    <div className="modal">
      <button
        onClick={() => setIsOpen(true)}
        className="modal__button"
        type="button"
      >
        Subscribe
      </button>
      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const ModalContent = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="modal__wrapper"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg", x: "-50%", y: "-50%" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="modal__content"
          >
            <div>
              <h3>Subscribe</h3>
              <form className="modal__form">
                <input
                  className="modal__input"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
                <input
                  className="modal__input"
                  type="email"
                  name="email"
                  placeholder="Enter your e-mail"
                  required
                />
                <button className="modal__submit" type="submit">
                  Subscribe
                </button>
              </form>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="modal__button-close"
                ></button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
