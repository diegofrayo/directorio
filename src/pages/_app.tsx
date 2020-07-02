import "../styles.css";

import React, { Fragment } from "react";
import App from "next/app";
import Router from "next/router";

import { Page } from "~/components/layout";
import { initAnalytics, trackPageLoaded } from "~/utils/analytics";
import { getMetadata } from "~/utils/metadata";

class CustomApp extends App {
  state = { error: null };

  componentDidMount(): void {
    Router.events.on("routeChangeComplete", () => {
      document.title = `${window.location.pathname} - directorioARMENIA`;
      document.getElementById("__next").scrollTop = 0;
      trackPageLoaded();
    });

    initAnalytics();
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.group("componentDidCatch");
    console.error(error);
    console.error(info);
    console.groupEnd();

    this.setState({ error });
  }

  render(): any {
    const { Component, pageProps, router } = this.props;
    const isPageElement = Component.getInitialProps !== undefined;
    const RootElement = isPageElement ? Fragment : Page;

    return (
      <RootElement {...(isPageElement ? {} : { metadata: getMetadata(router.pathname) })}>
        <Component {...pageProps} />
      </RootElement>
    );
  }
}

export default CustomApp;
