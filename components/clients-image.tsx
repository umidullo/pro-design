import Image from 'next/image';

const ClientsImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="client"
      sizes="100vw"
      width={0}
      height={0}
      quality={100}
      className="h-16 w-auto mx-5 pointer-events-none select-none"
    />
  );
};

export default ClientsImage;
