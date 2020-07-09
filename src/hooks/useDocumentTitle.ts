import { useEffect } from "react";

function useDocumentTitle(title?: string): void {
  if (!title) return undefined;

  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
