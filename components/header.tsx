import Nav from '@/components/nav';
import Popover from '@/components/popover';
import Button from '@/components/ui/button';
import { SparklesIcon } from '@/components/ui/icon';
import Wrapper from '@/components/ui/wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const langs = [
  { title: 'UZ', path: 'uz' },
  { title: 'RU', path: 'ru' },
  { title: 'EN', path: 'en' },
];

const Header = () => {
  const [selected, setSelected] = useState(langs[0].title);
  return (
    <header className="sticky top-0 z-10 bg-[#04040E] shadow-lg">
      <Wrapper className="py-4 flex items-center justify-between relative">
        <Link href={'/'}>
          <Image
            src="/logo.png"
            alt={'site logo'}
            width={193}
            height={31}
            quality={100}
            priority={true}
          />
        </Link>
        <Nav />
        <div className="flex gap-3">
          <Popover title={selected} items={langs} />
          <Button
            icon={<SparklesIcon className="w-5 h-5" />}
            className="rounded-full"
          >
            Заказать дизайн
          </Button>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
