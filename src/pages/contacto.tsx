import React from "react";

import { MainLayout } from "~/components/layout";
import { ContentBox, Title } from "~/components/pages";

const Contact: React.FunctionComponent = function Contact() {
  return (
    <MainLayout>
      <ContentBox>
        <Title>contacto</Title>

        <section>
          <p className="tw-text-left">
            si tiene alguna duda, sugerencia, idea de mejora o quiere modificar la
            información de su negocio, puede contactarme mediante
            <strong className="tw-text-green-700"> whatsapp</strong> dando click{" "}
            <a
              href={`https://api.whatsapp.com/send?phone=573113728898&text=Hola, obtuve este número a través del sitio web https://directorio-armenia.vercel.app`}
              target="_blank"
              rel="noreferrer"
              className="tw-font-bold tw-underline"
            >
              AQUÍ
            </a>
          </p>
        </section>
      </ContentBox>
    </MainLayout>
  );
};

export default Contact;
