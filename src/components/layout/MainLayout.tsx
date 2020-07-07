import React, { Fragment } from "react";
import Link from "next/link";

import twcss from "~/lib/twcss";
import useDocumentTitle from "~/hooks/useDocumentTitle";
import { trackEvent } from "~/utils/analytics";

import Header from "./Header";

export default function MainLayout({
  children,
  title,
}: Record<string, unknown | string>): any {
  useDocumentTitle(title);

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
  function trackLinks(e) {
    trackEvent({ category: "Footer", label: e.currentTarget.innerText });
  }

  return (
    <footer className="tw-border-t tw-pt-2 tw-mt-10">
      <ul>
        <li className="tw-inline-block tw-m-2">
          <Link href="/terminos-y-condiciones" passHref>
            <a className="tw-font-bold tw-underline" onClick={trackLinks}>
              términos y condiciones
            </a>
          </Link>
        </li>
        <li className="tw-inline-block tw-m-2">
          <Link href="/contacto" passHref>
            <a className="tw-font-bold tw-underline" onClick={trackLinks}>
              contacto
            </a>
          </Link>
        </li>
      </ul>

      <p
        className="tw-text-sm tw-mt-8 tw-text-gray-700"
        onClick={() => {
          trackEvent({ category: "Footer", label: "Hecho con amor" });
        }}
      >
        hecho con <span className="emoji">❤️</span> en{" "}
        <a
          href="https://goo.gl/maps/sMdcnQHsSG76d73A9"
          target="_blank"
          rel="noreferrer"
          className="tw-font-bold tw-underline"
        >
          armenia, quindío
        </a>
      </p>
    </footer>
  );
}
