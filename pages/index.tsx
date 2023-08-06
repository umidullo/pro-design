import Header from '@/components/header';
import Button from '@/components/ui/button';
import { SparklesIcon } from '@/components/ui/icon';
import Wrapper from '@/components/wrapper';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${inter.className}`}>
        <Wrapper className="flex justify-between">
          <Button
            icon={<SparklesIcon className="w-5 h-5" />}
            className="rounded-full"
          >
            Заказать дизайн
          </Button>
        </Wrapper>
      </main>
    </>
  );
}
