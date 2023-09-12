import PortfolioCard from '@/components/portfolio-card';
import BlockTitle from '@/components/ui/block-title';
import { ArrowIcon } from "@/components/ui/icon";
import Wrapper from "@/components/ui/wrapper";
import { Button } from "@/shared/ui";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

function Portfolio({
  posts,
}: {
  posts: Record<string, unknown>[];
}): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Wrapper className="max-w-[100vw]">
      <BlockTitle>{t("b_titles.recents")}</BlockTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        {posts.map((post: any) => (
          <PortfolioCard
            key={post.slug}
            image={post.image}
            title={post.title}
            id={post.id}
            // slug={post.slug}
            slug={post.id}
            categoryName={post.categoryName}
            video={post.video}
          />
        ))}
      </div>
      <Button
        className="mx-auto"
        href="/portfolio"
        icon={<ArrowIcon className="w-5 h-5 stroke-2" />}
      >
        {t("buttons.portfolio")}
      </Button>
    </Wrapper>
  );
}

export default Portfolio;
