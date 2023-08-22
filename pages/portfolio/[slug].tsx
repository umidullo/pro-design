import Magic from '@/components/magic';
import { getStaticPropsTranslations } from '@/utils/helpers/i18n';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params)
    return {
      notFound: true,
    };

  // const data = await fetchData(`/menu/${context.params.slug}`, context.locale);
  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      ...(await getStaticPropsTranslations(context.locale ?? 'ru')),
    },
  };
};

export default function Page() {
  return <Magic />;
}
