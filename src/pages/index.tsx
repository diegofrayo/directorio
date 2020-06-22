import { MainLayout } from '~/components/layout';
import { ContentBox } from '~/components/pages/_shared';

export default function Home() {
  return (
    <MainLayout>
      <ContentBox>
        <ContentBox.Title>¡bienvenido!</ContentBox.Title>

        <p className="tw-text-justify">
          el objetivo de este sitio web es dar a conocer de manera fácil y rápida el
          número de contacto y links de redes sociales de los negocios, pequeñas empresas
          o personas particulares que venden sus productos o servicios a través de redes
          sociales o whatsapp
        </p>
      </ContentBox>
    </MainLayout>
  );
}
