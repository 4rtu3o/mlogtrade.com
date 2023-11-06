import { useTranslation } from '@/app/i18n';
import Icon from './icons/icon';

type Language = {
  params: { lang: string };
};

async function Departments({ params: { lang: lng } }: Language) {
  const { t } = await useTranslation(lng);

  const departments = [
    { icon: 'car', department: 'road' },
    { icon: 'airplane', department: 'air' },
    { icon: 'railway', department: 'rail' },
    { icon: 'ship', department: 'ocean' },
  ];

  return (
    <>
      <div className="container py-20 mx-auto flex gap-12 flex-col">
        <h1 className="text-4xl lg:text-6xl font-light lg:w-2/5 self-end text-right">
          {t('departmentsTitle1')}
          <span className="text-mlt-red"> {t('departmentsTitle2')}</span>
        </h1>
        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {departments.map(({ icon, department }, i) => (
            <li
              key={department}
              className="bg-gray-100 p-8 overflow-clip relative rounded-2xl aspect-[8/8.5] hover:bg-mlt-blue transition-colors duration-200 hover:text-white"
            >
              <Icon
                iconName={icon}
                color={'#f3f4f6'}
                className="absolute -right-24 -top-14 w-64 h-64 opacity-20"
              />
              <div className="text-3xl flex flex-col gap-6 font-light justify-between h-full">
                <div className="bg-white text-black rounded-full aspect-square w-16 h-16 flex items-center justify-center p-3">
                  <Icon iconName={icon} color="black" />
                </div>
                <p className="w-1/2">{t(`departments.${department}`)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Departments;
