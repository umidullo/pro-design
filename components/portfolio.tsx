import PortfolioCard from '@/components/portfolio-card';
import BlockTitle from '@/components/ui/block-title';
import Wrapper from '@/components/ui/wrapper';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Portfolio = ({ posts }: { posts: Record<string, unknown>[] }) => {
  const { t } = useTranslation();

  return (
    <Wrapper className="max-w-[100vw]">
      <BlockTitle>{t('b_titles.recents')}</BlockTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        {posts.map((post: any) => (
          <PortfolioCard
            key={post.id}
            image={post.image}
            title={post.title}
            id={post.id}
            slug={post.slug}
            is_video={post.is_video}
            video={post.video}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Portfolio;
