import PortfolioCard from "@/components/portfolio-card";
import BlockTitle from "@/components/ui/block-title";
import Wrapper from "@/components/ui/wrapper";
import { fetchData } from "@/utils/api/config";
import { getStaticPropsTranslations } from "@/utils/helpers/i18n";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetchData({
    path: "posts",
    locale: context.locale,
    params: {
      ...context.query,
    },
  });

  return {
    props: {
      posts,
      query: {
        ...context.query,
        page: context.query.page || 1,
      },
      ...(await getStaticPropsTranslations(context.locale ?? "ru")),
    },
  };
};

export default function Page({
  posts,
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();

  const router = useRouter();

  const setQueryParam = (page: string) => {
    router.push({
      pathname: router.pathname,
      query: { ...query, page: page },
    });
  };

  return (
    <Wrapper className="max-w-[100vw] pb-10">
      <BlockTitle>{t("b_titles.recents")}</BlockTitle>

      {posts.message ? (
        <p className="text-center">{posts.message}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
            {posts.data.map((post: any) => (
              <PortfolioCard
                key={post.slug}
                image={post.image}
                title={post.title}
                id={post.id}
                slug={post.id}
                // slug={post.slug}
                categoryName={post.categoryName}
                video={post.video}
              />
            ))}
          </div>
          {query.page && posts.pagination.totalPages ? (
            <div className="mt-20 w-full flex justify-center text-white">
              <ReactPaginate
                breakLabel={"..."}
                nextLabel={<Arrow className="w-5 h-5 rotate-180" />}
                pageRangeDisplayed={5}
                pageCount={posts.pagination.totalPages}
                initialPage={Number(query.page) - 1}
                onPageChange={({ selected }) =>
                  setQueryParam(`${selected + 1}`)
                }
                previousLabel={<Arrow className="w-5 h-5" />}
                pageLinkClassName="w-full h-full flex justify-center items-center text-[13px] font-semibold  border border-white/40 rounded-lg font-sans hover:bg-white/10"
                pageClassName="w-8 h-8"
                activeLinkClassName="bg-white text-black hover:text-white"
                containerClassName="flex gap-1"
                previousClassName="w-8 h-8  border border-white/40 rounded-lg font-sans hover:bg-white/10"
                nextClassName="w-8 h-8  border border-white/40 rounded-lg font-sans hover:bg-white/10"
                disabledClassName="border border-white/5 text-white/10"
                previousLinkClassName="w-full h-full flex items-center justify-center"
                nextLinkClassName="w-full h-full flex items-center justify-center"
                renderOnZeroPageCount={null}
              />
            </div>
          ) : null}
        </>
      )}
    </Wrapper>
  );
}

const Arrow = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.04858 12L10 11.06L6.90958 8L10 4.94L9.04858 4L5 8L9.04858 12Z"
      fill="currentColor"
    />
  </svg>
);
