import React, { Fragment } from "react";
import Link from "next/link";

import twcss from "~/lib/twcss";
import { trackEvent } from "~/utils/analytics";

import Header from "./Header";

export default function MainLayout({ children }: Record<string, unknown>): any {
  return (
    <Fragment>
      <Main className="main">
        <Header />
        <Body>{children}</Body>
        <Footer />
      </Main>
      <section id="modals-portal-container" />

      <style jsx>
        {`
          :global(.main) {
            box-shadow: 0px 0px 3px 2px #000;
          }
        `}
      </style>
    </Fragment>
  );
}

// --- Components ---

const Main = twcss.main`tw-mx-auto tw-max-w-screen-md tw-text-center tw-bg-white tw-shadow-md tw-min-h-full tw-flex tw-flex-col`;

const Body = twcss.section`tw-px-6 tw-py-8 tw-flex tw-flex-1 tw-flex-col tw-items-stretch`;

function Footer() {
  function trackLinks(e) {
    trackEvent({ category: "Footer", label: e.currentTarget.innerText });
  }

  return (
    <footer className="tw-bg-gray-100 tw-border-t tw-py-6 tw-flex-shrink-0">
      <ul>
        <li className="tw-inline-block tw-mx-2 tw-my-1 sm:tw-my-0">
          <Link href="/terminos-y-condiciones" passHref>
            <a className="tw-font-bold tw-uppercase" onClick={trackLinks}>
              Términos y condiciones
            </a>
          </Link>
        </li>
        <li className="tw-inline-block tw-mx-2 tw-my-1 sm:tw-my-0">
          <Link href="/contacto" passHref>
            <a className="tw-font-bold tw-uppercase" onClick={trackLinks}>
              Contacto
            </a>
          </Link>
        </li>
      </ul>

      <p
        className="tw-text-sm tw-mt-6 tw-text-gray-700"
        onClick={() => {
          trackEvent({ category: "Footer", label: "Hecho con amor" });
        }}
      >
        Hecho con <span className="emoji">❤️</span> en{" "}
        <a
          href="https://goo.gl/maps/sMdcnQHsSG76d73A9"
          target="_blank"
          rel="noreferrer"
          className="tw-font-bold tw-underline"
        >
          Armenia, Quindío
        </a>
      </p>
    </footer>
  );
}
