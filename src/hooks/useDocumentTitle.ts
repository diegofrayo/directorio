import { useEffect } from "react";

function useDocumentTitle(title?: any): void {
  if (!title) return undefined;

  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
