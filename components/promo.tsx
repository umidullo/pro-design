import Button from '@/components/ui/button';
import { PlayIcon } from '@/components/ui/icon';
import Wrapper from '@/components/ui/wrapper';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Promo = () => {
  const { t } = useTranslation();

  return (
    <Wrapper className="flex justify-between">
      <div className="relative bg-blue-900 overflow-hidden w-full h-[400px] lg:h-[calc(100vh-106px)] max-h-[600px] my-4 rounded-3xl flex items-center justify-center">
        <div className="w-1/2 flex items-center flex-col justify-center gap-3 lg:gap-8 z-[3]">
          <h1 className="font-medium text-lg lg:text-4xl uppercase text-center leading-normal">
            разрабатываем и создаем эффективный цифровой опыт
          </h1>
          <Button icon={<PlayIcon className="w-5 h-5 stroke-2" />}>
            {t('buttons.promo')}
          </Button>
        </div>
        {/* <video
      src="/bg.mp4"
      loop
      autoPlay
      muted
      className="absolute top-0 left-0 bottom-0 right-0 object-cover z-[-1]"
    ></video>
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-20 z-[-1]"></div> */}
      </div>
    </Wrapper>
  );
};

export default Promo;
