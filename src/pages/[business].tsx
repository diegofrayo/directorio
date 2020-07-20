import React from "react";

import { BusinessDetails, ContentBox, Breadcumb, Separator } from "~/components/pages";
import { CATEGORIES } from "~/utils/data";
import { fetchBusinessBySlug } from "~/utils/server";
import { MainLayout, Page } from "~/components/layout";
import { trackEvent } from "~/utils/analytics";
import { useDidMount } from "~/hooks";

function BusinessDetailsPage({ business, metadata, category }: Record<string, any>): any {
  useDidMount(() => {
    if (!business) window.location.href = "/404";
  });

  function track(label) {
    trackEvent({
      category: "Negocio Item - Página",
      label,
    });
  }

  if (!business) return null;

  return (
    <Page metadata={metadata}>
      <MainLayout className="business-details-root">
        <ContentBox>
          <section className="tw-mb-8 tw-text-center">
            <Breadcumb
              items={[
                { text: "Inicio", url: "/" },
                { text: "Categorías", url: "/categorias" },
                { text: category.name, url: `/categorias/${category.slug}` },
                {
                  text: business.name,
                  url: `/categorias/${category.slug}/${business.slug}`,
                },
              ]}
            />
          </section>

          <BusinessDetails item={business} track={track} />
        </ContentBox>
      </MainLayout>

      <style jsx>{`
        :global(.business-details-root) :global(.body) {
          @apply tw-py-5;
        }

        @media (min-width: theme("screens.sm")) {
          :global(.business-details-root) :global(.body) {
            @apply tw-py-8;
          }
        }
      `}</style>
    </Page>
  );
}

export default BusinessDetailsPage;

export async function getServerSideProps(
  ctx: Record<string, any>,
): Promise<Record<string, any>> {
  const business = await fetchBusinessBySlug(ctx.params.business);

  if (!business) {
    return { props: {} };
  }

  const category = CATEGORIES[business.categories[0]];

  return {
    props: {
      metadata: {
        description: business.description,
        image: business.logo,
        title: business.name,
        url: business.slug,
      },
      business,
      category,
    },
  };
}
