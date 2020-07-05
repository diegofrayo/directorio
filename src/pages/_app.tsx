import "../styles.css";

import React, { Fragment } from "react";
import App from "next/app";
import Router from "next/router";

import { Page } from "~/components/layout";
import { initAnalytics, trackPageLoaded } from "~/utils/analytics";
import { getMetadata } from "~/utils/metadata";

import ErrorPage from "./_error";

class CustomApp extends App {
  state = { error: null, loadFromServer: true };

  componentDidMount(): void {
    function onRouteChangeComplete() {
      console.log("onRouteChangeComplete");

      document.getElementById("__next").scrollTop = 0;
      trackPageLoaded();
      setTimeout(() => {
        document.title = `${window.location.pathname} - directorioARMENIA`;
      }, 1000);
    }

    if (this.state.loadFromServer) {
      onRouteChangeComplete();
      this.setState({ loadFromServer: false });
    }

    Router.events.on("routeChangeComplete", onRouteChangeComplete);
    Router.events.on("routeChangeStart", () => {
      this.setState({ error: null });
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
    const { error } = this.state;
    const isPageElement = Component.getInitialProps !== undefined;
    const RootElement = isPageElement ? Fragment : Page;

    if (error) {
      return <ErrorPage />;
    }

    return (
      <RootElement {...(isPageElement ? {} : { metadata: getMetadata(router.pathname) })}>
        <Component {...pageProps} />
      </RootElement>
    );
  }
}

export default CustomApp;
