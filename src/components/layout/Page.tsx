import React, { Fragment } from "react";
import Head from "next/head";

import { useDidMount, useDocumentTitle } from "~/hooks";
import { trackPageLoaded } from "~/utils/analytics";

function Page({ children, metadata: metadataProp = {} }: Record<string, any>): any {
  const DEFAULT_METADATA = {
    description:
      "El principal objetivo de este sitio web es dar a conocer de manera fácil y rápida la información de los negocios, pequeñas empresas o personas particulares que venden sus productos o servicios a través de redes sociales o WhatsApp",
    image: "https://directorio-armenia.vercel.app/static/images/da-logo.png",
    title: "directorio ARMENIA",
    url: "https://directorio-armenia.vercel.app",
  };
  const metadata = {
    ...DEFAULT_METADATA,
    ...metadataProp,
    url: metadataProp.url
      ? `${DEFAULT_METADATA.url}/${metadataProp.url}`
      : DEFAULT_METADATA.url,
    title: metadataProp.title
      ? `${metadataProp.title} - ${DEFAULT_METADATA.title}`
      : DEFAULT_METADATA.title,
    description: metadataProp.description || DEFAULT_METADATA.description,
  };

  useDocumentTitle(metadata.title);

  useDidMount(() => {
    trackPageLoaded();
  });

  return (
    <Fragment>
      <Head>
        <title>{metadata.title}</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:site_name" content="directorio ARMENIA" />
        <meta
          name="google-site-verification"
          content="Gf-6mROjwXEjbtUUtl2rX5NgzWuzWxgxoKYTaGsqvtw"
        />

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

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </Fragment>
  );
}

export default Page;
