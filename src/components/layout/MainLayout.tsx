import Link from 'next/link';

export default function MainLayout({ children }) {
  return (
    <main className="tw-mx-auto tw-max-w-screen-md tw-text-center tw-p-6">
      <header>
        <h1 className="tw-inline-block tw-mx-auto tw-mb-8">
          <Link href="/">
            <a>
              <span className="tw-block tw-text-3xl tw-leading-none tw-font-hairline">
                directorio
              </span>
              <strong className="tw-block tw-text-xl tw-text-right">ARMENIA</strong>
            </a>
          </Link>
        </h1>
        <nav>
          <ul className="tw-block sm:tw-inline-flex tw-w-full">
            <li className="tw-flex-1 tw-text-gray-100 tw-bg-gray-900 hover:tw-bg-gray-800 tw-font-bold tw-cursor-pointer tw-my-1 sm:tw-my-0 hover:tw-underline">
              <Link href="/">
                <a className="tw-block tw-p-2">inicio</a>
              </Link>
            </li>
            <li className="tw-flex-1 tw-text-gray-100 tw-bg-gray-900 hover:tw-bg-gray-800 tw-font-bold tw-cursor-pointer tw-my-1 sm:tw-my-0 hover:tw-underline tw-mx-0 sm:tw-mx-2">
              <Link href="/categorias">
                <a className="tw-block tw-p-2">categorías</a>
              </Link>
            </li>
            <li className="tw-flex-1 tw-text-yellow-400 tw-bg-gray-900 hover:tw-bg-gray-800 tw-font-bold tw-cursor-pointer tw-my-1 sm:tw-my-0 tw-p-2 tw-underline">
              agrega un negocio!
            </li>
          </ul>
        </nav>
      </header>

      <section className="tw-mt-6 tw-pb-12">{children}</section>

      <footer className="tw-border-t tw-pt-2 tw-mt-10">
        <ul>
          <li className="tw-inline-block tw-m-2">
            <Link href="/terminos-y-condiciones">
              <a className="tw-font-bold tw-underline">términos y condiciones</a>
            </Link>
          </li>
          <li className="tw-inline-block tw-m-2">
            <Link href="/contacto">
              <a className="tw-font-bold tw-underline">contacto</a>
            </Link>
          </li>
        </ul>
      </footer>
    </main>
  );
}
