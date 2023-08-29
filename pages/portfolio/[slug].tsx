import Wrapper from '@/components/ui/wrapper';
import { fetchData } from '@/utils/api/config';
import { getStaticPropsTranslations } from '@/utils/helpers/i18n';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params)
    return {
      notFound: true,
    };

  const data = await fetchData(`posts/${context.params.slug}`, context.locale);
  console.log('constgetServerSideProps:GetServerSideProps= ~ data:', data);
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
  return (
    <>
      <div className="relative w-screen h-[calc(100vh/3*2)] -mt-[74px] [&>img]:object-cover">
        <Image src={'/branding.png'} alt={'main image of work'} fill />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/60 z-0" />
      </div>
      <Wrapper>
        <div className="py-16 max-w-7xl mx-auto">
          <h2 className="mb-3 text-3xl font-medium">О проекте</h2>
          <div className="flex justify-between items-center">
            <h3 className="font-light text-lg w-7/12 a">
              Это кафе ресторанного типа с африканской эстетикой. Заведение
              соединяет в себе яркие цвета и необычные вкусовые сочетания,
              которые являются визитной карточкой заведения. Слово «roots» в
              переводе с английского означает «корни». Исторические корни
              человечества уходят далеко в Африку, именно эта теория и легла в
              основу концепта заведения. Многослойность логотипа – это множество
              корней и срез дерева с множеством колец внутри, которые
              символизируют богатство истории, ее витки.
            </h3>
            <ul className="w-80 space-y-3 [&>span]:text-lg">
              <li className="flex justify-between items-center">
                <span>Заказчик</span> <span>PlanBaby clinic</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Категория</span> <span>UX/UI дизайн</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Год</span> <span>2022</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Услуги</span> <span>Разработка сайта</span>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <div
        className="px-4 mb-10 space-y-4 lg:space-y-5"
        dangerouslySetInnerHTML={{ __html: data.body }}
      />
      <div className="w-full px-4 lg:px-0 lg:w-[700px] mx-auto py-12">
        <h4 className="text-center text-3xl font-medium mb-3">O проекте</h4>
        <p className=" text-center text-lg font-light">
          Это кафе ресторанного типа с африканской эстетикой. Заведение
          соединяет в себе яркие цвета и необычные вкусовые сочетания, которые
          являются визитной карточкой заведения. Слово «roots» в переводе с
          английского означает «корни». Исторические корни человечества уходят
          далеко в Африку, именно эта теория и легла в основу концепта
          заведения. Многослойность логотипа – это множество корней и срез
          дерева с множеством колец внутри, которые символизируют богатство
          истории, ее витки.
        </p>
      </div>
    </>
  );
}
