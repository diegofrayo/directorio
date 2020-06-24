import { useRef, createContext, useContext } from "react";

function Modal({ children, visible, onCloseHandler }) {
  function closeModal() {
    onCloseHandler(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <Context.Provider value={{ onCloseModalHandler: closeModal }}>
      <Backdrop closeModalHandler={closeModal}>{children}</Backdrop>
    </Context.Provider>
  );
}

// --- Context ---

const Context = createContext({ onCloseModalHandler: () => {} });

Modal.Context = Context;

// --- Components ---

function Backdrop({ children, closeModalHandler }) {
  const backdropRef = useRef(null);

  function handleBackdropClick(e) {
    if (backdropRef && backdropRef.current === e.target) {
      closeModalHandler();
    }
  }

  return (
    <div
      className="root tw-p-2 sm:tw-p-4"
      ref={backdropRef}
      onClick={handleBackdropClick}
    >
      {children}

      <style jsx>
        {`
          .root {
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            bottom: 0;
            display: flex;
            justify-content: center;
            left: 0;
            overflow: auto;
            position: fixed;
            right: 0;
            top: 0;
            z-index: 1000;
          }
        `}
      </style>
    </div>
  );
}

Modal.Backdrop = Backdrop;

function CloseButton() {
  const { onCloseModalHandler } = useContext(Context);

  return (
    <button onClick={onCloseModalHandler}>
      <span className="tw-font-thin tw-text-2xl">x</span>

      <style jsx>{`
        button {
          height: auto;
          opacity: 0.2;
          position: absolute;
          right: 20px;
          top: 10px;
          z-index: 30;
          font-family: Tahoma;
        }
      `}</style>
    </button>
  );
}

Modal.CloseButton = CloseButton;

export default Modal;
