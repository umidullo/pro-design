import Layout from '@/components/layout';
import BlockTitle from '@/components/ui/block-title';
import Button from '@/components/ui/button';
import { ArrowIcon, PlayIcon } from '@/components/ui/icon';
import Wrapper from '@/components/ui/wrapper';
import { getStaticPropsTranslations } from '@/helpers/i18n';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import Marquee from 'react-fast-marquee';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await getStaticPropsTranslations(context.locale ?? 'ru')),
    },
  };
};

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Wrapper className="flex justify-between">
        <div className="relative bg-blue-900 overflow-hidden w-full h-[calc(100vh-106px)] max-h-[600px] my-4 rounded-3xl flex items-center justify-center">
          <div className="w-1/2 flex items-center flex-col justify-center gap-8 z-[3]">
            <h1 className="font-medium text-4xl uppercase text-center leading-normal">
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
      <Wrapper className="mb-4">
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
      <Wrapper className="max-w-[100vw]">
        <BlockTitle>{t('b_titles.recents')}</BlockTitle>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw] flex items-end justify-start p-10">
            <div className="max-w-sm">
              <p className="text-base mb-2">Website</p>
              <h4 className="text-3xl font-medium">
                Title long title second line long title
              </h4>
            </div>
          </div>
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw]"></div>
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw]"></div>
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw]"></div>
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw]"></div>
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw]"></div>
        </div>
      </Wrapper>
      <div>
        <BlockTitle>{t('b_titles.clients')}</BlockTitle>
        <div>
          <Marquee>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </div>
    </Layout>
  );
}
