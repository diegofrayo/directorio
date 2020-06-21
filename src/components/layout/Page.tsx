import { Fragment } from 'react';
import Head from 'next/head';

const Page = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Directorio Armenia</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </Fragment>
  );
};

export default Page;
