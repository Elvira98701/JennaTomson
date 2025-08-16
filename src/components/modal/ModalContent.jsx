import { AnimatePresence, motion } from "framer-motion";

export const ModalContent = ({ isOpenModal, setIsOpenModal }) => {
  return (
    <AnimatePresence>
      {isOpenModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpenModal(false)}
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
                  onClick={() => setIsOpenModal(false)}
                  className="modal__button-close"
                  type="button"
                ></button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
