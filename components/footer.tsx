import { useTranslation } from '@/app/i18n';

type Language = {
  params: { lang: string };
};

async function Footer({ params: { lang: lng } }: Language) {
  const { t } = await useTranslation(lng);

  return (
    <div className="bg-mlt-blue rounded-t-[2.625rem]">
      <div
        id="contact"
        className="container flex flex-col gap-8 lg:pt-12 pt-8 pb-2 text-white"
      >
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0 items-center">
          <p className="lg:w-[30rem] text-center lg:text-left">
            {t('footer.address')}
          </p>
          <div className="flex justify-end gap-12 items-center">
            <div>
              <p>{t('footer.tel1')}</p>
              <p>{t('footer.tel2')}</p>
            </div>
            <a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
          </div>
        </div>
        <a
          href="mailto:info@mlogtrade.com"
          className="flex justify-center lg:justify-normal"
        >
          <h1 className="text-4xl lg:text-6xl font-light uppercase lg:w-2/5 flex text-center lg:text-left lg:gap-6">
            <div>
              <span className="text-mlt-red">{t('footer.cta1')}</span>
              <br />
              {t('footer.cta2')}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-12 h-12 hidden lg:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </h1>
        </a>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 text-center lg:text-left justify-between text-sm">
          <p>{t('footer.copyright')}</p>
          <a href="https://hillitilsimat.com">{t('footer.developedBy')}</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
