import { useEffect } from "react";

function useWindowResize(callback: () => void): any {
  function handleWindowResize() {
    callback();
  }

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
}

export default useWindowResize;
