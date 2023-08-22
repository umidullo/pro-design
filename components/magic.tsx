import Wrapper from '@/components/ui/wrapper';
import { useTranslation } from 'next-i18next';

//DELETE
const Magic = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <p className="text-lg md:text-4xl lg:text-8xl uppercase font-black text-center">
        {t('magic')}
      </p>
    </Wrapper>
  );
};

export default Magic;
