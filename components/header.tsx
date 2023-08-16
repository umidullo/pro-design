import LocaleSwitcher from '@/components/locale-switcher';
import Nav from '@/components/nav';
import Button from '@/components/ui/button';
import { SparklesIcon } from '@/components/ui/icon';
import Wrapper from '@/components/ui/wrapper';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { t } = useTranslation();

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
