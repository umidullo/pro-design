import Portfolio from '@/components/portfolio';
import { fetchData } from '@/utils/api/config';
import { getStaticPropsTranslations } from '@/utils/helpers/i18n';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetchData({ path: "posts", locale: context.locale });

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
  return (
    <>
      <Portfolio posts={posts} />
    </>
  );
}
