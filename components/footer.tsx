import { SocialIcon } from '@/components/ui/icon';
import Wrapper from '@/components/ui/wrapper';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const footer_nav = [
  {
    title: "nav.services",
    nav_items: [
      {
        title: "nav_items.ui_ux",
        path: "/services/ui-ux",
      },
      {
        title: "nav_items.motion",
        path: "/services/motion-graphics",
      },
      {
        title: "nav_items.branding",
        path: "/services/branding",
      },
      {
        title: "nav_items.vfx",
        path: "/services/vfx",
      },
      {
        title: "nav_items.interior",
        path: "/services/interior-design",
      },
    ],
  },
  {
    title: "nav.works",
    nav_items: [
      {
        title: "nav_items.web",
        path: "/portfolio/web",
      },
      {
        title: "nav_items.motion",
        path: "/portfolio/motion-design",
      },
      {
        title: "nav_items.branding",
        path: "/portfolio/branding",
      },
      {
        title: "nav_items.vfx",
        path: "/portfolio/vfx",
      },
      {
        title: "nav_items.interior",
        path: "/portfolio/interior-design",
      },
      {
        title: "nav_items.mobile",
        path: "/portfolio/mobile",
      },
    ],
  },
  {
    title: "nav.info",
    nav_items: [
      {
        title: "nav.about",
        path: "/info/about",
      },
      {
        title: "nav_items.vacancy",
        path: "/info/career",
      },
      {
        title: "nav_items.com_offer",
        path: "/info/terms",
      },
    ],
  },
  {
    title: "nav.contacts",
    nav_items: [
      {
        title: "nav_items.adress",
        path: "/info/about",
      },
    ],
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="pt-10 pb-12 text-[#888888] border-t border-[#333]">
      <Wrapper className="flex items-start justify-between flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="w-full max-w-sm order-last lg:order-none flex items-center flex-col lg:items-start">
          <Image
            src="/logo.png"
            alt="footer logo"
            width={193}
            height={31}
            quality={100}
          />
          <h6 className="mt-3 text-center lg:text-start">{t("footer")}</h6>
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
          <div key={i} className="w-full lg:w-fit">
            <h5 className="mb-3 text-white text-xl font-bold text-center lg:text-start capitalize">
              {t(block.title)}
            </h5>
            <ul className="space-y-1">
              {block.nav_items.map((item, j) => (
                <li
                  key={j}
                  className="text-center lg:text-start lg:w-max w-full"
                >
                  <Link href={item.path} className="hover:text-white">
                    {t(item.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Wrapper>
      <Wrapper className="mt-10">
        <p className="text-xs text-center lg:text-start">
          © 2023 ProDesign team.
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
