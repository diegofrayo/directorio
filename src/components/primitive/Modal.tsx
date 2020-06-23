import { useRef, createContext, useContext } from 'react';

function Modal({ children, visible, onCloseHandler }) {
  const closeModal = () => {
    onCloseHandler(false);
  };

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

  const handleBackdropClick = e => {
    if (backdropRef && backdropRef.current === e.target) {
      closeModalHandler();
    }
  };

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
    <button className="close-button" onClick={onCloseModalHandler}>
      <span className="tw-font-bold tw-text-3xl">x</span>

      <style jsx>{`
        .close-button {
          height: auto;
          position: absolute;
          right: 20px;
          text-shadow: 2px 2px 2px #d3d3d3;
          top: 10px;
          z-index: 30;
        }
      `}</style>
    </button>
  );
}

Modal.CloseButton = CloseButton;

export default Modal;
