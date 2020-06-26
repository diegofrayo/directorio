import React, { Fragment } from "react";
import Link from "next/link";

import twcss from "~/lib/twcss";

import Header from "./Header";

export default function MainLayout({ children }: Record<string, unknown>): any {
  return (
    <Fragment>
      <Main>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </Main>
      <section id="modals-portal-container" />
    </Fragment>
  );
}

// --- Components ---

const Main = twcss.main`tw-mx-auto tw-max-w-screen-md tw-text-center tw-p-6`;

const Body = twcss.section`tw-mt-6 tw-pb-12`;

function Footer() {
  return (
    <footer className="tw-border-t tw-pt-2 tw-mt-10">
      <ul>
        <li className="tw-inline-block tw-m-2">
          <Link href="/terminos-y-condiciones">
            <a className="tw-font-bold tw-underline">términos y condiciones</a>
          </Link>
        </li>
        <li className="tw-inline-block tw-m-2">
          <Link href="/contacto">
            <a className="tw-font-bold tw-underline">contacto</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
