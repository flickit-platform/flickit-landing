"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import FINavLink from "./FINavLink";
import Link from "next/link";
import { getRedirectUrl } from "../constants";
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
    <nav className="flex items-center justify-between max-sm:px-4 px-24 h-14 relative z-50 mx-auto bg-[#EDF4FC] shadow-md py-8 2xl:py-12">
      <div className="flex gap-2 2xl:gap-8">
        <Image
          src="/logo.svg"
          alt="Flickit"
          width={110}
          height={42}
          className="sm:w-[110px] md:w-[110px] lg:w-[110px] 2xl:w-[174px]"
        />
        <div className="py-1 px-3 border text-sm 2xl:text-xl font-bold text-[#D81E5B] border-[#D81E5B] rounded-[100px] bg-[#FDF1F5] flex justify-center items-center">
          Beta Preview
        </div>
      </div>
      {/* <div>
                {navItems.map((navItem) =>
                    <FINavLink href={navItem.href} key={navItem.href} className={activeSegment === navItem.activeSeg ? 'active' : ''}>
                        {navItem.title}
                    </FINavLink>
                )}
            </div> */}
      <div>
        <Link href={redirectUrl} rel="noopener noreferrer">
          <button className="max-sm:hidden bg-primary text-white py-2.5  2xl:py-4 px-4  2xl:px-8 text-base 2xl:text-2xl font-semibold tracking-wider rounded-md">
            Get started here!
          </button>
        </Link>
      </div>
    </nav>
  );
}
