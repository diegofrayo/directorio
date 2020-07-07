import { useEffect } from "react";

function useDocumentTitle(title?: any): void {
  if (!title) return undefined;

  useEffect(() => {
    document.title = `${title} - directorio ARMENIA`;
  }, [title]);
}

export default useDocumentTitle;
