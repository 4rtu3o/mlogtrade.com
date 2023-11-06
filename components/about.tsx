import Image from 'next/image';
import logoSemitransparent from '@/public/logo-semitransparent.svg';
import aboutImages from '@/public/about-images.png';
import { useTranslation } from '@/app/i18n';
type Language = {
  params: { lang: string };
};

async function About({ params: { lang: lng } }: Language) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <div className="container mx-auto py-20">
        <div>
          <div
            id="about"
            className="flex flex-col lg:flex-row bg-mlt-blue overflow-clip relative w-full rounded-[2.65rem] p-4 lg:p-12"
          >
            <div className="lg:w-[200rem] h-full">
              <Image
                src={aboutImages}
                alt="a PNG image with four sections show various modes of cargo transportation"
              />
            </div>

            <Image
              src={logoSemitransparent}
              alt="semitransparent logo"
              className="absolute -top-48 -right-36 hidden lg:block"
            />
            <div className="flex flex-col text-white lg:px-12 px-2 py-2 lg:py-0 gap-6 justify-end">
              <h1 className="text-4xl lg:text-6xl font-light">
                {t('aboutTitle1')} <br />
                <span className="text-mlt-red">{t('aboutTitle2')}</span>
                <br /> {t('aboutTitle3')}
              </h1>
              <p className="text-gray-300">{t('aboutText')}</p>
              <div className="flex justify-center lg:justify-normal gap-8">
                <a href="mailto:info@mlogtrade.com">
                  <button className="uppercase font-semibold bg-white border-2 text-mlt-blue rounded-full px-12 py-5">
                    {t('getInTouch')}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
