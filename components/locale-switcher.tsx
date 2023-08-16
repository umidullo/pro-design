import Popover from '@/components/popover';
import { renderLabel } from '@/helpers/render-locale-label';
import { useRouter } from 'next/router';
import React from 'react';

const LocaleSwitcher = () => {
  const router = useRouter();
  console.log('LocaleSwitcher ~ router:', router);

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Popover title={renderLabel(router.locale ? router.locale : '')}>
      {router.locales
        ?.filter((elem) => elem !== router.locale)
        .map((locale) => (
          <button
            key={locale}
            className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 text-sm font-medium text-gray-900 text-center"
            onClick={() => onToggleLanguageClick(locale)}
          >
            {renderLabel(locale)}
          </button>
        ))}
    </Popover>
  );
};

export default LocaleSwitcher;
