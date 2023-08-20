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
    <Wrapper className="mb-4 relative">
      <BlurCircle className="bg-lime-500 top-12 left-1/2 -translate-x-96" />
      <BlurCircle className="bg-fuchsia-500 -top-52 right-0" />
      <BlockTitle>{t('b_titles.services')}</BlockTitle>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[calc(100vh-132px)] max-h-[730px]">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 bg-blue-900 rounded-3xl p-10">
          <h3 className="text-3xl font-semibold">UX/UI дизайн</h3>
          <h4 className="mt-3 mb-6 text-base line-clamp-3">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button icon={<ArrowIcon />}>{t('buttons.goto')}</Button>
        </div>
        <div className="col-start-2 col-end-4 row-start-1 row-end-2 bg-blue-900 rounded-3xl p-10">
          <h3 className="text-3xl font-semibold">UX/UI дизайн</h3>
          <h4 className="mt-3 mb-6 text-base line-clamp-3 w-[320px]">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button icon={<ArrowIcon />}>{t('buttons.goto')}</Button>
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-blue-900 rounded-3xl p-10">
          <h3 className="text-3xl font-semibold">UX/UI дизайн</h3>
          <h4 className="mt-3 mb-6 text-base line-clamp-3 w-fit">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button icon={<ArrowIcon />}>{t('buttons.goto')}</Button>
        </div>
        <div className="col-start-3 col-end-4 row-start-2 row-end-3 bg-blue-900 rounded-3xl p-10">
          <h3 className="text-3xl font-semibold">UX/UI дизайн</h3>
          <h4 className="mt-3 mb-6 text-base line-clamp-3 w-fit">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button icon={<ArrowIcon />}>{t('buttons.goto')}</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
