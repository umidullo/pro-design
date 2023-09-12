import LocaleSwitcher from '@/components/locale-switcher';
import MobileNav from '@/components/mobile-nav';
import Nav from '@/components/nav';
import { BurgerIcon, CloseIcon, SparklesIcon } from "@/components/ui/icon";
import Wrapper from "@/components/ui/wrapper";
import { Button } from "@/shared/ui";
import { Dialog } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

const Header = () => {
  const { t } = useTranslation();
  const [stick, setStick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 0) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  const formHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <header
      className={`z-10 transition-all ${
        isOpen
          ? "fixed w-screen h-screen bg-black"
          : `
            sticky transition-colors top-0 ${
              stick ? "shadow-lg backdrop-blur-lg bg-primary/50" : ""
            } 
          `
      }`}
    >
      <Wrapper className="py-4 flex items-center justify-between relative flex-col lg:flex-row">
        <div className="flex w-full justify-between items-center lg:w-fit">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt={"site logo"}
              width={193}
              height={31}
              quality={100}
              priority={true}
            />
          </Link>
          <div className="flex items-center lg:hidden">
            <LocaleSwitcher />
            <button
              className="items-center pl-2"
              onClick={() => setIsOpen((state) => !state)}
            >
              {isOpen ? <CloseIcon /> : <BurgerIcon />}
            </button>
          </div>
        </div>
        <Nav />
        <MobileNav isOpen={isOpen} />
        <div className="hidden lg:flex gap-3">
          <LocaleSwitcher />
          <Button
            onClick={() => setIsModalOpen(true)}
            icon={<SparklesIcon className="w-5 h-5" />}
            className="rounded-full"
          >
            {t("buttons.order")}
          </Button>
        </div>
        {/* <div
          className={`gap-8 mt-6 transition-all ${
            isOpen ? 'flex mb-9' : 'hidden'
          }`}
        >
          <Link
            href="https://www.facebook.com/prodesignofficial"
            target="_blank"
          >
            <SocialIcon
              name="fb"
              className="w-8 h-8 fill-white transition-all"
            />
          </Link>
          <Link href="https://t.me/prodesign_team" target="_blank">
            <SocialIcon
              name="tg"
              className="w-8 h-8 fill-white transition-all"
            />
          </Link>
          <Link
            href="https://www.instagram.com/prodesign_team/"
            target="_blank"
          >
            <SocialIcon
              name="ig"
              className="w-8 h-8 fill-white transition-all"
            />
          </Link>
        </div> */}
      </Wrapper>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <Dialog.Panel as="div" className="bg-[#121212] w-1/3 p-9 rounded-2xl">
            <p className="text-lg font-medium">
              Напишите нам, наши специалисты свяжутся с вами в ближайшее время
            </p>
            <form
              className="flex flex-col w-full gap-6 mt-8"
              onSubmit={formHandler}
            >
              <input
                type="text"
                placeholder="Имя*"
                className="text-lg text-white font-normal bg-transparent border border-white rounded-xl py-[10px] px-4 leading-5 
                 active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-xl"
              />
              <input
                type="number"
                placeholder="Телефон*"
                className="text-lg text-white font-normal bg-transparent border border-white rounded-xl py-[10px] px-4 leading-5 
                 active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-xl"
              />
              <textarea
                placeholder="Пару слов о проекте...*"
                className="text-lg text-white font-normal bg-transparent border border-white rounded-xl py-[10px] px-4 leading-5 
                 active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-xl"
              />
              <Button type="submit" className="justify-center">
                Submit
              </Button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;
