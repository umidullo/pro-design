import Link from 'next/link';
import Image from 'next/image';

type PortfolioCardType = {
  image: string;
  title: string;
  id: number;
  slug: string;
  is_video: boolean;
  video?: string;
};

const PortfolioCard = ({
  image,
  title,
  id,
  slug,
  is_video,
  video,
}: PortfolioCardType) => {
  return (
    <Link
      key={id}
      className="relative col-span-1 rounded-lg aspect-[2/1] flex items-end justify-start overflow-hidden"
      href={'/portfolio/' + slug}
    >
      {!!is_video ? (
        <video
          className="absolute w-full h-full object-cover"
          loop
          autoPlay
          muted
        >
          <source src={`https://pro-design.team/storage/${video}`} />
        </video>
      ) : (
        <Image
          src={`https://pro-design.team/storage/${image}`}
          alt={'image'}
          fill
          sizes="100%"
          className="w-full h-full object-cover"
        />
      )}
      <div className="p-4 md:p-10 z-[2] md:opacity-0 w-full h-full bg-gradient-to-b from-primary/30 to-primary/60 flex items-end transition-opacity md:hover:opacity-100">
        <div className="max-w-sm">
          <p className="text-base mb-1 lg:mb-2">Website</p>
          <h4 className="text-xl lg:text-3xl font-semibold lg:font-medium">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
