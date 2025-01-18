"use client"
import Image from "next/image"
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import MusicianCard from "@/app/components/ui/MusicianCard";

export default function Home() {
  const musicians = [
    {
      name: "Dave Jazzy",
      role: "Drummer, Music Producer",
      backgroundImage: "/Newest-131.jpg",
      instagramLink: "https://instagram.com/johnlegend",
    },
    {
      name: "GuitMaestro",
      role: "Lead Guitarist",
      backgroundImage: "/Newest-147.jpg",
      instagramLink: "https://instagram.com/johnlegend",
    },
    {
      name: "Mike BSharp",
      role: "Keyboardist, Producer",
      backgroundImage: "/Newest-177.jpg",
      instagramLink: "https://instagram.com/johnlegend",
    },
    {
      name: "Jhay Squid",
      role: "Lead Guitarist, Producer",
      backgroundImage: "/Newest-184.jpg",
      instagramLink: "https://instagram.com/johnlegend",
    },
    {
      name: "Patrick Okrah",
      role: "Keyboardist, Producer",
      backgroundImage: "/Newest-187.jpg",
      instagramLink: "https://instagram.com/johnlegend",
    },
    {
      name: "Osei Poku",
      role: "Keyboardist, Producer",
      backgroundImage: "/Newest-177.jpg",
      instagramLink: "https://instagram.com/johnlegend",
    },
    {
      name: "Test Name",
      role: "Keyboardist, Producer",
      backgroundImage: "/Newest-177.jpg",
      instagramLink: "https://instagram.com/johnlegend",
    },
    {
      name: "Nii Keyz",
      role: "Keyboardist, Producer",
      backgroundImage: "/Newest-177.jpg",
      instagramLink: "https://instagram.com/johnlegend",
    },
    {
      name: "Sir Elorm",
      role: "Keyboardist, Producer",
      backgroundImage: "/Newest-177.jpg",
      instagramLink: "https://instagram.com/johnlegend",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const handleResize = useCallback(() => {
    if (emblaApi) emblaApi.reInit(); // Reinitialize carousel on resize
  }, [emblaApi]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <main className="bg-black text-white mx-auto h-auto p-10">
      {/* Hero Section */}
      <section className="hero h-auto flex flex-col justify-center items-center gap-4 py-10 text-center">
        <h1 className="text-white text-6xl font-semibold">
          Inspiring the Next Generation of Musicians
        </h1>
        <p className="text-white font-normal text-lg w-4/5 md:w-2/3 lg:w-1/2">
          A unique platform where seasoned musicians share their insights,
          perform soul-stirring renditions, and inspire music enthusiasts.
        </p>
        <button className="mt-4 border border-white uppercase px-5 py-3 text-white text-md">
          View Upcoming Events
        </button>
          {/* Carousel Section */}
      <div className="embla w-full px-10 overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {musicians.map((musician) => (
            <div
              key={musician.name}
              className="embla__slide flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33%] p-4"
            >
              <MusicianCard
                name={musician.name}
                role={musician.role}
                backgroundImage={musician.backgroundImage}
                instagramLink={musician.instagramLink}
              />
            </div>
          ))}
        </div>
      </div>
      </section>

    <section className="flex justify-center items-center gap-10">
      <div className="w-1/2">
          <h1>Our Mission: Bridging Generations of Music Enthusiasts
</h1>
        </div>
        <div>
          <Image src="/Newest-147.jpg" width={200} height={200} alt=""/>
        </div>
      </section>

    </main>
  );
}
