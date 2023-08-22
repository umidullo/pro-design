import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  icon?: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  className,
  children,
  onClick,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={twMerge(
        'transition-all ease-in-out duration-300 capitalize text-lg text-white font-normal bg-transparent border border-white rounded-xl py-[10px] px-4 leading-5 flex flex-row gap-2 items-center justify-between hover:bg-white hover:text-black active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-md',
        className
      )}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
