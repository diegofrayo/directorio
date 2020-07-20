import React, { Fragment, useState } from "react";
import classnames from "classnames";

import { ContentBox, Title, Breadcumb, BusinessItem } from "~/components/pages";
import { MainLayout, Page } from "~/components/layout";
import { trackEvent } from "~/utils/analytics";
import { useDidMount } from "~/hooks";
import { CATEGORIES, fetchCategoryBusinessList } from "~/utils/data";

function CategoryDetails({ category, metadata }: Record<string, any>): any {
  const [businessList, setBussinessList] = useState(undefined);

  useDidMount(() => {
    fetchData();
  });

  async function fetchData() {
    try {
      const response = await fetchCategoryBusinessList(category.slug);
      setBussinessList(response);
    } catch (e) {
      console.trace(e);
      trackEvent({
        category: "Errores",
        label: `/categorias/${category.slug} => ${e.message}`,
      });
      throw e;
    }
  }

  if (!businessList) return null;

  return (
    <Page metadata={metadata}>
      <MainLayout className="category-details-root">
        <ContentBox>
          <section className="tw-text-center">
            <Breadcumb
              items={[
                { text: "Inicio", url: "/" },
                { text: "Categorías", url: "/categorias" },
                { text: category.name, url: `/categorias/${category.slug}` },
              ]}
            />
          </section>

          <section className="tw-flex tw-flex-no-wrap tw-justify-center tw-items-center tw-my-8">
            <span className="emoji tw-text-2xl tw-mr-4">{category.icon}</span>
            <Title
              className={classnames(
                "tw-text-left tw-inline-block",
                category.name.split(" ").length === 1 && "tw-truncate",
              )}
              tw-classnames-overrides={"Title>tw-mb-6=tw-mb-0"}
            >
              {category.name}
            </Title>
          </section>

          <section>
            {businessList.map((item, index) => {
              return (
                <Fragment key={`item-${index}`}>
                  <BusinessItem item={item} />
                  <hr className="separator tw-my-1" />
                </Fragment>
              );
            })}
          </section>
        </ContentBox>

        <style jsx>{`
          :global(.category-details-root) :global(.body) {
            @apply tw-py-5;
          }

          @media (min-width: theme("screens.sm")) {
            :global(.category-details-root) :global(.body) {
              @apply tw-py-8;
            }
          }

          .separator:last-child {
            border: 0;
          }
        `}</style>
      </MainLayout>
    </Page>
  );
}

export default CategoryDetails;

export async function getStaticPaths(): Promise<Record<string, any>> {
  return {
    paths: Object.values(CATEGORIES).map(category => ({
      params: { category: category.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: Record<string, any>): Promise<Record<string, any>> {
  const category = CATEGORIES[params.category];

  return {
    props: {
      metadata: {
        description: `${category.name} en Armenia`,
        title: category.name,
        url: `categorias/${category.slug}`,
      },
      category,
    },
  };
}
