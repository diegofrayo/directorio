import React from "react";

import { MainLayout } from "~/components/layout";
import { ContentBox, Title } from "~/components/pages";

const Contact: React.FunctionComponent = function Contact() {
  return (
    <MainLayout>
      <ContentBox>
        <Title>contacto</Title>

        <section className="tw-text-left">
          <p>
            si tiene alguna duda, reclamo, sugerencia o idea de mejora puede contactarme
            en
            <a
              href="mailto:dev.apps.armenia@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="tw-mx-1 tw-font-bold tw-underline tw-text-yellow-600"
            >
              dev.apps.armenia@gmail.com
            </a>
          </p>
        </section>
      </ContentBox>
    </MainLayout>
  );
};

export default Contact;
