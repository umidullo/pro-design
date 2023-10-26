import Popover from '@/components/popover';
import { nav } from '@/utils/constants/nav';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-fit lg:flex lg:items-center lg:gap-6">
      {nav.map((item) => {
        if (item.sub_menu.length) {
          return (
            <Popover key={item.path} title={t(item.title)}>
              {item.sub_menu.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="capitalize flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-white/20 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 text-sm font-medium text-center"
                >
                  {t(item.title)}
                </Link>
              ))}
            </Popover>
          );
        }
        return (
          <Link
            href={item.path}
            key={item.path}
            className="capitalize px-4 py-2 flex items-center justify-center flex-col text-center relative text-white 
            after:content-[''] after:absolute after:-bottom-1 after:w-0 after:h-1 after:rounded-t-sm after:bg-white 
            hover:after:w-full transition-all after:ease-in-out after:duration-150"
          >
            {t(item.title)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
