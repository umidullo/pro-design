import ClientsImage from '@/components/clients-image';
import BlockTitle from '@/components/ui/block-title';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Marquee from 'react-fast-marquee';

const images = [
  '/temp/1.png',
  '/temp/2.png',
  '/temp/3.png',
  '/temp/4.png',
  '/temp/5.png',
  '/temp/6.png',
];

const Clients = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:mb-20">
      <BlockTitle>{t('b_titles.clients')}</BlockTitle>
      <div>
        <Marquee
          autoFill
          pauseOnHover
          // gradient
          // gradientColor={[0, 0, 0]}
          className="my-3"
          speed={30}
        >
          {images.map((item) => (
            <ClientsImage src={item} key={item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
export default Clients;
