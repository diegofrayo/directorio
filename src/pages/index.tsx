import React from "react";

import { MainLayout } from "~/components/layout";
import { ContentBox, Title } from "~/components/pages";

const Home: React.FunctionComponent = function Home() {
  return (
    <MainLayout>
      <ContentBox>
        <Title>¡bienvenido!</Title>

        <p className="tw-text-justify">
          el principal objetivo de este sitio web es dar a conocer de manera fácil y
          rápida el número de contacto y links de redes sociales de los negocios, pequeñas
          empresas o personas particulares que venden sus productos o servicios a través
          de redes sociales o whatsapp.
        </p>
        <br />
        <p className="tw-text-justify">
          también encontrarás información de sitios como cafés, restaurantes, comidas
          rápidas, pizzerías, licorerías, entre otros.
        </p>
        <br />
        <p className="tw-bg-yellow-100 tw-text-yellow-600 tw-py-2 tw-px-4 tw-text-center tw-border tw-border-yellow-300">
          puedes agregar un negocio a este sitio web <strong>GRATIS</strong> y sin
          necesidad de registrarte.
        </p>
      </ContentBox>
    </MainLayout>
  );
};

export default Home;
