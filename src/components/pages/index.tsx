import React, { useState } from "react";

import twcss from "~/lib/twcss";
import { formatPhoneNumber } from "~/utils/utils";
import { Modal } from "~/components/primitive";
import { trackEvent, setDimension } from "~/utils/analytics";

export const ContentBox = twcss.section`tw-border tw-border-black tw-p-4`;

export const Title = twcss.h2`tw-font-bold tw-underline tw-mb-6 tw-text-2xl sm:tw-text-4xl`;

export function BusinessItem({ item, isPreview }: Record<string, any>): any {
  const [showModal, setShowModal] = useState(false);

  const {
    name,
    whatsapp,
    instagram,
    facebook,
    location,
    description,
    address,
    menu,
    slug,
  } = item;
  const logo = item.logo || "/static/images/example-business-logo.png";

  function track(label) {
    setDimension(0, isPreview ? null : slug);
    trackEvent({
      category: `Negocio Item${isPreview ? " - Preview" : ""}`,
      label,
    });
  }

  return (
    <article className="tw-py-2 tw-flex tw-flex-row tw-flex-wrap tw-w-full hover:tw-bg-yellow-200 tw-px-2">
      <section>
        <img
          src={logo}
          className="tw-w-12 tw-h-12 tw-rounded-full tw-shadow-md tw-p-1"
          alt="Business logo"
          onClick={() => {
            track("Logo");
          }}
        />
      </section>
      <section className="tw-flex-1 tw-text-left tw-pl-3 sm:tw-px-4">
        <h2 className="tw-font-bold">{name}</h2>
        {whatsapp && (
          <section>
            <a
              href={`https://api.whatsapp.com/send?phone=57${whatsapp}&text=Hola, obtuve este número a través del sitio web https://directorio-armenia.vercel.app`}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                track("WhatsApp");
              }}
            >
              <img
                src="/static/images/icons/whatsapp.svg"
                className="tw-w-4 tw-h-4 tw-inline-block tw-mr-1"
                alt="WhatsApp icon"
              />
              <span className="tw-text-sm tw-text-gray-600">
                {formatPhoneNumber(whatsapp)}
              </span>
            </a>
          </section>
        )}
      </section>
      <section className="tw-flex tw-flex-row tw-items-center tw-w-full sm:tw-w-auto tw-justify-start sm:tw-justify-end tw-pt-2 sm:tw-pt-0">
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noreferrer"
            className="tw-inline-block tw-mx-1"
            onClick={() => {
              track("Instagram");
            }}
          >
            <img
              src="/static/images/icons/instagram.svg"
              className="tw-w-6 tw-h-6"
              alt="Instagram icon"
            />
          </a>
        )}
        {facebook && (
          <a
            href={`https://facebook.com/${facebook}`}
            target="_blank"
            rel="noreferrer"
            className="tw-inline-block tw-mx-1"
            onClick={() => {
              track("Facebook");
            }}
          >
            <img
              src="/static/images/icons/facebook.svg"
              className="tw-w-6 tw-h-6"
              alt="Facebook icon"
            />
          </a>
        )}
        {location && (
          <a
            href={location}
            target="_blank"
            rel="noreferrer"
            className="tw-inline-block tw-mx-1"
            onClick={() => {
              track("Location");
            }}
          >
            <img
              src="/static/images/icons/google-maps.svg"
              className="tw-w-6 tw-h-6"
              alt="Google maps icon"
            />
          </a>
        )}
        <button
          type="button"
          className="tw-bg-black tw-text-white tw-px-3 tw-py-1 tw-text-sm tw-inline-block tw-ml-auto sm:tw-ml-1 tw-font-bold"
          onClick={e => {
            setShowModal(true);
            track(e.currentTarget.innerText);
          }}
        >
          ver detalles
        </button>
      </section>

      <Modal
        visible={showModal}
        onCloseHandler={() => {
          setShowModal(false);
        }}
      >
        <section className="tw-min-h-400 tw-flex tw-flex-col tw-items-stretch tw-bg-white tw-relative tw-max-w-screen-sm tw-w-500 tw-max-h-full tw-py-6">
          <div className="tw-flex-shrink-0 tw-mb-6 tw-relative tw-text-right tw-px-6">
            <Modal.CloseButton />
          </div>
          <section className="tw-flex tw-flex-col tw-flex-1 tw-items-stretch tw-px-6 tw-overflow-auto">
            <section className="tw-mb-8">
              <img
                src={logo}
                alt="Business logo"
                className="tw-w-32 tw-h-32 tw-rounded-full tw-shadow-md tw-p-1 tw-mx-auto tw-mb-2"
                onClick={() => {
                  track("Detalles Logo");
                }}
              />
              <h2 className="tw-font-bold tw-text-2xl tw-text-center">{name}</h2>
            </section>

            <ContentBox className="tw-flex-1">
              {whatsapp && (
                <a
                  href={`https://api.whatsapp.com/send?phone=57${whatsapp}&text=Hola, obtuve este número a través del sitio web https://directorio-armenia.vercel.app`}
                  target="_blank"
                  rel="noreferrer"
                  className="tw-flex tw-flex-no-wrap tw-justify-start tw-items-center tw-my-0"
                  onClick={() => {
                    track("Detalles WhatsApp");
                  }}
                >
                  <ModalDetailsIcon
                    src="/static/images/icons/whatsapp.svg"
                    alt="WhatsApp icon"
                  />
                  <ModalDetailsItem className="tw-text-green-500">
                    {formatPhoneNumber(whatsapp)}
                  </ModalDetailsItem>
                </a>
              )}

              {instagram && (
                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="tw-flex tw-flex-no-wrap tw-justify-start tw-items-center tw-my-2"
                  onClick={() => {
                    track("Detalles Instagram");
                  }}
                >
                  <ModalDetailsIcon
                    src="/static/images/icons/instagram.svg"
                    alt="Instagram icon"
                  />
                  <ModalDetailsItem className="tw-text-pink-600">
                    {`@${instagram}`}
                  </ModalDetailsItem>
                </a>
              )}

              {facebook && (
                <a
                  href={`https://facebook.com/${facebook}`}
                  target="_blank"
                  rel="noreferrer"
                  className="tw-flex tw-flex-no-wrap tw-justify-start tw-items-center tw-my-2"
                  onClick={() => {
                    track("Detalles Facebook");
                  }}
                >
                  <ModalDetailsIcon
                    src="/static/images/icons/facebook.svg"
                    alt="Facebook icon"
                  />
                  <ModalDetailsItem className="tw-text-blue-700">
                    {`@${facebook}`}
                  </ModalDetailsItem>
                </a>
              )}

              {menu && (
                <a
                  href={menu}
                  target="_blank"
                  rel="noreferrer"
                  className="tw-flex tw-flex-no-wrap tw-justify-start tw-items-center tw-my-2"
                  onClick={() => {
                    track("Detalles Catálogo");
                  }}
                >
                  <ModalDetailsIcon
                    className="tw-bg-yellow-600 tw-rounded-sm"
                    tw-classnames-overrides={{ "tw-h-6": "tw-h-auto" }}
                    is="span"
                  >
                    🗒️
                  </ModalDetailsIcon>
                  <ModalDetailsItem className="tw-text-yellow-600 tw-underline">
                    presiona para ver el catálogo de productos
                  </ModalDetailsItem>
                </a>
              )}

              {location && (
                <a
                  href={location}
                  target="_blank"
                  rel="noreferrer"
                  className="tw-flex tw-flex-no-wrap tw-justify-start tw-items-center tw-my-2"
                  onClick={() => {
                    track("Detalles Location");
                  }}
                >
                  <ModalDetailsIcon
                    src="/static/images/icons/google-maps.svg"
                    alt="Google maps icon"
                  />
                  <ModalDetailsItem className="tw-text-red-600">
                    {location}
                  </ModalDetailsItem>
                </a>
              )}

              {address && (
                <section
                  className="tw-flex tw-flex-no-wrap tw-justify-start tw-items-center tw-my-2"
                  onClick={() => {
                    track("Detalles Dirección");
                  }}
                >
                  <ModalDetailsIcon
                    className="tw-rounded-sm tw-bg-purple-200"
                    tw-classnames-overrides={{ "tw-h-6": "tw-h-auto" }}
                    is="span"
                  >
                    📍
                  </ModalDetailsIcon>
                  <ModalDetailsItem className="tw-text-purple-800">
                    {address}
                  </ModalDetailsItem>
                </section>
              )}

              {description && (
                <pre className="tw-bg-gray-200 tw-p-4 tw-mt-4 tw-text-left tw-whitespace-pre-line tw-text-base">
                  {description}
                </pre>
              )}
            </ContentBox>
          </section>
        </section>
      </Modal>
    </article>
  );
}

const ModalDetailsIcon = twcss.img`tw-w-6 tw-h-6 tw-inline-block tw-mr-3 tw-flex-shrink-0 tw-text-center`;
const ModalDetailsItem = twcss.span`tw-font-bold tw-leading-snug tw-text-left tw-text-sm sm:tw-text-base`;
