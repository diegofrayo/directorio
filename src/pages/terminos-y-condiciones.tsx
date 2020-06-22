import { MainLayout } from '~/components/layout';
import { ContentBox } from '~/components/pages/_shared';

export default function Privacy() {
  return (
    <MainLayout>
      <ContentBox>
        <ContentBox.Title>términos y condiciones</ContentBox.Title>

        <ul className="tw-text-left">
          <li>
            este sitio web <strong>NO</strong> guarda datos personales de sus visitantes
          </li>
          <li>
            <strong>NO</strong> es necesario registrarse para consultar o agregar
            información
          </li>
          <li>
            consultar y agregar información en este sitio web es <strong>GRATIS</strong>
          </li>
          <li>
            este sitio web fue construido <strong>SIN</strong> fines de lucro
          </li>
          <li>
            este sitio web <strong>NO</strong> pertenece a ninguna empresa o institución
            estatal
          </li>
          <li>
            este sitio web fue desarrollado y ahora administrado por un desarrollador de
            software de la ciudad de <strong>ARMENIA</strong>
          </li>
          <li>
            la información añadida por los visitantes es primero
            <strong> CONFIRMADA</strong> y <strong>ACEPTADA</strong> por el desarrollador
            antes de ser publicada
          </li>
          <li>
            este sitio web usa <strong>COOKIES</strong> solo para contar el número de
            visitantes y obtener otras estadísticas, en ningún momento recolecta datos
            personales de sus visitantes
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
