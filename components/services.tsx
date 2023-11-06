import { useTranslation } from '@/app/i18n';
type Language = {
  params: { lang: string };
};

async function Services({ params: { lang: lng } }: Language) {
  const { t } = await useTranslation(lng);

  const services = t('services', { returnObjects: true });

  return (
    <>
      <div className="container mx-auto flex gap-12 flex-col">
        <h1 id="services" className="lg:text-6xl text-4xl font-light lg:w-2/5">
          <span className="text-mlt-red">{t('servicesTitle1')}</span>{' '}
          {t('servicesTitle2')}
        </h1>
        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {Object.values(services).map((service, i) => (
            <li
              key={service}
              className="bg-gray-100 p-8 rounded-2xl aspect-[8/6] hover:bg-mlt-blue transition-colors duration-200 hover:text-white"
            >
              <div className="text-2xl flex flex-col gap-6 font-light">
                <h2>
                  <span className="font-medium text-4xl">
                    {i + 1 < 10 ? '0' + (i + 1) : i + 1}
                  </span>{' '}
                </h2>
                <p>{t(service)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Services;
