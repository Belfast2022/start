import React from "react";
import MaxWidthWrapper from "./wrappers/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-b border-zinc-200">
          {/* menu */}
          <div className="flex gap-3 mr-4 w-[33vh] justify-start">
            <div>
              <Link href="/#">
                <span>Docs</span>
              </Link>
            </div>
            <div>
              <Link href="/#">
                <span>Pricing</span>
              </Link>
            </div>
          </div>
          {/* logo */}
          <div className="flex w-[33vh] justify-center">
            <Link href="/" className="flex z-40 font-semibold">
              <Image
                src="vercel.svg"
                alt="logo of website"
                width={120}
                height={120}
              />
            </Link>
          </div>
          {/* get start */}
          <div className="flex w-[33vh] justify-end">
            <Link href="/#">
              <Button>
                <span className="text-base">Get Started</span>
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
