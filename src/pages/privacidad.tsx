import { MainLayout } from '~/components/layout';
import { ContentBox } from '~/components/pages/_shared';

export default function Privacy() {
  return (
    <MainLayout>
      <ContentBox>
        <ContentBox.Title>privacidad</ContentBox.Title>
        <ul className="tw-text-justify">
          <li>
            <strong>NO</strong> guardo datos personales de los usuarios
          </li>
          <li>
            <strong>NO</strong> hay registros, ni contraseñas ni nada de esas cosas
          </li>
          <li>
            <strong>NO</strong> busco vender la información almacenada en este sitio web
          </li>
          <li>
            consultar y agregar información a este sitio web es <strong>GRATIS</strong>
          </li>
          <li>
            el sitio web usa <strong>COOKIES</strong> solo para contar el número de
            visitantes y recolectar otras estadísticas, en ningún momento se recolectan
            datos personales de los visitantes
          </li>
        </ul>
      </ContentBox>

      <style jsx>{`
        li:before {
          content: '👁️‍🗨️ ';
        }
      `}</style>
    </MainLayout>
  );
}
