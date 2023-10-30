import PortfolioCard from '@/components/portfolio-card';
import BlockTitle from '@/components/ui/block-title';
import { ArrowIcon } from "@/components/ui/icon";
import Wrapper from "@/components/ui/wrapper";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

function Portfolio({
  posts,
}: {
  posts: {
    data: Record<string, unknown>[];
  };
}): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Wrapper className="max-w-[100vw]">
      <BlockTitle>{t("b_titles.recents")}</BlockTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        {posts.data.map((post: any) => (
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
      <Link
        href="/portfolio?page=1"
        className="rounded-xl w-fit py-[10px] px-4 leading-5 flex flex-row items-center justify-between mx-auto bg-transparent text-white border border-white hover:bg-white hover:text-black active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-md transition-all ease-in-out duration-150 text-lg font-normal "
      >
        {t("buttons.portfolio")}
        <ArrowIcon className="w-5 h-5 stroke-2 ml-2" />
      </Link>
    </Wrapper>
  );
}

export default Portfolio;
