import Link from 'next/link';

export default function MainLayout({ children }) {
  return (
    <main className="tw-mx-auto tw-max-w-screen-md tw-text-center tw-p-6">
      <header>
        <h1 className="tw-inline-block tw-mx-auto">
          <span className="tw-block tw-text-3xl tw-leading-none tw-font-hairline">
            directorio
          </span>
          <strong className="tw-block tw-text-xl tw-text-right">ARMENIA</strong>
        </h1>
        <nav className="tw-mt-8">
          <ul className="tw-block sm:tw-inline-flex tw-w-full">
            <li className="tw-flex-1 tw-text-gray-800 tw-bg-gray-200 tw-font-bold tw-cursor-pointer tw-my-1 sm:tw-my-0">
              <Link href="/">
                <a className="tw-block tw-p-2">inicio</a>
              </Link>
            </li>
            <li className="tw-flex-1 tw-text-gray-800 tw-bg-gray-200 tw-font-bold tw-cursor-pointer tw-my-1 sm:tw-my-0 tw-mx-0 sm:tw-mx-2">
              <Link href="categorias">
                <a className="tw-block tw-p-2">categorías</a>
              </Link>
            </li>
            <li className="tw-flex-1 tw-text-gray-800 tw-bg-gray-200 tw-font-bold tw-cursor-pointer tw-my-1 sm:tw-my-0 tw-p-2">
              agrega un negocio!
            </li>
          </ul>
        </nav>
      </header>

      <section className="tw-py-12">{children}</section>
    </main>
  );
}
