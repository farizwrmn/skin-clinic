import Image from "next/image";
import React from "react";

type Props = {};

export default function HeroImg({}: Props) {
  return (
    <div className="absolute top-2/3 left-50 xl:-translate-x-3/4 -translate-y-1/2 flex">
      <Image
        src="/assets/image/lady.png"
        alt="salon"
        width={500}
        height={500}
      />
    </div>
  );
}
