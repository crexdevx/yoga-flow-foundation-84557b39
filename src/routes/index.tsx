import { createFileRoute } from "@tanstack/react-router";

import heroPosterImg from "@/assets/yoga-hero-poster.jpg";
import heroWebm from "@/assets/yoga-hero.webm.asset.json";
import heroMp4 from "@/assets/yoga-hero.mp4.asset.json";
import { FloatingHeader } from "@/components/floating-header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "North East Yoga and Meditation Centre" },
      {
        name: "description",
        content:
          "North East Yoga and Meditation Centre — quality training for better living. Yoga, meditation and teacher training classes.",
      },
      { property: "og:title", content: "North East Yoga and Meditation Centre" },
      {
        property: "og:description",
        content: "Quality training for better living. Yoga and meditation classes.",
      },
      { property: "og:image", content: heroPosterImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroPosterImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section
      className="relative aspect-[4/3] max-h-[100svh] w-full overflow-hidden bg-[#5aa7e2]"
      style={{ backgroundImage: `url(${heroPosterImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <video
        className="absolute inset-0 h-full w-full object-contain"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroPosterImg}
      >
        <source src={heroWebm.url} type="video/webm" />
        <source src={heroMp4.url} type="video/mp4" />
      </video>
      <FloatingHeader />
    </section>
  );
}
