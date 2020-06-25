import React from "react";

import { MainLayout } from "~/components/layout";
import { ContentBox, Title } from "~/components/pages";

const Home: React.FunctionComponent = function Home() {
  return (
    <MainLayout>
      <ContentBox>
        <Title>¡bienvenido!</Title>

        <p className="tw-text-justify">
          el objetivo de este sitio web es dar a conocer de manera fácil y rápida el
          número de contacto y links de redes sociales de los negocios, pequeñas empresas
          o personas particulares que venden sus productos o servicios a través de redes
          sociales o whatsapp
        </p>
      </ContentBox>
    </MainLayout>
  );
};

export default Home;
