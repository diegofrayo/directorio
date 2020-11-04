import React from "react";

import { MainLayout, Page } from "~/components/layout";
import { ContentBox, Title } from "~/components/pages";

const Home: React.FunctionComponent = function Home() {
  return (
    <Page>
      <MainLayout>
        <ContentBox className="tw-text-left">
          <Title className="tw-text-center">¡bienvenido!</Title>

          <p>
            El principal objetivo de este sitio web es dar a conocer de manera fácil y
            rápida la información de contacto de los negocios, pequeñas empresas o
            personas particulares que venden sus productos o servicios a través de redes
            sociales o
            <strong className="tw-underline tw-text-green-700 tw-ml-1">WhatsApp</strong>.
          </p>
          <br />
          <p>
            También encontrarás la información de contacto de sitios como cafés,
            restaurantes, comidas rápidas, pizzerías, licorerías, entre otros.
          </p>
          <br />

          <p className="tw-bg-blue-100 tw-text-blue-600 tw-py-2 tw-px-4 tw-border tw-border-blue-300 tw-text-base tw-text-center">
            Puedes agregar un negocio a este sitio web <strong>GRATIS</strong> y sin
            necesidad de registrarte.
          </p>
        </ContentBox>
      </MainLayout>
    </Page>
  );
};

export default Home;
