"use client"
import Image from "next/image"
import Link from "next/link"
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
      role: "Bass Guitarist, Producer",
      backgroundImage: "/Newest-160.jpg",
      instagramLink: "https://instagram.com/johnlegend",
    },
    {
      name: "Nii Keyz",
      role: "Keyboardist, Producer",
      backgroundImage: "/nii.jpg",
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
    <main className="bg-black text-white mx-auto h-auto p-10 space-y-24">
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

    <section className="flex justify-center items-center gap-36">
      <div className="w-1/2 flex flex-col gap-4">
          <h1 className=" text-white text-3xl font-bold"> 
           <span className="bg-orange-500 rounded-xl p-1">
           🎶
            </span> 
             Our Mission: Bridging Generations of Music Enthusiasts
</h1>
<p className="leading-8 text-lg font-extralight">
At The Musician's Corner, we believe music has the power to connect, inspire, and transform. Our initiative brings together renowned musicians from diverse genres to share their experiences, conduct workshops, and perform unforgettable renditions.

Through live sessions, interactive workshops, and online engagements, we aim to:

Inspire the next generation of musicians.
Offer a platform for mentorship and skill-sharing.
Celebrate the universal language of music.
Join us as we build a community of passionate music lovers and creators.
</p>
        </div>
        <div className=" flex flex-col justify-start items-start">
          <Image src="/ceo.jpg" width={300} height={300} alt="" className="rounded-lg"/>
          <span className="text-white font-bold italic text-lg">Godfred Ababio, CEO </span>
        </div>
      </section>

<section className="flex flex-col justify-center items-center gap-4">
<h2 className="text-white text-4xl font-semibold ">Upcoming {" "} 
  <span className="text-orange-500 font-bold">
  Events & Sessions
    </span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
      <div className="flex flex-col justify-start items-start gap-4">
    <Image src="/flier-1.jpg" width={300} height={300} alt="" className="rounded-lg"/>
    <span className="text-2xl font-medium">The Tiny Desk</span>
    <button className="text-white border border-white px-10 py-2 hover:bg-orange-500 hover:border-none transition-all">
      <Link href="">Register</Link>
      </button>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
      <Image src="/flier-2.jpg" width={300} height={300} alt="" className="rounded-lg"/>
      <span className="text-2xl font-medium">The Change Experience</span>
    <button className="text-white border border-white px-10 py-2 hover:bg-orange-500 hover:border-none transition-all">
      <Link href="">Register</Link>
      </button>
      </div>

    </div>
</section>

<section className="flex flex-col justify-center items-center gap-4">
<h2 className="text-4xl font-semibold">Gallery</h2>
<p className="text-gray-200 font-medium">Here are some pictures from some our past events</p>
<div className="flex flex-col justify-start items-start gap-10 w-full">
<div>
  <span className="bg-orange-500 px-5 py-2 ">Musician's Corner Virtual Room Episode 1</span>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
    </div>
  </div>
<div>
  <span className="bg-orange-500 px-5 py-2 ">Musician's Corner Virtual Room Episode 2</span>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
    </div>
  </div>
<div>
  <span className="bg-orange-500 px-5 py-2 ">Mixing and Mastering Class</span>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
    </div>
  </div>
<div>
  <span className="bg-orange-500 px-5 py-2 ">Musician's Hangout</span>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
    </div>
  </div>
</div>

</section>
    </main>
  );
}
