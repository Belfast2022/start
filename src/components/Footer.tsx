import React from "react";
import MaxWidthWrapper from "./wrappers/MaxWidthWrapper";
import Link from "next/link";

const links = [
  {
    platform: "即刻",
    icon: null,
    link: "https://okjk.co/Mx4XUR",
  },
  {
    platform: "X",
    icon: null,
    link: "https://twitter.com/HSawana9",
  },
  {
    platform: "Github",
    icon: null,
    link: "https://github.com/waitlistSawana",
  },
];

const Footer = () => {
  return (
    <div className="h-24 md:h-24 w-full flex items-center bg-zinc-800">
      <MaxWidthWrapper className="text-zinc-300">
        <div className="flex justify-center gap-3">
          {links.map((link, linkKey) => (
            <div key={linkKey} className="">
              <Link className="underline" href={link.link}>{link.platform}</Link>
            </div>
          ))}
        </div>
        <div>products</div>
        <div>@2024 @Sawana All right reserved </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
