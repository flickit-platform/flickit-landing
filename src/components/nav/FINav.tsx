"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import FINavLink from "./FINavLink";
import Link from "next/link";
import { getRedirectUrl } from "@/utils/constants";
import {Trans} from "react-i18next";

export default function FINav() {
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    setRedirectUrl(getRedirectUrl());
  }, []);
  const navItems = [
    {
      title: "Home",
      href: "/",
      activeSeg: null,
    },
    {
      title: "Docs",
      href: "/docs",
      activeSeg: "docs",
    },
    {
      title: "Assessment kits",
      href: "/assessment-kits",
      activeSeg: "assessment-kits",
    },
    {
      title: "Expert Groups",
      href: "/expert-groups",
      activeSeg: "expert-groups",
    },
  ];

  const activeSegment = useSelectedLayoutSegment();

  return (
    <nav className="flex items-center justify-between max-sm:px-4 px-24 h-8 sm:h-[4.5rem] relative z-50 mx-auto bg-lightBg shadow-md">
      <div className="flex justify-center items-center gap-2 2xl:gap-8">
        <Image
            src="/Logo-dark.svg"
            alt="Flickit"
            width={144}
            height={50}
            className=" h-6 sm:h-12   w-[4.375rem] sm:w-[6.875rem]  2xl:w-[10rem]"
        />
        <div
            className="hidden sm:flex justify-center items-center py-1 px-3 border sm:h-6 text-sm 2xl:text-xl font-bold text-[#D81E5B] border-[#D81E5B] rounded-[100px] bg-[#FDF1F5]">
          <Trans i18nKey={"betaPreview"}/>
        </div>
        <div className="flex sm:hidden justify-center items-center border border-solid border-lightRed text-lightRed text-[0.5rem] font-bold font-sansation rounded-[0.25rem] w-[1.56rem] ">
          <Trans i18nKey={"beta"}/>
        </div>
      </div>
      {/* <div>
                {navItems.map((navItem) =>
                    <FINavLink href={navItem.href} key={navItem.href} className={activeSegment === navItem.activeSeg ? 'active' : ''}>
                        {navItem.title}
                    </FINavLink>
                )}
            </div> */}
      <div className="hidden sm:flex justify-center items-center gap-8">
        <div className="flex justify-center items-center gap-4">
          <Image
              src={"/search_icon.svg"}
              alt={"search_icon"}
              width={15}
              height={15}
          />
          <div className={"text-grayLight text-base"}>En</div>
        </div>
        <Link href={redirectUrl} rel="noopener noreferrer">
          <button
              className={`bg-blueLight text-white sm:h-10 sm:w-32 py-[0.156rem] px-[0.375rem]   sm:px-4 text-[0.219rem] sm:text-[0.875rem] leading-[0.313rem]  2xl:px-8 font-medium tracking-wider rounded-[6.25rem] h-[0.85rem]`}>
            <Trans i18nKey={"openFlickit"}/>
          </button>
        </Link>
      </div>
      <div className="flex sm:hidden justify-center items-center  w-[5.75rem] h-[1.25rem] rounded-[6.25rem] bg-primaryFixed text-primaryFixedVariant px-4 whitespace-nowrap text-[0.688rem] font-semibold font-sansation ">
        <Trans i18nKey={"getStart"}/>
      </div>
    </nav>
  );
}
