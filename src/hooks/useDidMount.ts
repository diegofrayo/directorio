import { useEffect } from "react";

function useDidMount(callback: () => void): any {
  return useEffect(callback, []);
}

export default useDidMount;
