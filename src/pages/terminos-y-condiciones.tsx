import { MainLayout } from '~/components/layout';
import { ContentBox } from '~/components/pages/_shared';

export default function Privacy() {
  return (
    <MainLayout>
      <ContentBox>
        <ContentBox.Title>términos y condiciones</ContentBox.Title>
        <ul className="tw-text-left">
          <li>
            <strong>NO</strong> se guardan datos personales de los visitantes de este
            sitio web
          </li>
          <li>
            <strong>NO</strong> hay formularios de registros, ni contraseñas ni nada de
            esas cosas
          </li>
          <li>
            este sitio web <strong>NO</strong> tiene fines de lucro
          </li>
          <li>
            este sitio web <strong>NO</strong> pertenece a alguna empresa o institución
            estatal
          </li>
          <li>
            este sitio web fue desarrollado y ahora soportado por un desarrollador de
            software de la ciudad de <strong>ARMENIA</strong>
          </li>
          <li>
            consultar y agregar información en este sitio web es <strong>GRATIS</strong>
          </li>
          <li>
            la información añadida por los visitantes es primero
            <strong> CONFIRMADA</strong> y <strong>ACEPTADA</strong> por el administrador
            antes de mostrarse en el sitio web
          </li>
          <li>
            este sitio web usa <strong>COOKIES</strong> solo para contar el número de
            visitantes y poder obtener otras estadísticas, en ningún momento recolecta
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
