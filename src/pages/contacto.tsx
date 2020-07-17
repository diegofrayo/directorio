import React from "react";

import { MainLayout, Page } from "~/components/layout";
import { ContentBox, Title } from "~/components/pages";

const Contact: React.FunctionComponent = function Contact() {
  return (
    <Page metadata={{ title: "contacto" }}>
      <MainLayout>
        <ContentBox>
          <Title>contacto</Title>

          <section>
            <p className="tw-text-left">
              Si tiene alguna duda, sugerencia, idea de mejora o quiere modificar la
              información de su negocio, puedes contactarme mediante{" "}
              <a
                href={`https://api.whatsapp.com/send?phone=573113728898&text=Hola, obtuve este número a través del sitio web https://directorio-armenia.vercel.app`}
                target="_blank"
                rel="noreferrer"
                className="tw-font-bold tw-underline tw-text-green-700"
              >
                WhatsApp
              </a>
            </p>
          </section>
        </ContentBox>
      </MainLayout>
    </Page>
  );
};

export default Contact;
