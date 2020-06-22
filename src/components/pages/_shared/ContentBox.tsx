function ContentBox({ children }) {
  return <section className="tw-border tw-border-black tw-p-4">{children}</section>;
}

function Title({ children }) {
  return (
    <h2 className="tw-font-bold tw-underline tw-mb-6 tw-text-3xl sm:text-5xl tw-leading-tight">
      {children}
    </h2>
  );
}

ContentBox.Title = Title;

export default ContentBox;
