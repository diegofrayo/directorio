import React, { Fragment } from "react";
import Head from "next/head";

function Page({ children }: Record<string, unknown>): any {
  return (
    <Fragment>
      <Head>
        <title>directorio ARMENIA</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {children}
    </Fragment>
  );
}

export default Page;
