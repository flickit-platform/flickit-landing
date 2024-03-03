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
    <nav className="flex items-center justify-between px-24 h-14 relative z-50 max-w-screen-2xl mx-auto">
      <div>
        <Image src="/logo.svg" alt="Flickit" width={110} height={42} />
      </div>
      {/* <div>
                {navItems.map((navItem) =>
                    <FINavLink href={navItem.href} key={navItem.href} className={activeSegment === navItem.activeSeg ? 'active' : ''}>
                        {navItem.title}
                    </FINavLink>
                )}
            </div> */}
      <div>
        <button className="bg-primary text-white py-[6px] px-8 text-base font-semibold tracking-wider rounded-md">
          Get started here!
        </button>
      </div>
    </nav>
  );
}
