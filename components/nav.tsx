import Popover from '@/components/popover';
import { ChevronIcon } from '@/components/ui/icon';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

const nav = [
  {
    path: '/',
    title: 'Главная',
    sub_menu: [],
  },
  {
    path: 'services',
    title: 'Услуги',
    sub_menu: [
      {
        path: 'design',
        title: 'ui/ux',
      },
      {
        path: 'motion',
        title: 'motion',
      },
      {
        path: 'vfx',
        title: 'vfx',
      },
      {
        path: 'something',
        title: 'something',
      },
    ],
  },
  {
    path: 'portfolio',
    title: 'Работы',
    sub_menu: [],
  },
  {
    path: 'about',
    title: 'О нас',
    sub_menu: [],
  },
  {
    path: 'contacts',
    title: 'Контакты',
    sub_menu: [],
  },
];

const Nav = () => {
  return (
    <nav className="absolute left-1/2 -translate-x-1/2 w-fit flex items-center gap-6">
      {nav.map((item) => {
        if (item.sub_menu.length) {
          return (
            <Popover key={item.path} title={item.title}>
              {item.sub_menu.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 text-sm font-medium text-gray-900 text-center"
                >
                  {item.title}
                </Link>
              ))}
            </Popover>
          );
        }
        return (
          <Link
            href={item.path}
            key={item.path}
            className="px-4 py-2 flex items-center justify-center flex-col text-center relative text-white 
            after:content-[''] after:absolute after:-bottom-1 after:w-0 after:h-0 after:rounded-t-sm after:bg-white 
            hover:after:w-full hover:after:h-[3px] transition-transform after:ease-in-out after:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-md"
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
