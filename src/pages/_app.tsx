import "../styles.css";

import React from "react";
import App from "next/app";
import Router from "next/router";
import ClipboardJS from "clipboard";

import { initAnalytics } from "~/utils/analytics";

import ErrorPage from "./_error";

class CustomApp extends App {
  state = { error: null, loadFromServer: true };

  componentDidMount(): void {
    initAnalytics();

    function onRouteChangeComplete() {
      console.log("onRouteChangeComplete");
      document.getElementById("__next").scrollTop = 0;

      new ClipboardJS(".clipboard-btn");
    }

    Router.events.on("routeChangeComplete", onRouteChangeComplete);
    Router.events.on("routeChangeStart", () => {
      this.setState({ error: null });
    });

    if (this.state.loadFromServer) {
      console.log("loadFromServer");
      onRouteChangeComplete();
      this.setState({ loadFromServer: false });

      if (window.location.href.includes("noga=true")) {
        window.localStorage.setItem("noga", "true");
      } else if (window.location.href.includes("noga=false")) {
        window.localStorage.removeItem("noga");
      }
    }
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
    const { error } = this.state;

    if (error) {
      return <ErrorPage />;
    }

    return <Component {...pageProps} />;
  }
}

export default CustomApp;
