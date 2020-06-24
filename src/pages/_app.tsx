import "../styles.css";

import App from "next/app";

import { Page } from "~/components/layout";

class CustomApp extends App {
  state = { error: null };

  componentDidMount() {}

  componentDidCatch(error, info) {
    console.group("componentDidCatch");
    console.error(error);
    console.error(info);
    console.groupEnd();

    this.setState({ error });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default CustomApp;
