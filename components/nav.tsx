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
            <Popover key={item.path} title={item.title} items={item.sub_menu} />
          );
        }
        return (
          <Link
            href={item.path}
            key={item.path}
            className="px-4 py-2 flex items-center justify-center flex-col text-center relative text-white after:content-[''] after:absolute 
       after:-bottom-1 after:w-0 after:h-px after:bg-white hover:after:w-full transition-transform after:ease-in-out after:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-md"
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
