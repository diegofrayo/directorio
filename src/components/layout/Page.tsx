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

        <meta property="og:type" content="article" />
        <meta property="og:title" content="directorio ARMENIA" />
        <meta
          property="og:description"
          content="el objetivo de este sitio web es dar a conocer de manera fácil y rápida el número de contacto y links de redes sociales de los negocios, pequeñas empresas o personas particulares que venden sus productos o servicios a través de redes sociales o whatsapp."
        />
        <meta
          property="og:image"
          content="https://directorio-armenia.vercel.app/static/images/da-logo.png"
        />
        <meta property="og:url" content="https://directorio-armenia.vercel.app" />
        <meta property="og:site_name" content="directorio ARMENIA" />
      </Head>

      {children}
    </Fragment>
  );
}

export default Page;
