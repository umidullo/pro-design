import LocaleSwitcher from '@/components/locale-switcher';
import MobileNav from '@/components/mobile-nav';
import Nav from '@/components/nav';
import { BurgerIcon, CloseIcon, SparklesIcon } from "@/components/ui/icon";
import Wrapper from "@/components/ui/wrapper";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type FormInputs = {
  fullName: string;
  phoneNumber: number;
  summary: string;
};

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const config = {
    baseUrl: "https://api.telegram.org/",
    method: "sendMessage",
    path: process.env.NEXT_PUBLIC_PATH,
    chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
  };

  const url = `${config.baseUrl}${config.path}${config.method}`;

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const text = `<b>#message</b>\n<b>Full name: ${data.fullName}</b>\n<b>Phone number: ${data.phoneNumber}</b>\n<b>Message: ${data.summary}</b>`;
    const params = { chat_id: config.chat_id, parse_mode: "HTML", text };
    const response = await axios.get(url, { params });
    if (response.data.ok) {
      alert("thanks for your feedback");
    }
    reset();
    setIsModalOpen(false);
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-fit py-[10px] px-4 leading-5 flex flex-row items-center justify-between mx-auto bg-transparent text-white border border-white hover:bg-white hover:text-black active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-md transition-all ease-in-out duration-150 text-lg font-normal rounded-full"
          >
            {t("buttons.order")}
            <SparklesIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <input
                  {...register("fullName", { required: true })}
                  type="text"
                  placeholder="Имя*"
                  className={twMerge(
                    `text-lg text-white font-normal bg-transparent border border-white rounded-xl py-[10px] px-4 leading-5 active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-xl ${
                      errors.fullName ? "border-red-500" : ""
                    }`
                  )}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-xs mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  {...register("phoneNumber", { required: true })}
                  type="number"
                  placeholder="Телефон*"
                  className={twMerge(
                    `text-lg text-white font-normal bg-transparent border border-white rounded-xl py-[10px] px-4 leading-5 active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-xl ${
                      errors.phoneNumber ? "border-red-500" : ""
                    }`
                  )}
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-xs mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <textarea
                  {...register("summary", { required: true })}
                  placeholder="Пару слов о проекте...*"
                  className={twMerge(
                    `text-lg text-white font-normal bg-transparent border border-white rounded-xl py-[10px] px-4 leading-5 active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-xl ${
                      errors.summary ? "border-red-500" : ""
                    }`
                  )}
                />
                {errors.summary && (
                  <span className="text-red-500 text-xs mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="rounded-xl w-fit py-[10px] px-4 leading-5 flex flex-row items-center justify-between mx-auto bg-transparent text-white border border-white hover:bg-white hover:text-black active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:rounded-md transition-all ease-in-out duration-150 text-lg font-normal "
              >
                Submit
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;
