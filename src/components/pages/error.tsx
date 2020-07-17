import React, { Fragment } from "react";

import twcss from "~/lib/twcss";
import { Page, MainLayout } from "~/components/layout";

import { ContentBox } from "./index";

function ErrorPage({ statusCode }: Record<string, unknown>): any {
  return (
    <Page>
      <MainLayout>
        <ContentBox className="tw-pt-8 tw-pb-10">
          {statusCode === 404 ? (
            <Fragment>
              <Icon className="emoji">🙉</Icon>
              <Message>
                Lo sentimos, la página a la que intentas ingresar no existe
              </Message>
            </Fragment>
          ) : (
            <Fragment>
              <Icon className="emoji">🙈</Icon>
              <Message>
                Lo sentimos, hubo un error, lo trataremos de solucionar lo más pronto
                posible
              </Message>
            </Fragment>
          )}
        </ContentBox>
      </MainLayout>
    </Page>
  );
}

export default ErrorPage;

// --- Components ---

const Icon = twcss.span`tw-text-5xl`;
const Message = twcss.p`tw-text-base tw-text-red-700`;
