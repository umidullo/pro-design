import Clients from '@/components/clients';
import Layout from '@/components/layout';
import Portfolio from '@/components/portfolio';
import Promo from '@/components/promo';
import Services from '@/components/services';
import { fetchData } from '@/utils/api/config';
import { getStaticPropsTranslations } from '@/utils/helpers/i18n';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

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
  return (
    <Layout>
      <Promo />
      <Services />
      <Portfolio posts={posts} />
      <Clients />
    </Layout>
  );
}
