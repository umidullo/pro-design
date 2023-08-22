import BlurCircle from '@/components/blur-circle';
import BlockTitle from '@/components/ui/block-title';
import Button from '@/components/ui/button';
import { ArrowIcon } from '@/components/ui/icon';
import Wrapper from '@/components/ui/wrapper';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Services = () => {
  const { t } = useTranslation();

  return (
    <Wrapper className="relative">
      {/* <BlurCircle className="bg-lime-500 top-12 left-1/2 -translate-x-96" /> */}
      {/* <BlurCircle className="bg-fuchsia-500 -top-52 right-0" /> */}
      <BlockTitle>{t('b_titles.services')}</BlockTitle>
      <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 aspect-square lg:aspect-auto lg:h-[calc(100vh-132px)] max-h-[730px] py-4 mx-auto">
        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 bg-blue-900 rounded-3xl lg:p-10 grid justify-items-center content-center lg:justify-items-start lg:content-start">
          <h3 className="text-base lg:text-3xl font-semibold">UX/UI дизайн</h3>
          <h4 className="hidden lg:block mt-3 mb-6 text-base line-clamp-3">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button className="hidden lg:flex" icon={<ArrowIcon />}>
            {t('buttons.goto')}
          </Button>
        </div>
        <div className="lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2 bg-blue-900 rounded-3xl lg:p-10 grid justify-items-center content-center lg:justify-items-start lg:content-start">
          <h3 className="text-base lg:text-3xl font-semibold">UX/UI дизайн</h3>
          <h4 className="hidden lg:block mt-3 mb-6 text-base line-clamp-3 w-[320px]">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button className="hidden lg:flex" icon={<ArrowIcon />}>
            {t('buttons.goto')}
          </Button>
        </div>
        <div className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 bg-blue-900 rounded-3xl lg:p-10 grid justify-items-center content-center lg:justify-items-start lg:content-start">
          <h3 className="text-base lg:text-3xl font-semibold">UX/UI дизайн</h3>
          <h4 className="hidden lg:block mt-3 mb-6 text-base line-clamp-3 w-fit">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button className="hidden lg:flex" icon={<ArrowIcon />}>
            {t('buttons.goto')}
          </Button>
        </div>
        <div className="lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 bg-blue-900 rounded-3xl lg:p-10 grid justify-items-center content-center lg:justify-items-start lg:content-start">
          <h3 className="text-base lg:text-3xl font-semibold">UX/UI дизайн</h3>
          <h4 className="hidden lg:block mt-3 mb-6 text-base line-clamp-3 w-fit">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button className="hidden lg:flex" icon={<ArrowIcon />}>
            {t('buttons.goto')}
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
