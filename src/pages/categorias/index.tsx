import { MainLayout } from '~/components/layout';

export default function Categories() {
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

  return (
    <MainLayout>
      <section className="tw-flex tw-justify-center tw-flex-wrap tw-border tw-border-black tw-p-4">
        {CATEGORIES.map((category, index) => {
          return (
            <article
              key={`category-${index}`}
              className="tw-p-4 tw-my-1 tw-bg-blue-200 tw-text-blue-900 tw-mx-1 tw-inline-flex tw-flex-row tw-cursor-pointer"
            >
              <span className="emoji">{category.icon}</span>
              <span className="tw-mx-2">{category.name}</span>
              <strong>[{category.total}]</strong>
            </article>
          );
        })}
      </section>
    </MainLayout>
  );
}
