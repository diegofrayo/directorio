import { MainLayout } from '~/components/layout';
import { ContentBox } from '~/components/pages/_shared';

export default function WhoUs() {
  return (
    <MainLayout>
      <ContentBox>
        <ContentBox.Title>contacto</ContentBox.Title>

        <section className="tw-text-justify">
          <p>
            soy un desarrollador de software de la ciudad de
            <span className="tw-underline tw-italic tw-mx-1">armenia</span>
            que realiza este proyecto solo por hobbie. detrás del desarrollo y
            mantenimiento de este sitio web no hay ninguna empresa o grupo de personas a
            cargo.
          </p>
          <br />
          <p>
            puede contactarme en
            <a
              href="mailto:dev-apps-armenia@gmail.com"
              className="tw-mx-1 tw-font-bold tw-underline tw-text-yellow-600"
            >
              dev-apps-armenia@gmail.com
            </a>
          </p>
        </section>
      </ContentBox>
    </MainLayout>
  );
}
