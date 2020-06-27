import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { Formik, Field, ErrorMessage } from "formik";

import { Modal } from "~/components/primitive";
import { ContentBox, Title, BusinessItem } from "~/components/pages";
import twcss from "~/lib/twcss";
import tsh from "~/lib/tsh";

function Header(): any {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleAddBussinessClick() {
    setIsModalVisible(true);
  }

  return (
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
        <Menu>
          <MenuItem tw-variant="default">
            <Link href="/">
              <MenuItemLink>inicio</MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem tw-variant="default" className="tw-mx-0 sm:tw-mx-2">
            <Link href="/categorias">
              <MenuItemLink>categorías</MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem tw-variant="add-business">
            <button
              className="tw-w-full tw-h-full tw-font-bold tw-p-2"
              onClick={handleAddBussinessClick}
            >
              ¡agrega un negocio!
            </button>
          </MenuItem>
        </Menu>
      </nav>

      <CreateBusinessModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </header>
  );
}

export default Header;

// --- Components ---

const Menu = twcss.ul`tw-block sm:tw-inline-flex tw-w-full`;
const MenuItem = twcss.li({
  __base:
    "tw-flex-1 tw-bg-gray-900 hover:tw-bg-gray-800 tw-cursor-pointer tw-my-1 sm:tw-my-0",
  default: "hover:tw-underline tw-text-gray-100 tw-font-bold",
  "add-business": "tw-text-yellow-400 tw-underline",
});
const MenuItemLink = twcss.a`tw-block tw-p-2`;

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
          email: "",
          description: "",
        }}
        validate={values => {
          const errors: Record<string, string> = {};

          if (values.name.length < 2) {
            errors.name = "el nombre debe tener al menos 2 carácteres";
          }

          if (values.whatsapp.length >= 10 || !/^[0-9]*$/.test(values.whatsapp)) {
            errors.whatsapp =
              "el teléfono debe tener 10 carácteres y solo debe contener números";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await tsh("/api").post("/business", { body: values }).json();
            alert(
              "el negocio ha sido agregado correctamente. el administrador en unos momentos lo publicará en el sitio",
            );
            setIsModalVisible(false);
          } catch (e) {
            console.trace(e);
            alert(
              "lo sentimos, ha ocurrido un error, estamos trabajando para solucionarlo",
            );
            setSubmitting(false);
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
              <div className="tw-flex-shrink-0 tw-px-6 tw-pb-6 tw-mb-6 tw-flex tw-border-b tw-border-black">
                <div className="tw-w-10/12 sm:tw-w-11/12 tw-items-center">
                  <Title
                    className="tw-text-left"
                    tw-classnames-overrides={{ "tw-mb-6": "tw-mb-0" }}
                  >
                    agrega un negocio
                  </Title>
                </div>
                <div className="tw-w-2/12 sm:tw-w-1/12 tw-text-right">
                  <Modal.CloseButton />
                </div>
              </div>

              <section id="modal-body" className="tw-flex-1 tw-px-6 tw-overflow-auto">
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
                      <InputLabel>
                        whatsapp <span className="tw-text-red-600">(*)</span>
                      </InputLabel>
                      <InputGroup>
                        <InputIcon>+57</InputIcon>
                        <Field
                          type="text"
                          id="whatsapp"
                          name="whatsapp"
                          as={InputElement}
                          minLength={10}
                          maxLength={10}
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
                      <ErrorMessage name="instagram" component={InputError} />
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
                      <ErrorMessage name="facebook" component={InputError} />
                    </InputContainer>
                    <Separator />

                    <InputContainer htmlFor="email">
                      <InputLabel>email</InputLabel>
                      <InputGroup>
                        <InputIcon>✉️</InputIcon>
                        <Field type="email" id="email" name="email" as={InputElement} />
                      </InputGroup>
                      <ErrorMessage name="email" component={InputError} />
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
                      <ErrorMessage name="description" component={InputError} />
                    </InputContainer>
                  </section>

                  <ContentBox
                    className="tw-mt-4 tw-mb-6"
                    tw-classnames-overrides={{ "tw-border": "tw-border-4" }}
                  >
                    <p className="tw-font-bold tw-mb-2 tw-text-center tw-underline">
                      vista previa
                    </p>
                    <BusinessItem
                      item={{
                        name: values.name,
                        whatsapp: values.whatsapp,
                        instagram: values.instagram,
                        facebook: values.facebook,
                        email: values.email,
                        description: values.description,
                      }}
                    />
                  </ContentBox>

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

const InputContainer = twcss.label`tw-text-left tw-block`;
const InputLabel = twcss.p`tw-mb-1 tw-font-bold tw-cursor-pointer`;
const InputGroup = twcss.div`tw-w-full tw-flex tw-border tw-border-black`;
const InputIcon = twcss.span`input__icon tw-bg-gray-600 tw-text-gray-100 tw-flex tw-items-center tw-font-bold tw-border-r tw-border-black tw-justify-center tw-flex-shrink-0`;
const InputElement = twcss.input`input__element tw-p-2 tw-rounded-none`;
const InputError = twcss.p`tw-text-red-600 tw-text-sm tw-text-right tw-pl-6 tw-mt-1`;
const SubmitButton = twcss.button({
  __base: "tw-bg-black tw-text-white tw-py-4 tw-px-4 tw-w-full tw-font-bold",
  initial: "hover:tw-bg-gray-900",
  invalid: "tw-opacity-25 tw-cursor-not-allowed",
  loading: "tw-opacity-25 tw-cursor-wait",
});
const Separator = twcss.hr`tw-border-0 tw-my-5`;
