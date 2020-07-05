import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const App = ({ children }) => {
  return <main>{children}</main>;
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: App, ...options });
};

const sleep = tm => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1000 * tm);
  });
};

export * from "@testing-library/react";

export { customRender as render, sleep };
