import { Fragment } from 'react';
import Link from 'next/link';

import { MainLayout } from '~/components/layout';
import { ContentBox } from '~/components/pages/_shared';
import { createArray } from '~/utils/utils';

function CategoryDetails({ category }) {
  const ITEMS = createArray(7).map(index => {
    return {
      name: 'El nombre de tu negocio...',
      wp: '312 000 0000',
      ig: 'nombre_de_tu_negocio',
      fb: index % 3 === 0 ? 'nombre_de_tu_negocio' : '',
      description: 'Descripcion de tu negocio',
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

        <ContentBox.Title>{category}</ContentBox.Title>

        <section>
          {ITEMS.map((item, index) => {
            return (
              <Fragment key={`item-${index}`}>
                <article className="site tw-py-2 tw-flex tw-flex-row tw-flex-wrap tw-cursor-pointer tw-w-full hover:tw-bg-yellow-200 tw-px-2">
                  <section>
                    <img
                      src="/vercel.svg"
                      className="tw-w-12 tw-h-12 tw-rounded-full tw-shadow-md tw-p-1"
                      alt="Profile picture"
                    />
                  </section>
                  <section className="tw-flex-1 tw-text-left tw-pl-3 sm:tw-px-6">
                    <h2 className="tw-font-bold">{item.name}</h2>
                    <section>
                      <img
                        src="/static/images/icons/wp.png"
                        className="tw-w-4 tw-h-4 tw-inline-block tw-mr-2"
                        alt="WhatsApp icon"
                      />
                      <span className="tw-text-sm tw-text-gray-800">{item.wp}</span>
                    </section>
                  </section>
                  <section className="tw-flex tw-flex-row tw-items-center tw-w-full sm:tw-w-auto tw-justify-end tw-pt-2 sm:tw-pt-0">
                    {item.ig && (
                      <a
                        href={`https://instagram.com/${item.ig}`}
                        target="_blank"
                        className="tw-inline-block tw-mx-1"
                      >
                        <img
                          src="/static/images/icons/ig.png"
                          className="tw-w-6 tw-h-6"
                          alt="Instagram icon"
                        />
                      </a>
                    )}
                    {item.fb && (
                      <a
                        href={`https://facebook.com/${item.fb}`}
                        target="_blank"
                        className="tw-inline-block tw-mx-1"
                      >
                        <img
                          src="/static/images/icons/fb.png"
                          className="tw-w-6 tw-h-6"
                          alt="Facebook icon"
                        />
                      </a>
                    )}
                  </section>
                </article>
                <div className="separator tw-my-1 tw-border-b" />
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
