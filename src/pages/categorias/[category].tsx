import { Fragment } from "react";
import Link from "next/link";

import { MainLayout } from "~/components/layout";
import { ContentBox, Title, BusinessItem } from "~/components/pages";
import { createArray } from "~/utils/utils";

function CategoryDetails({ category }) {
  const ITEMS = createArray(7).map(index => {
    return {
      name: "El nombre de tu negocio...",
      whatsapp: "311 372 8898",
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

        <Title>{category}</Title>

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
}

CategoryDetails.getInitialProps = ({ query }) => {
  return { category: query.category };
};

export default CategoryDetails;
