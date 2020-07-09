import React from "react";
import Link from "next/link";

import { BusinessDetails, ContentBox } from "~/components/pages";

import { MainLayout, Page } from "~/components/layout";
import { trackEvent } from "~/utils/analytics";
import { fetchBusinessBySlug } from "~/utils/server";

function BusinessDetailsPage({ business, metadata }: Record<string, any>): any {
  function track(label) {
    trackEvent({
      category: "Negocio Item - Página",
      label,
    });
  }

  return (
    <Page metadata={metadata}>
      <MainLayout>
        <ContentBox>
          <section className="tw-text-left tw-mb-4">
            <Link href={`/categorias/${business.categories[0]}`} passHref>
              <a
                className="tw-text-sm tw-text-gray-800"
                onClick={() => {
                  trackEvent({
                    category: "/negocio",
                    label: "ver listado de negocios similares",
                  });
                }}
              >
                <span>◀️</span>
                <span className="tw-ml-1 tw-underline">
                  ver listado de negocios similares
                </span>
              </a>
            </Link>
          </section>

          <BusinessDetails item={business} from="business-details-page" track={track} />
        </ContentBox>
      </MainLayout>
    </Page>
  );
}

export default BusinessDetailsPage;

export async function getServerSideProps(
  ctx: Record<string, any>,
): Promise<Record<string, any>> {
  const business = await fetchBusinessBySlug(ctx.params.business);

  return {
    props: {
      metadata: {
        description: business.description,
        image: business.logo,
        title: business.name,
        url: business.slug,
      },
      business,
    },
  };
}
