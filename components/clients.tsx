import BlockTitle from '@/components/ui/block-title';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const Clients = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-20">
      <BlockTitle>{t('b_titles.clients')}</BlockTitle>
      <div>
        <Marquee
          autoFill
          pauseOnHover
          gradient
          gradientColor={[0, 0, 0]}
          className="my-3"
          speed={30}
        >
          <Image
            src="/temp/1.png"
            alt="client"
            height={60}
            width={100}
            className="mx-3"
          />
          <Image
            src="/temp/2.png"
            alt="client"
            height={60}
            width={100}
            className="mx-3"
          />
          <Image
            src="/temp/3.png"
            alt="client"
            height={60}
            width={100}
            className="mx-3"
          />
          <Image
            src="/temp/4.png"
            alt="client"
            height={60}
            width={100}
            className="mx-3"
          />
          <Image
            src="/temp/5.png"
            alt="client"
            height={60}
            width={100}
            className="mx-3"
          />
          <Image
            src="/temp/6.png"
            alt="client"
            height={60}
            width={100}
            className="mx-3"
          />
        </Marquee>
      </div>
    </div>
  );
};
export default Clients;
