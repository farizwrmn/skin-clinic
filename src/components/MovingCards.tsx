"use client";

import Image from "next/image";
import { cn } from "../app/utils";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export const MovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    width: number;
    link: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <>
      <h1 className="text-3xl mt-5 xl:mt-20 font-sergio">Find Us Here</h1>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 w-full overflow-hidden xl:max-w-7xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mt-10",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className="w-[350px] md:w-[450px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 items-center justify-center overflow-hidden"
              key={item.image}
            >
              <Link href={item.link} className="absolute inset-0">
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] items-center justify-center"
                ></div>
                <Image
                  src={item.image}
                  alt={item.image}
                  width={item.width}
                  height={100} // Adjust to the actual height of the image
                  className="object-cover w-full h-fit" // Ensure the image fits perfectly
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
