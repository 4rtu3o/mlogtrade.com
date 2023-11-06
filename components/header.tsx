import Image from 'next/image';
import logo from '@/public/logo.svg';
import LanguagePicker from './language-picker';
import { useTranslation } from '@/app/i18n';
type Language = {
  params: { lang: string };
};

async function Header({ params: { lang: lng } }: Language) {
  const { t } = await useTranslation(lng);

  const nav = [
    { label: 'header.home', link: '/' },
    { label: 'header.about', link: '#about' },
    { label: 'header.services', link: '#services' },
    { label: 'header.contact', link: '#contact' },
  ];

  return (
    <header className="h-28 relative flex items-center border-b-2 border-mlt-blue">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src={logo}
          alt="Multimodal Logistics Trade logo"
          className="w-52"
        />
        <nav className="hidden lg:flex">
          <ul className="flex gap-24">
            {nav.map(({ label, link }) => (
              <li key={label} className="uppercase font-semibold">
                <a href={link}>{t(label)}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4 items-center justify-center">
          <a href="mailto:info@mlogtrade.com" className="hidden lg:flex">
            <button className="uppercase font-semibold border-2 border-mlt-blue rounded-full px-10 py-5">
              {t('getInTouch')}
            </button>
          </a>
          <LanguagePicker />
        </div>
      </div>
    </header>
  );
}

export default Header;
