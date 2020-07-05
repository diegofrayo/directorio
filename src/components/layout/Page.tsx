import React, { Fragment } from "react";
import Head from "next/head";

import { DEFAULT_METADATA } from "~/utils/metadata";

function Page({ children, metadata = DEFAULT_METADATA }: Record<string, any>): any {
  return (
    <Fragment>
      <Head>
        <title>directorio ARMENIA</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="directorio ARMENIA" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta
          property="og:image"
          content="https://directorio-armenia.vercel.app/static/images/da-logo.png"
        />
        <meta property="og:site_name" content="directorio ARMENIA" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          `,
          }}
        />
      </Head>
      {children}
    </Fragment>
  );
}

export default Page;
