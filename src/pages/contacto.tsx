import { MainLayout } from '~/components/layout';
import { ContentBox } from '~/components/pages/_shared';

export default function WhoUs() {
  return (
    <MainLayout>
      <ContentBox>
        <ContentBox.Title>contacto</ContentBox.Title>

        <section className="tw-text-left">
          <p>
            si tiene alguna duda, reclamo, sugerencia o idea de mejora puede contactarme
            en
            <a
              href="mailto:dev.apps.armenia@gmail.com"
              className="tw-mx-1 tw-font-bold tw-underline tw-text-yellow-600"
            >
              dev.apps.armenia@gmail.com
            </a>
          </p>
        </section>
      </ContentBox>
    </MainLayout>
  );
}
