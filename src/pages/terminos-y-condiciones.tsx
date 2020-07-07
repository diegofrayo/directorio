import React from "react";

import { MainLayout } from "~/components/layout";
import { ContentBox, Title } from "~/components/pages";

const TermsAndConditions: React.FunctionComponent = function TermsAndConditions() {
  return (
    <MainLayout>
      <ContentBox>
        <Title>términos y condiciones</Title>

        <ul className="tw-text-left">
          <li>
            consultar y agregar información en este sitio web es <strong>GRATIS</strong> y
            sin necesidad de registro
          </li>
          <li>
            este sitio web fue construido <strong>SIN</strong> fines de lucro
          </li>
          <li>
            este sitio web <strong>NO</strong> pertenece a ninguna empresa o institución
            estatal
          </li>
          <li>
            este sitio web fue construido y ahora administrado por un desarrollador de
            software de la ciudad de <strong>ARMENIA</strong>
          </li>
          <li>
            la información añadida es primero <strong>VALIDADA</strong> y
            <strong> ACEPTADA</strong> por el administrador antes de ser publicada
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
          content: "👁️‍🗨️ ";
        }
      `}</style>
    </MainLayout>
  );
};

export default TermsAndConditions;
