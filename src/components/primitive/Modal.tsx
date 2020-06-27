import React, { useRef, createContext, useContext, useEffect } from "react";

function Modal({ children, visible, onCloseHandler }: Record<string, any>): any {
  function closeModal() {
    onCloseHandler(false);
  }

  useEffect(() => {
    if (visible) {
      document.body.classList.add("modal-opened");
    } else {
      document.body.classList.remove("modal-opened");
    }
  }, [visible]);

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

const Context = createContext({
  onCloseModalHandler: () => {
    // empty
  },
});

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
      className="root tw-p-4 sm:tw-p-6"
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
            overflow: hidden;
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

function CloseButton({ className = "" }) {
  const { onCloseModalHandler } = useContext(Context);

  return (
    <button className={className} onClick={onCloseModalHandler}>
      <span className="tw-font-bold tw-text-2xl sm:tw-text-4xl tw-leading-none">x</span>
    </button>
  );
}

Modal.CloseButton = CloseButton;

export default Modal;
