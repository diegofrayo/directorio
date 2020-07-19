import React from "react";

import { MainLayout, Page } from "~/components/layout";
import { ContentBox, Title } from "~/components/pages";

const Home: React.FunctionComponent = function Home() {
  return (
    <Page>
      <MainLayout>
        <ContentBox>
          <Title>¡bienvenido!</Title>

          <p className="tw-text-left">
            El principal objetivo de este sitio web es dar a conocer de manera fácil y
            rápida la información de los negocios, pequeñas empresas o personas
            particulares que venden sus productos o servicios a través de redes sociales o
            <strong className="tw-underline tw-text-green-700 tw-ml-1">WhatsApp</strong>.
          </p>
          <br />
          <p className="tw-text-left">
            También encontrarás información de sitios como cafés, restaurantes, comidas
            rápidas, pizzerías, licorerías, entre otros.
          </p>
          <br />
          <p className="tw-bg-blue-100 tw-text-xl tw-text-blue-600 tw-py-2 tw-px-4 tw-text-center tw-border tw-border-blue-300">
            Puedes agregar un negocio a este sitio web <strong>GRATIS</strong> y sin
            necesidad de registrarte.
          </p>
        </ContentBox>
      </MainLayout>
    </Page>
  );
};

export default Home;
