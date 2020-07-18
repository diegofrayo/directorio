import React from "react";

import { MainLayout, Page } from "~/components/layout";
import { ContentBox, Title } from "~/components/pages";

const TermsAndConditions: React.FunctionComponent = function TermsAndConditions() {
  return (
    <Page metadata={{ title: "términos y condiciones" }}>
      <MainLayout>
        <ContentBox>
          <Title>términos y condiciones</Title>

          <ul className="tw-text-left">
            <li>
              Consultar y agregar información en este sitio web es <strong>GRATIS</strong>{" "}
              y sin necesidad de registro
            </li>
            <li>
              Este sitio web fue construido <strong>SIN</strong> fines de lucro
            </li>
            <li>
              La información añadida es primero <strong>VALIDADA</strong> y
              <strong> ACEPTADA</strong> por el administrador antes de ser publicada
            </li>
            <li>
              Este sitio web usa <strong>COOKIES</strong> solo para contar el número de
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
    </Page>
  );
};

export default TermsAndConditions;
