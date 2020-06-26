import "../styles.css";

import React from "react";
import App from "next/app";

import { Page } from "~/components/layout";

class CustomApp extends App {
  state = { error: null };

  // componentDidMount() {}

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.group("componentDidCatch");
    console.error(error);
    console.error(info);
    console.groupEnd();

    this.setState({ error });
  }

  render(): any {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default CustomApp;
