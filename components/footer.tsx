import { SocialIcon } from '@/components/ui/icon';
import Wrapper from '@/components/ui/wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const footer_nav = [
  {
    title: 'Услуги',
    nav_items: [
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
    ],
  },
  {
    title: 'Услуги',
    nav_items: [
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
    ],
  },
  {
    title: 'Услуги',
    nav_items: [
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
    ],
  },
  {
    title: 'Услуги',
    nav_items: [
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
      {
        title: 'UX/UI дизайн',
        path: '/',
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="pt-10 pb-12 text-[#888888]">
      <Wrapper className="flex items-center justify-between">
        <div className="w-full max-w-sm">
          <Image
            src="/logo.png"
            alt="footer logo"
            width={193}
            height={31}
            quality={100}
          />
          <h6 className="mt-3">
            Мы профессиональная команда дизайнеров с более чем 5-летним опытом
            работы в области анимации, дизайна, 3D-моделирования и визуализации.
          </h6>
          <div className="flex gap-8 mt-6 transition-all">
            <Link
              href="https://www.facebook.com/prodesignofficial"
              target="_blank"
            >
              <SocialIcon
                name="fb"
                className="w-8 h-8 fill-[#c5c5c5] hover:fill-white transition-all"
              />
            </Link>
            <Link href="https://t.me/prodesign_team" target="_blank">
              <SocialIcon
                name="tg"
                className="w-8 h-8 fill-[#c5c5c5] hover:fill-white transition-all"
              />
            </Link>
            <Link
              href="https://www.instagram.com/prodesign_team/"
              target="_blank"
            >
              <SocialIcon
                name="ig"
                className="w-8 h-8 fill-[#c5c5c5] hover:fill-white transition-all"
              />
            </Link>
          </div>
        </div>
        {footer_nav.map((block, i) => (
          <div key={i}>
            <h5 className="mb-3 text-white text-xl font-bold">{block.title}</h5>
            <ul className="space-y-1">
              {block.nav_items.map((item, j) => (
                <li key={j}>
                  <Link href={item.path} className="hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Wrapper>
    </footer>
  );
};

export default Footer;
