import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { Formik, Field, ErrorMessage } from "formik";
import classnames from "classnames";

import tsh from "~/lib/tsh";
import twcss from "~/lib/twcss";
import { ContentBox, Title, BusinessItem, Separator } from "~/components/pages";
import { Modal } from "~/components/primitive";
import { trackEvent, trackModal } from "~/utils/analytics";
import { useWindowResize } from "~/hooks";

function Header(): any {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  useWindowResize(() => {
    if (window.innerWidth < 640) {
      setIsMenuCollapsed(true);
    } else {
      setIsMenuCollapsed(false);
    }
  });

  function handleAddBussinessClick(e) {
    setIsModalVisible(true);
    trackMenuItems(e);
    trackModal("agregar-negocio");
  }

  function handleCollapseMenu() {
    setIsMenuCollapsed(cv => !cv);
  }

  function trackMenuItems(e) {
    trackEvent({ category: "Menú Principal", label: e.currentTarget.innerText });
  }

  return (
    <header className="tw-bg-yellow-300 tw-border-b tw-border-yellow-400 tw-flex-shrink-0">
      <section className="tw-max-w-screen-md tw-mx-auto tw-py-4 tw-px-6">
        <section className="tw-flex tw-justify-between sm:tw-justify-center">
          <Logo />
          <button
            className="tw-inline-block sm:tw-hidden tw-p-2"
            onClick={handleCollapseMenu}
          >
            <span className="tw-border-b-2 tw-border-yellow-600 tw-block tw-w-8 tw-my-2" />
            <span className="tw-border-b-2 tw-border-yellow-600 tw-block tw-w-8 tw-my-2" />
            <span className="tw-border-b-2 tw-border-yellow-600 tw-block tw-w-8 tw-my-2" />
          </button>
        </section>

        <nav
          className={classnames("tw-mt-6", isMenuCollapsed ? "tw-hidden" : "tw-block")}
        >
          <Menu>
            <MenuItem tw-variant="default">
              <Link href="/" passHref>
                <MenuItemLink onClick={trackMenuItems}>
                  <MenuItemLinkText>inicio</MenuItemLinkText>
                </MenuItemLink>
              </Link>
            </MenuItem>
            <MenuItem tw-variant="default">
              <Link href="/categorias" passHref>
                <MenuItemLink onClick={trackMenuItems}>
                  <MenuItemLinkText>categorías</MenuItemLinkText>
                </MenuItemLink>
              </Link>
            </MenuItem>
            <MenuItem tw-variant="add-business">
              <MenuItemLink onClick={handleAddBussinessClick}>
                <MenuItemLinkText className="tw-border-2 tw-px-2">
                  ¡agrega un negocio!
                </MenuItemLinkText>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </nav>

        <CreateBusinessModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </section>
    </header>
  );
}

export default Header;

// --- Components ---

function Logo() {
  return (
    <h1 className="tw-inline-block tw-flex-shrink-0">
      <Link href="/">
        <a
          onClick={() => {
            trackEvent({ category: "Header", label: "Logo" });
          }}
        >
          <span className="tw-block tw-text-3xl tw-leading-none tw-font-hairline">
            directorio
          </span>
          <strong className="tw-block tw-text-xl tw-text-right">ARMENIA</strong>
        </a>
      </Link>
    </h1>
  );
}

const Menu = twcss.ul`tw-block sm:tw-inline-flex tw-w-full`;
const MenuItem = twcss.li({
  __base:
    "tw-flex-shrink-0 tw-cursor-pointer tw-py-1 sm:tw-py-0 tw-uppercase tw-font-bold tw-text-black tw-text-base sm:tw-text-xl hover:tw-opacity-50 tw-my-2 sm:tw-my-0",
  default: "tw-mr-0 sm:tw-mr-8",
  "add-business": "tw-flex-grow-1 tw-text-center sm:tw-text-right",
});
const MenuItemLink = twcss.a`tw-block tw-w-full`;
const MenuItemLinkText = twcss.span`tw-inline-block tw-border-b-2 tw-border-dashed tw-border-black`;

