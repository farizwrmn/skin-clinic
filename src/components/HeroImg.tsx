import Image from "next/image";
import React from "react";

type Props = {};

export default function HeroImg({}: Props) {
  return (
    <div className="absolute top-3/4 left-50 xl:-translate-x-3/4 -translate-y-1/2 xl:flex mt-5 md:hidden hidden">
      <Image
        src="/assets/image/lady.png"
        alt="salon"
        width={500}
        height={500}
      />
    </div>
  );
}
