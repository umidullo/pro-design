import Popover from '@/components/popover';
import { renderLabel } from '@/utils/helpers/render-locale-label';
import { useRouter } from 'next/router';
import React from 'react';

const LocaleSwitcher = () => {
  const router = useRouter();

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
            className="capitalize flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-white/20 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 text-sm font-medium text-center"
            onClick={() => onToggleLanguageClick(locale)}
          >
            {renderLabel(locale)}
          </button>
        ))}
    </Popover>
  );
};

export default LocaleSwitcher;
