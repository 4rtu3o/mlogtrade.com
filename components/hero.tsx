import Image from 'next/image';
import heroImage from '@/public/mlt-container.png';
import { useTranslation } from '@/app/i18n';

type Language = {
  params: { lang: string };
};

async function Hero({ params: { lang: lng } }: Language) {
  const indicators = [
    { time: '8+', text: 'kpi1' },
    { time: '70+', text: 'kpi2' },
    { time: '9+', text: 'kpi3' },
  ];
  const { t } = await useTranslation(lng);
  return (
    <>
      <div className="relative container mx-auto flex flex-col lg:gap-12 gap-6">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center pt-16">
          <h1 className="text-5xl lg:text-[5rem] leading-[1] py-4 lg:py-0 last:text-mlt-red">
            {t('title1')}
            <br /> {t('title2')}{' '}
            <span className="text-mlt-red">{t('title3')}</span>
          </h1>
          <p className="lg:text-right text-lg leading-7 lg:w-96">
            {t('intro')}
          </p>
        </div>
        <div className="self-center lg:self-start">
          <a href="mailto:info@mlogtrade.com">
            <button className="uppercase font-semibold text-white border-2 bg-mlt-blue rounded-full px-12 py-5">
              {t('getInTouch')}
            </button>
          </a>
        </div>
        <Image
          src={heroImage}
          alt="Multimodal Logistics Trade branded container haning on a crane hook"
          className="absolute top-0 right-[7%] lg:w-[60%] -z-10 lg:z-0 w-80 lg:opacity-100 opacity-20"
        />
        <ul className="font-5xl flex lg:flex-col gap-4 text-center lg:text-left">
          {indicators.map(({ time, text }) => (
            <li key={text} className="first:text-mlt-red">
              <span className="text-5xl font-semibold">{time}</span>
              <br />
              <span className="text-lg font-medium">{t(text)}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Hero;
