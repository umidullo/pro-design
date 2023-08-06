import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png';
import Wrapper from '@/components/wrapper';
import Button from '@/components/ui/button';
import { SparklesIcon } from '@/components/ui/icon';

const nav = [
  {
    path: '/',
    title: 'Главная',
    sub_menu: [],
  },
  {
    path: 'services',
    title: 'Услуги',
    sub_menu: [],
  },
  {
    path: 'portfolio',
    title: 'Работы',
    sub_menu: [],
  },
  {
    path: 'about',
    title: 'О нас',
    sub_menu: [],
  },
  {
    path: 'contacts',
    title: 'Контакты',
    sub_menu: [],
  },
];

const Header = () => {
  return (
    <header>
      <Wrapper className="my-11 flex items-center justify-between">
        <Link href={'/'}>
          <Image
            src={Logo}
            alt={'site logo'}
            height={31}
            quality={100}
            priority={true}
          />
        </Link>
        <nav className="w-fit flex items-center gap-16">
          {nav.map((item) => (
            <Link href={item.path} key={item.path} className="text-white">
              {item.title}
            </Link>
          ))}
        </nav>
        <div>
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
