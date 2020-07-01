import "../styles.css";

import React from "react";
import App from "next/app";
import Router from "next/router";

import { Page } from "~/components/layout";
import { trackLoadPage } from "~/utils/analytics";

class CustomApp extends App {
  state = { error: null };

  componentDidMount(): void {
    Router.events.on("routeChangeComplete", () => {
      document.getElementById("__next").scrollTop = 0;
    });

    trackLoadPage();
  }

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
