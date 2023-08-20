import LocaleSwitcher from '@/components/locale-switcher';
import Nav from '@/components/nav';
import Button from '@/components/ui/button';
import { SparklesIcon } from '@/components/ui/icon';
import Wrapper from '@/components/ui/wrapper';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const { t } = useTranslation();
  const [stick, setStick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 0) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-colors sticky top-0 z-10 ${
        stick ? 'bg-[#04040E] shadow-lg' : ''
      }`}
    >
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
          <LocaleSwitcher />
          <Button
            icon={<SparklesIcon className="w-5 h-5" />}
            className="rounded-full"
          >
            {t('buttons.order')}
          </Button>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
