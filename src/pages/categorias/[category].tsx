import React, { Fragment, useState } from "react";
import Link from "next/link";

import { ContentBox, Title, BusinessItem } from "~/components/pages";

import { isDevelopmentEnvironment } from "~/utils/utils";
import { MainLayout, Page } from "~/components/layout";
import { trackEvent } from "~/utils/analytics";
import { useDidMount } from "~/hooks";
import {
  CATEGORIES,
  fetchCategoryBusinessList,
  generateCategoryBusinessList,
} from "~/utils/data";

function CategoryDetails({ category, metadata }: Record<string, any>): any {
  const [businessList, setBussinessList] = useState(undefined);

  useDidMount(() => {
    fetchData();
  });

  async function fetchData() {
    try {
      if (isDevelopmentEnvironment("FIREBASE")) {
        setBussinessList(generateCategoryBusinessList());
      } else {
        const response = await fetchCategoryBusinessList(category.slug);
        setBussinessList(response);
      }
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
      <MainLayout>
        <ContentBox>
          <section className="tw-text-left tw-mb-4">
            <Link href="/categorias" passHref>
              <a
                className="tw-text-sm tw-text-gray-800"
                onClick={() => {
                  trackEvent({
                    category: "/categorias",
                    label: "volver al listado de categorías",
                  });
                }}
              >
                <span>◀️</span>
                <span className="tw-ml-1 tw-underline">
                  volver al listado de categorías
                </span>
              </a>
            </Link>
          </section>

          <section className="tw-flex tw-flex-no-wrap tw-justify-center tw-items-center tw-mb-6">
            <span className="emoji tw-text-2xl tw-mr-2">{category.icon}</span>
            <Title
              className="tw-text-left tw-inline-block"
              tw-classnames-overrides={{ "tw-mb-6": "tw-mb-0" }}
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
          .separator:last-child {
            border: 0;
          }
        `}</style>
      </MainLayout>
    </Page>
  );
}

export default CategoryDetails;

export async function getServerSideProps(
  ctx: Record<string, any>,
): Promise<Record<string, any>> {
  const category = CATEGORIES[ctx.query.category];

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
