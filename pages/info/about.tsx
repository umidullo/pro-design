import Magic from '@/components/magic';
import { getStaticPropsTranslations } from '@/utils/helpers/i18n';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await getStaticPropsTranslations(context.locale ?? 'ru')),
    },
  };
};

export default function Page() {
  return <Magic />;
}
