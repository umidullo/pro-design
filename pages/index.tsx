import BlurCircle from '@/components/blur-circle';
import Layout from '@/components/layout';
import PortfolioCard from '@/components/portfolio-card';
import BlockTitle from '@/components/ui/block-title';
import Button from '@/components/ui/button';
import { ArrowIcon, PlayIcon } from '@/components/ui/icon';
import Wrapper from '@/components/ui/wrapper';
import { fetchData } from '@/utils/api/config';
import { getStaticPropsTranslations } from '@/utils/helpers/i18n';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetchData('posts', context.locale);

  return {
    props: {
      posts,
      ...(await getStaticPropsTranslations(context.locale ?? 'ru')),
    },
  };
};

export default function Home({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
      <Wrapper className="max-w-[100vw]">
        <BlockTitle>{t('b_titles.recents')}</BlockTitle>
        <div className="grid grid-cols-2 gap-4">
          {posts.map((post: any) => (
            <PortfolioCard
              key={post.id}
              image={post.image}
              title={post.title}
              id={post.id}
              slug={post.slug}
              is_video={post.is_video}
              video={post.video}
            />
          ))}
        </div>
      </Wrapper>
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
    </Layout>
  );
}