function CreateBusinessModal({ isModalVisible, setIsModalVisible }) {
  const [portal, setPortal] = useState(undefined);

  useEffect(() => {
    setPortal(document.getElementById("modals-portal-container"));
  }, []);

  if (!portal) return null;

  return ReactDOM.createPortal(
    <Modal
      visible={isModalVisible}
      onCloseHandler={() => {
        setIsModalVisible(false);
      }}
    >
      <Formik
        initialValues={{
          name: "",
          whatsapp: "",
          instagram: "",
          facebook: "",
          address: "",
          location: "",
          description: "",
        }}
        validate={values => {
          const errors: Record<string, string> = {};

          if (values.name.length < 2) {
            errors.name = "El nombre debe tener al menos 2 carácteres";
          }

          if (
            (values.whatsapp.trim().length !== 0 && values.whatsapp.length < 10) ||
            !/^[0-9]*$/.test(values.whatsapp)
          ) {
            errors.whatsapp =
              "El teléfono debe tener 10 carácteres y solo debe contener números";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await tsh("/api").post("/businesses", { body: values }).json();

            alert(
              "El negocio ha sido agregado correctamente. El administrador en unos momentos lo validará y publicará en el sitio",
            );
            setIsModalVisible(false);

            trackEvent({
              category: "Formulario Agregar Negocio",
              label: "Solicitud exitosa",
            });
          } catch (e) {
            console.trace(e);
            alert(
              "Lo sentimos, ha ocurrido un error, estamos trabajando para solucionarlo",
            );
            setSubmitting(false);

            trackEvent({
              category: "Formulario Agregar Negocio",
              label: "Solicitud fallida",
            });
          }
        }}
      >
        {({
          values,
          isSubmitting,
          isValid,
          handleSubmit,
          validateForm,
          setFieldTouched,
        }) => {
          return (
            <section className="tw-flex tw-flex-col tw-items-stretch tw-bg-white tw-relative tw-max-w-screen-sm tw-w-full tw-max-h-full tw-py-6">
              <div className="tw-flex-shrink-0 tw-px-4 sm:tw-px-6 tw-pb-6 tw-mb-6 tw-flex tw-border-b">
                <div className="tw-w-10/12 sm:tw-w-11/12 tw-items-center">
                  <Title
                    className="tw-text-left"
                    tw-classnames-overrides={"Title>tw-mb-6=tw-mb-0"}
                  >
                    agrega un negocio
                  </Title>
                </div>
                <div className="tw-w-2/12 sm:tw-w-1/12 tw-text-right">
                  <Modal.CloseButton />
                </div>
              </div>

              <section
                id="modal-body"
                className="tw-flex-1 tw-px-4 sm:tw-px-6 tw-overflow-auto"
              >
                <form
                  onSubmit={e => {
                    e.preventDefault();
                  }}
                >
                  <section>
                    <InputContainer htmlFor="name">
                      <InputLabel>
                        nombre <span className="tw-text-red-600">(*)</span>
                      </InputLabel>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="input__element--name tw-border tw-border-black tw-p-2"
                        as={InputElement}
                        minLength={2}
                      />
                      <ErrorMessage name="name" component={InputError} />
                    </InputContainer>
                    <Separator />

                    <InputContainer htmlFor="whatsapp">
                      <InputLabel>WhatsApp</InputLabel>
                      <InputGroup>
                        <InputIcon>+57</InputIcon>
                        <Field
                          type="text"
                          id="whatsapp"
                          name="whatsapp"
                          as={InputElement}
                          minLength={10}
                          maxLength={20}
                        />
                      </InputGroup>
                      <ErrorMessage name="whatsapp" component={InputError} />
                    </InputContainer>
                    <Separator />

                    <InputContainer htmlFor="instagram">
                      <InputLabel>instagram</InputLabel>
                      <InputGroup>
                        <InputIcon>@</InputIcon>
                        <Field
                          type="text"
                          id="instagram"
                          name="instagram"
                          as={InputElement}
                        />
                      </InputGroup>
                      {values.instagram && (
                        <URLPreview
                          href={`https://instagram.com/${values.instagram}`}
                          target="_blank"
                          rel="noreferrer"
                        >{`https://instagram.com/${values.instagram}`}</URLPreview>
                      )}
                    </InputContainer>
                    <Separator />

                    <InputContainer htmlFor="facebook">
                      <InputLabel>facebook</InputLabel>
                      <InputGroup>
                        <InputIcon>@</InputIcon>
                        <Field
                          type="text"
                          id="facebook"
                          name="facebook"
                          as={InputElement}
                        />
                      </InputGroup>
                      {values.facebook && (
                        <URLPreview
                          href={`https://facebook.com/${values.facebook}`}
                          target="_blank"
                          rel="noreferrer"
                        >{`https://facebook.com/${values.facebook}`}</URLPreview>
                      )}
                    </InputContainer>
                    <Separator />

                    <InputContainer htmlFor="address">
                      <InputLabel>dirección</InputLabel>
                      <InputGroup>
                        <InputIcon>
                          <span className="tw-rounded-full tw-bg-white tw-px-1">📍</span>
                        </InputIcon>
                        <Field
                          type="text"
                          id="address"
                          name="address"
                          placeholder="Calle 18 #16-1 | Barrio Nueva Cecicila"
                          as={InputElement}
                        />
                      </InputGroup>
                    </InputContainer>
                    <Separator />

                    <InputContainer htmlFor="location">
                      <InputLabel>ubicación [google maps]</InputLabel>
                      <InputGroup>
                        <InputIcon>
                          <span className="tw-rounded-full tw-bg-white tw-px-1">📍</span>
                        </InputIcon>
                        <Field
                          type="text"
                          id="location"
                          name="location"
                          placeholder="https://goo.gl/maps/ceQd3o4pTbsDyMrG8"
                          as={InputElement}
                        />
                      </InputGroup>
                    </InputContainer>
                    <Separator />

                    <InputContainer htmlFor="description">
                      <InputLabel>descripción</InputLabel>
                      <Field
                        as="textarea"
                        type="text"
                        id="description"
                        name="description"
                        className="input__element--description tw-p-2 tw-rounded-none tw-border tw-border-black"
                      />
                    </InputContainer>
                  </section>

                  <ContentBox className="tw-mt-4 tw-border-4 tw-border-black tw-p-1">
                    <p className="tw-font-bold tw-mb-1 tw-text-center tw-uppercase">
                      vista previa
                    </p>
                    <BusinessItem item={values} isPreview />
                  </ContentBox>

                  <p className="tw-my-6 tw-text-sm tw-bg-gray-100 tw-text-gray-600 tw-p-2 tw-text-center tw-border">
                    El logo de tu negocio será obtenido de alguno de los perfiles que
                    ingresaste previamente [WhatsApp, Instagram o Facebook]
                  </p>

                  <SubmitButton
                    type="button"
                    disabled={isSubmitting || !isValid}
                    tw-variant={{
                      invalid: !isValid,
                      loading: isSubmitting,
                    }}
                    onClick={async () => {
                      const formErrors = await validateForm(values);
                      const isValidForm = Object.values(formErrors).reduce(
                        (acum, curr) => {
                          return acum && !curr;
                        },
                        true,
                      );

                      if (!isValidForm) {
                        trackEvent({
                          category: "Formulario Agregar Negocio",
                          label: "Formulario inválido",
                        });

                        document.getElementById("modal-body").scrollTop = 0;

                        if (formErrors.whatsapp) {
                          setFieldTouched("whatsapp", true);
                          document.getElementById("whatsapp").focus();
                        }

                        if (formErrors.name) {
                          setFieldTouched("name", true);
                          document.getElementById("name").focus();
                        }

                        return;
                      }

                      handleSubmit();
                    }}
                  >
                    {isSubmitting ? "cargando..." : "agregar"}
                  </SubmitButton>
                </form>
              </section>
            </section>
          );
        }}
      </Formik>

      <style jsx>{`
        .modal-header :global(.modal-close-button) {
          position: absolute;
          top: 0;
          right: 0;
        }

        :global(.input__icon) {
          height: 50px;
          width: 60px;
        }

        :global(.input__element) {
          height: 50px;
          width: calc(100% - 60px);
        }

        :global(.input__element--name) {
          width: 100%;
        }

        :global(.input__element--description) {
          resize: none;
          height: 100px;
          width: 100%;
        }
      `}</style>
    </Modal>,
    portal,
  );
}

const URLPreview = twcss.a`tw-pl-6 tw-text-right tw-block tw-text-gray-500 tw-text-sm tw-mt-1 tw-font-bold tw-underline`;
const InputContainer = twcss.label`tw-text-left tw-block`;
const InputLabel = twcss.p`tw-mb-1 tw-font-bold tw-cursor-pointer tw-capitalize`;
const InputGroup = twcss.div`tw-w-full tw-flex tw-border tw-border-black`;
const InputIcon = twcss.span`input__icon tw-bg-gray-600 tw-text-white tw-flex tw-items-center tw-font-bold tw-border-r tw-border-black tw-justify-center tw-flex-shrink-0`;
const InputElement = twcss.input`input__element tw-p-2 tw-rounded-none`;
const InputError = twcss.p`tw-text-red-600 tw-text-sm tw-text-right tw-pl-6 tw-mt-1`;
const SubmitButton = twcss.button({
  __base: "tw-bg-black tw-text-white tw-py-4 tw-px-4 tw-w-full tw-font-bold tw-uppercase",
  initial: "hover:tw-bg-gray-900",
  invalid: "tw-opacity-25 tw-cursor-not-allowed",
  loading: "tw-opacity-25 tw-cursor-wait",
});
