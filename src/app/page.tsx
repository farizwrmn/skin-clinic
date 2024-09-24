import Bounded from "@/components/Bounded";
import HeroImg from "@/components/HeroImg";
import Hero from "@/components/Hero";
import Desc from "@/components/Desc";
import Card from "@/components/Card";
import { MovingCards } from "@/components/MovingCards";

const images = [
  "/assets/image/salon.jpg",
  "/assets/image/salon1.jpg",
  "/assets/image/salon2.jpg",
];

export default function Home() {
  return (
    <Bounded>
      <Hero images={images} />
      <HeroImg />
      <Desc />
      {/* <Card /> */}
      <MovingCards
        items={[
          { image: "/assets/image/google.png", width: 300, link: "/" },
          { image: "/assets/image/tokped.png", width: 300, link: "/" },
          { image: "/assets/image/insta.png", width: 400, link: "/" },
          { image: "/assets/image/shopee.png", width: 600, link: "/" },
        ]}
      />
    </Bounded>
  );
}
