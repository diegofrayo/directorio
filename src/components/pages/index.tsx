import { formatPhoneNumber } from "~/utils/utils";

export function ContentBox({ children, className = "", classNameOverrides = ["", ""] }) {
  return (
    <section
      className={`tw-border tw-border-black tw-p-4 ${className}`
        .trim()
        .replace(classNameOverrides[0], classNameOverrides[1])}
    >
      {children}
    </section>
  );
}

export function Title({ children, is: Element = "h2" }: any) {
  return (
    <Element className="tw-font-bold tw-underline tw-mb-6 tw-text-3xl sm:text-5xl">
      {children}
    </Element>
  );
}

export function BusinessItem({ item }) {
  return (
    <article className="site tw-py-2 tw-flex tw-flex-row tw-flex-wrap tw-w-full hover:tw-bg-yellow-200 tw-px-2">
      <section>
        {/*
          <img
            src="/vercel.svg"
            className="tw-w-12 tw-h-12 tw-rounded-full tw-shadow-md tw-p-1"
            alt="Profile picture"
          />
        */}
        <span className="tw-w-12 tw-h-12 tw-block tw-mr-1 tw-bg-gray-600 tw-rounded-full tw-shadow-md tw-p-1" />
      </section>
      <section className="tw-flex-1 tw-text-left tw-pl-3 sm:tw-px-4">
        <h2 className="tw-font-bold">{item.name}</h2>
        {item.whatsapp && (
          <section>
            <a
              href={`https://api.whatsapp.com/send?phone=57${item.whatsapp}&text=Hola, obtuve este número a través del sitio web https://directorio-armenia.vercel.app`}
              target="_blank"
            >
              <img
                src="/static/images/icons/wp.png"
                className="tw-w-4 tw-h-4 tw-inline-block tw-mr-1"
                alt="WhatsApp icon"
              />
              <span className="tw-text-sm tw-text-gray-600">
                {formatPhoneNumber(item.whatsapp)}
              </span>
            </a>
          </section>
        )}
      </section>
      <section className="tw-flex tw-flex-row tw-items-center tw-w-full sm:tw-w-auto tw-justify-end tw-pt-2 sm:tw-pt-0">
        {item.instagram && (
          <a
            href={`https://instagram.com/${item.instagram}`}
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
        {item.facebook && (
          <a
            href={`https://facebook.com/${item.facebook}`}
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
  );
}
