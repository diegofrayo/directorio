import React from "react";

import { CATEGORIES } from "~/utils/data";
import { ContentBox, Title } from "~/components/pages";

import { MainLayout, Page } from "~/components/layout";
import { trackEvent } from "~/utils/analytics";

function Categories(): any {
  return (
    <Page
      metadata={{
        description:
          "Directorio de restaurantes, domicilios y emprendimientos en Armenia",
        title: "categorías",
        url: "categorias",
      }}
    >
      <MainLayout>
        <ContentBox>
          <Title>categorías</Title>

          <section className="tw-flex tw-flex-row tw-flex-wrap tw-justify-between">
            {Object.values(CATEGORIES).map((category, index) => {
              return (
                <article
                  key={`category-${index}`}
                  className="category tw-mb-4 sm:tw-mb-6 tw-border tw-mx-0 tw-cursor-pointer hover:tw-bg-gray-200"
                >
                  <a
                    href={`/categorias/${category.slug}`}
                    className="tw-block tw-p-4 tw-w-full tw-h-full tw-flex tw-flex-row tw-items-center"
                    onClick={() => {
                      trackEvent({ category: "Categoría Item", label: category.name });
                    }}
                  >
                    <span className="emoji tw-text-3xl">{category.icon}</span>
                    <span className="tw-ml-3 tw-mr-4 tw-flex-1 tw-text-left tw-lowercase">
                      {category.name}
                    </span>
                    <strong>[{category.total}]</strong>
                  </a>
                </article>
              );
            })}
          </section>
        </ContentBox>

        <style jsx>{`
          .category {
            width: 100%;
          }

          @media (min-width: 640px) {
            .category {
              width: 48%;
            }
          }
        `}</style>
      </MainLayout>
    </Page>
  );
}

export default Categories;
