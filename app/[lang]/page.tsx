import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Departments from '@/components/departments';
import { useTranslation } from '../i18n';

type Language = {
  params: { lang: string };
};

export default async function Home({ params: { lang } }: Language) {
  const { t } = await useTranslation(lang);

  return (
    <main className="">
      <Hero params={{ lang }} />
      <About params={{ lang }} />
      <Services params={{ lang }} />
      <Departments params={{ lang }} />
    </main>
  );
}
