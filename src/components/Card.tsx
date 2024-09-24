import Image from "next/image";
import React from "react";

const images = [
  "/assets/image/google.png",
  "/assets/image/tokped.png",
  "/assets/image/insta.png",
  "/assets/image/shopee.png",
];

function Card() {
  return (
    <div className="grid grid-cols-4 gap-4 items-center mt-20 xl:mt-10 w-full">
      {images.map((src, index) => (
        <div key={index}>
          <Image src={src} alt="salon" width={300} height={300} />
        </div>
      ))}
    </div>
  );
}

export default Card;
