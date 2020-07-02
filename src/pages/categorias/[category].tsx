import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { ContentBox, Title, BusinessItem } from "~/components/pages";
import { isDevelopmentEnvironment } from "~/utils/utils";
import { MainLayout } from "~/components/layout";
import { trackEvent } from "~/utils/analytics";
import {
  CATEGORIES,
  fetchCategoryBusinessList,
  generateCategoryBusinessList,
} from "~/utils/data";

const CategoryDetails: React.FunctionComponent = function CategoryDetails() {
  const router = useRouter();

  const [businessList, setBussinessList] = useState(undefined);
  const [category, setCategory] = useState(undefined);

  useEffect(() => {
    if (!router.query.category) return;

    setCategory(CATEGORIES.find(item => item.slug === router.query.category));
    fetchData();
  }, [router.query]);

  async function fetchData() {
    try {
      if (isDevelopmentEnvironment()) {
        setBussinessList(generateCategoryBusinessList());
      } else {
        const response = await fetchCategoryBusinessList(router.query.category);
        setBussinessList(response);
      }
    } catch (e) {
      console.trace(e);
      trackEvent({ category: "Errores", label: `/categorias => ${e.message}` });
    }
  }

  if (!businessList || !category) return null;

  return (
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
  );
};

export default CategoryDetails;
