import PortfolioCard from '@/components/portfolio-card';
import BlockTitle from '@/components/ui/block-title';
import Wrapper from '@/components/ui/wrapper';
import { fetchData } from '@/utils/api/config';
import { getStaticPropsTranslations } from '@/utils/helpers/i18n';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetchData('posts', context.locale);

  return {
    props: {
      posts,
      ...(await getStaticPropsTranslations(context.locale ?? 'ru')),
    },
  };
};

export default function Page({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();
  return (
    <Wrapper className="max-w-[100vw] pb-10">
      <BlockTitle>{t('b_titles.recents')}</BlockTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        {posts.map((post: any) => (
          <PortfolioCard
            key={post.slug}
            image={post.image}
            title={post.title}
            id={post.id}
            slug={post.id}
            // slug={post.slug}
            is_video={post.is_video}
            video={post.video}
          />
        ))}
      </div>
    </Wrapper>
  );
}
