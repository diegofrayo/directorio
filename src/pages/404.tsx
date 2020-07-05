import React from "react";

import { Page, MainLayout } from "~/components/layout";
import { ContentBox } from "~/components/pages";

function Page404(): any {
  return (
    <Page>
      <MainLayout>
        <ContentBox className="tw-pt-8 tw-pb-10">
          <span className="tw-text-5xl">🚫</span>
          <p>La página a la que intentas ingresar no existe</p>
        </ContentBox>
      </MainLayout>
    </Page>
  );
}

export default Page404;
