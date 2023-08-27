import { ChevronIcon } from '@/components/ui/icon';
import { nav } from '@/utils/constants/nav';
import { Disclosure } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
  const { t } = useTranslation();

  return (
    <nav
      className={`lg:hidden ${
        isOpen
          ? 'w-full mt-8 flex flex-col capitalize font-medium [&>a]:text-xl [&>button]:text-xl'
          : 'hidden'
      }`}
    >
      {nav.map((item) => {
        if (item.sub_menu.length) {
          return (
            <Disclosure key={item.path}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="p-3 w-full flex justify-between capitalize">
                    {t(item.title)}
                    <ChevronIcon
                      className={`${
                        open ? 'rotate-180' : 'rotate-0'
                      } ml-2 h-5 w-5 transition duration-300 ease-in-out`}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex flex-col capitalize font-medium [&>a]:text-xl pl-6">
                    {item.sub_menu.map((item) => (
                      <Link key={item.path} href={item.path} className="p-3">
                        {t(item.title)}
                      </Link>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        }
        return (
          <Link href={item.path} key={item.path} className=" p-3">
            {t(item.title)}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNav;
