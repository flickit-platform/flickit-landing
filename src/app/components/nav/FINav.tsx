"use client";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import FINavLink from "./FINavLink";

export default function FINav() {
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
    <nav className="flex items-center justify-between max-sm:px-4 px-24 h-14 relative z-50 mx-auto bg-[#EDF4FC] shadow-md py-8 2xl:py-16">
      <div className="flex gap-2 2xl:gap-8">
        <Image src="/logo.svg" alt="Flickit" width={110} height={42} className="sm:w-[110px] md:w-[110px] lg:w-[110px] 2xl:w-[238px]"  />
        <div className="py-1 px-3 border text-sm 2xl:text-2xl font-bold text-[#D81E5B] border-[#D81E5B] rounded-[100px] bg-[#FDF1F5] flex justify-center items-center">Beta Preview</div>
      </div>
      {/* <div>
                {navItems.map((navItem) =>
                    <FINavLink href={navItem.href} key={navItem.href} className={activeSegment === navItem.activeSeg ? 'active' : ''}>
                        {navItem.title}
                    </FINavLink>
                )}
            </div> */}
      <div>
        <button className="max-sm:hidden bg-primary text-white py-2.5  2xl:py-6 px-6  2xl:px-12 text-base 2xl:text-4xl font-semibold tracking-wider rounded-md">
          Get started here!
        </button>
      </div>
    </nav>
  );
}
