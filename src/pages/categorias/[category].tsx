import { Fragment } from 'react';
import Link from 'next/link';

import { MainLayout } from '~/components/layout';
import { ContentBox } from '~/components/pages/_shared';

function CategoryDetails({ category }) {
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
                      <span className="tw-text-sm tw-text-gray-800">(+57) {item.wp}</span>
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

const CATEGORIES = [
  { name: 'comidas', icon: '🥘', total: 9 },
  { name: 'licorerías', icon: '🍺', total: 2 },
  { name: 'servicio de domicilio', icon: '🛵', total: 5 },
  { name: 'ropa', icon: '👗', total: 4 },
  { name: 'comidas', icon: '🥘', total: 9 },
  { name: 'licorerías', icon: '🍺', total: 2 },
  { name: 'servicio de domicilio', icon: '🛵', total: 5 },
  { name: 'ropa', icon: '👗', total: 4 },
].sort((a, b) => (a.name > b.name ? 1 : -1));

const ITEMS = [
  {
    name: 'Salsas artesanales',
    wp: '311 374 9590',
    ig: 'salsasartesanales',
    fb: 'salsasartesanales',
    description: 'Vendemos XXX',
  },
  {
    name: 'Salsas artesanales',
    wp: '311 374 9590',
    ig: 'salsasartesanales',
    fb: '',
    description: 'Vendemos XXX',
  },
  {
    name: 'Salsas artesanales',
    wp: '311 374 9590',
    ig: 'salsasartesanales',
    fb: 'salsasartesanales',
    description: 'Vendemos XXX',
  },
  {
    name: 'Salsas artesanales',
    wp: '311 374 9590',
    ig: 'salsasartesanales',
    fb: '',
    description: 'Vendemos XXX',
  },
  {
    name: 'Salsas artesanales',
    wp: '311 374 9590',
    ig: 'salsasartesanales',
    fb: 'salsasartesanales',
    description: 'Vendemos XXX',
  },
  {
    name: 'Salsas artesanales',
    wp: '311 374 9590',
    ig: 'salsasartesanales',
    fb: '',
    description: 'Vendemos XXX',
  },
  {
    name: 'Salsas artesanales',
    wp: '311 374 9590',
    ig: 'salsasartesanales',
    fb: '',
    description: 'Vendemos XXX',
  },
  {
    name: 'Salsas artesanales',
    wp: '311 374 9590',
    ig: 'salsasartesanales',
    fb: '',
    description: 'Vendemos XXX',
  },
  {
    name: 'Salsas artesanales',
    wp: '311 374 9590',
    ig: 'salsasartesanales',
    fb: '',
    description: 'Vendemos XXX',
  },
  {
    name: 'Salsas artesanales',
    wp: '311 374 9590',
    ig: 'salsasartesanales',
    fb: '',
    description: 'Vendemos XXX',
  },
];

export default CategoryDetails;
