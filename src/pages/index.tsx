import { MainLayout } from '~/components/layout';
import { ContentBox } from '~/components/pages/_shared';

export default function Home() {
  return (
    <MainLayout>
      <ContentBox>
        <ContentBox.Title>bienvenido!</ContentBox.Title>
        <p className="tw-text-justify">
          el objetivo de este sitio web es dar a conocer emprendimientos y pequeños
          negocios de la ciudad de armenia, desde tiendas de ropa, puestos de comida
          callejera o productos que se vendan principalmente a través de redes sociales o
          whatsapp
        </p>
      </ContentBox>
    </MainLayout>
  );
}
