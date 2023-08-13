import Layout from '@/components/layout';
import BlockTitle from '@/components/ui/block-title';
import Button from '@/components/ui/button';
import { ArrowIcon, PlayIcon } from '@/components/ui/icon';
import Wrapper from '@/components/ui/wrapper';

export default function Home() {
  return (
    <Layout>
      <Wrapper className="flex justify-between">
        <div className="relative bg-blue-900 overflow-hidden w-full h-[calc(100vh-106px)] max-h-[600px] my-4 rounded-3xl flex items-center justify-center">
          <div className="w-1/2 flex items-center flex-col justify-center gap-8 z-[3]">
            <h1 className="font-medium text-4xl uppercase text-center leading-normal">
              разрабатываем и создаем эффективный цифровой опыт
            </h1>
            <Button icon={<PlayIcon className="w-5 h-5 stroke-2" />}>
              Шоурил
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
        <BlockTitle>Наши услуги</BlockTitle>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[calc(100vh-132px)] max-h-[730px]">
          <div className="col-start-1 col-end-2 row-start-1 row-end-3 bg-blue-900 rounded-3xl p-10">
            <h3 className="text-3xl font-semibold">UX/UI дизайн</h3>
            <h4 className="mt-3 mb-6 text-base line-clamp-3">
              Advanced training in executing an effective background inbound
              marketing strategy.
            </h4>
            <Button icon={<ArrowIcon />}>Смотреть</Button>
          </div>
          <div className="col-start-2 col-end-4 row-start-1 row-end-2 bg-blue-900 rounded-3xl p-10">
            <h3 className="text-3xl font-semibold">UX/UI дизайн</h3>
            <h4 className="mt-3 mb-6 text-base line-clamp-3 w-[320px]">
              Advanced training in executing an effective background inbound
              marketing strategy.
            </h4>
            <Button icon={<ArrowIcon />}>Смотреть</Button>
          </div>
          <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-blue-900 rounded-3xl p-10">
            <h3 className="text-3xl font-semibold">UX/UI дизайн</h3>
            <h4 className="mt-3 mb-6 text-base line-clamp-3 w-fit">
              Advanced training in executing an effective background inbound
              marketing strategy.
            </h4>
            <Button icon={<ArrowIcon />}>Смотреть</Button>
          </div>
          <div className="col-start-3 col-end-4 row-start-2 row-end-3 bg-blue-900 rounded-3xl p-10">
            <h3 className="text-3xl font-semibold">UX/UI дизайн</h3>
            <h4 className="mt-3 mb-6 text-base line-clamp-3 w-fit">
              Advanced training in executing an effective background inbound
              marketing strategy.
            </h4>
            <Button icon={<ArrowIcon />}>Смотреть</Button>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <BlockTitle>Последние работы</BlockTitle>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw] max-h-[420px]"></div>
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw] max-h-[420px]"></div>
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw] max-h-[420px]"></div>
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw] max-h-[420px]"></div>
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw] max-h-[420px]"></div>
          <div className="col-span-1 bg-blue-900 rounded-3xl h-[25vw] max-h-[420px]"></div>
        </div>
      </Wrapper>
    </Layout>
  );
}
