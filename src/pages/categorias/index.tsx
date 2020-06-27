import React from "react";
import Link from "next/link";

import { MainLayout } from "~/components/layout";
import { ContentBox, Title } from "~/components/pages";
import { CATEGORIES } from "~/utils/data";

const Categories: React.FunctionComponent = function Categories() {
  return (
    <MainLayout>
      <ContentBox>
        <Title>categorías</Title>

        <section className="tw-flex tw-flex-row tw-flex-wrap tw-justify-between">
          {CATEGORIES.map((category, index) => {
            return (
              <article
                key={`category-${index}`}
                className="category tw-mb-2 tw-border tw-mx-0 sm:tw-mx-1 tw-cursor-pointer hover:tw-bg-yellow-200"
              >
                <Link href={`/categorias/${category.slug}`}>
                  <a className="tw-block tw-p-4 tw-w-full tw-flex tw-flex-row tw-items-center">
                    <span className="emoji tw-text-3xl">{category.icon}</span>
                    <span className="tw-ml-3 tw-mr-4 tw-flex-1 tw-text-left">
                      {category.name}
                    </span>
                    <strong>[{category.total}]</strong>
                  </a>
                </Link>
              </article>
            );
          })}
        </section>

        <p className="tw-mt-2 tw-text-right tw-text-gray-600 tw-text-sm tw-italic tw-mx-0 sm:tw-mx-1">
          (pronto se agregarán mas categorías)
        </p>
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
  );
};

export default Categories;
