import { cn } from "@/shared/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

const buttonVariants = cva(
  "transition-all ease-in-out duration-300 text-lg font-normal rounded-xl",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-white border border-white hover:bg-white hover:text-black active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-md",
      },
      size: {
        default:
          "w-fit py-[10px] px-4 leading-5 flex flex-row items-center justify-between",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = {
  href?: string;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, href, icon, children, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
          {icon}
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className, size, variant }))}
        {...props}
      >
        {children}
        {icon}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
