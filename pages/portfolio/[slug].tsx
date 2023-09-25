import Wrapper from '@/components/ui/wrapper';
import { fetchData } from '@/utils/api/config';
import { getStaticPropsTranslations } from '@/utils/helpers/i18n';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params)
    return {
      notFound: true,
    };

  const data = await fetchData(`posts/${context.params.slug}`, context.locale);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      ...(await getStaticPropsTranslations(context.locale ?? 'ru')),
    },
  };
};

export default function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative h-[calc(100vh/3*2)] -mt-[74px] [&>img]:object-cover">
        {data.video ? (
          <video
            className="absolute w-full h-full object-cover"
            loop
            autoPlay
            muted
            poster={`https://prodesignstudio.uz/storage/${data.image}`}
          >
            <source src={`https://prodesignstudio.uz/storage/${data.video}`} />
          </video>
        ) : (
          <Image
            src={`https://prodesignstudio.uz/storage/${data.image}`}
            alt={"main image of work"}
            fill
          />
        )}
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/60 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h2 className="text-3xl lg:text-5xl font-semibold text-center">
            {data.title}
          </h2>
        </div>
      </div>
      <Wrapper>
        <div className="py-16 max-w-7xl mx-auto">
          <h3 className="mb-3 text-2xl lg:text-3xl font-medium text-center lg:text-start">
            {t("portfolio_page.about")}
          </h3>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
            <p className="font-light text-base lg:text-lg w-full lg:w-7/12 text-justify lg:text-left">
              {data.excerpt}
            </p>
            <ul className="w-full lg:max-w-xs space-y-3 [&>li>span]:text-base [&>li>span:lg]:text-lg">
              <li className="flex justify-between items-start">
                <span>{t("portfolio_page.client")}</span>
                <div className="flex justify-end flex-col items-end">
                  {data.clients.map((author: string, i: number) => (
                    <span key={i}>{author}</span>
                  ))}
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span>{t("portfolio_page.category")}</span>
                <span>{data.category_name ?? ""}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>{t("portfolio_page.date")}</span>{" "}
                <span>{data.date.slice(0, 4)}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>{t("portfolio_page.service")}</span>
                <span>{data.content}</span>
              </li>
              <li className="flex justify-between items-start">
                <span>{t("portfolio_page.author")}</span>
                <div className="flex justify-end flex-col items-end">
                  {data.authors.map((author: string, i: number) => (
                    <span key={i}>{author}</span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <div
        className="px-4 mb-10 space-y-4 lg:space-y-5"
        dangerouslySetInnerHTML={{ __html: data.body }}
      />
    </>
  );
}
