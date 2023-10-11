import BlockTitle from "@/components/ui/block-title";
import { ArrowIcon } from "@/components/ui/icon";
import Wrapper from "@/components/ui/wrapper";
import { Button } from "@/shared/ui";
import { useTranslation } from "next-i18next";
import React from "react";

const Services = () => {
  const { t } = useTranslation();

  return (
    <Wrapper className="relative">
      <BlockTitle>{t('b_titles.services')}</BlockTitle>
      <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 aspect-square lg:aspect-auto lg:h-[700px] py-4 mx-auto">
        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 rounded-3xl lg:p-10 grid justify-items-center content-center lg:justify-items-start lg:content-start lg:bg-[url('/ui-ux.jpg')] bg-[url('/ui-ux-mobile.jpg')] bg-cover lg:bg-bottom bg-top">
          <h3 className="text-base lg:text-3xl font-semibold">UX/UI дизайн</h3>
          <h4 className="hidden lg:block mt-3 mb-6 text-base line-clamp-3">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button
            href="/services/ui-ux"
            className="hidden"
            icon={<ArrowIcon />}
          >
            {t('buttons.goto')}
          </Button>
        </div>
        <div className="lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2 bg-[url('/branding.jpg')] bg-cover bg-center rounded-3xl lg:p-10 grid justify-items-center content-center lg:justify-items-start lg:content-start">
          <h3 className="text-base lg:text-3xl font-semibold">
            Моушн графика, Брендинг
          </h3>
          <h4 className="hidden lg:block mt-3 mb-6 text-base line-clamp-3 w-[320px]">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button
            href="/services/ui-ux"
            className="hidden"
            icon={<ArrowIcon />}
          >
            {t('buttons.goto')}
          </Button>
        </div>
        <div className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 bg-[url('/vfx.jpg')] bg-cover bg-center rounded-3xl lg:p-10 grid justify-items-center content-center lg:justify-items-start lg:content-start">
          <h3 className="text-base lg:text-3xl font-semibold">VFX</h3>
          <h4 className="hidden lg:block mt-3 mb-6 text-base line-clamp-3 w-fit">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button
            href="/services/ui-ux"
            className="hidden"
            icon={<ArrowIcon />}
          >
            {t('buttons.goto')}
          </Button>
        </div>
        <div className="lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 bg-[url('/arx-viz.jpg')] bg-cover bg-center rounded-3xl lg:p-10 grid justify-items-center content-center lg:justify-items-start lg:content-start">
          <h3 className="text-base lg:text-3xl font-semibold">Арх виз</h3>
          <h4 className="hidden lg:block mt-3 mb-6 text-base line-clamp-3 w-fit">
            Advanced training in executing an effective background inbound
            marketing strategy.
          </h4>
          <Button
            href="/services/ui-ux"
            icon={<ArrowIcon />}
            className="hidden"
          >
            {t('buttons.goto')}
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
