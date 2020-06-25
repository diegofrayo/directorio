import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { MainLayout } from "~/components/layout";
import { ContentBox, Title, BusinessItem } from "~/components/pages";
import { createArray } from "~/utils/utils";

const CategoryDetails: React.FunctionComponent = function CategoryDetails() {
  const { query } = useRouter();

  const ITEMS = createArray(7).map(index => {
    return {
      name: "El nombre de tu negocio...",
      whatsapp: "3113728898",
      instagram: "nombre_de_tu_negocio",
      facebook: index % 3 === 0 ? "nombre_de_tu_negocio" : "",
      description: "Descripcion de tu negocio",
    };
  });

  return (
    <MainLayout>
      <ContentBox>
        <section className="tw-text-left tw-mb-4">
          <Link href="/categorias">
            <a className="tw-text-sm tw-text-gray-800">
              <span>◀️</span>
              <span className="tw-ml-1 tw-underline">
                volver al listado de categorías
              </span>
            </a>
          </Link>
        </section>

        <Title>{query.category}</Title>

        <section>
          {ITEMS.map((item, index) => {
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
