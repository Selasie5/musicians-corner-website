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
      instagramLink: "https://www.instagram.com/dave_jazzi/",
    },
    {
      name: "GuitMaestro",
      role: "Lead Guitarist",
      backgroundImage: "/Newest-147.jpg",
      instagramLink: "https://www.instagram.com/guitmaestro/",
    },
    {
      name: "Mike BSharp",
      role: "Keyboardist, Producer",
      backgroundImage: "/Newest-177.jpg",
      instagramLink: "https://www.instagram.com/mike_bsharp/",
    },
    {
      name: "Jhay Squid",
      role: "Lead Guitarist, Producer",
      backgroundImage: "/Newest-184.jpg",
      instagramLink: "https://www.instagram.com/jhay_squid/",
    },
    {
      name: "Patrick Okrah",
      role: "Keyboardist, Producer",
      backgroundImage: "/Newest-187.jpg",
      instagramLink: "https://www.instagram.com/patrickokrah/",
    },
    {
      name: "Osei Poku",
      role: "Bass Guitarist, Producer",
      backgroundImage: "/Newest-160.jpg",
      instagramLink: "https://www.instagram.com/oseipoku_emmanuel/",
    },
    {
      name: "Nii Keyz",
      role: "Keyboardist, Producer",
      backgroundImage: "/nii.jpg",
      instagramLink: "https://www.instagram.com/nii.keyz_official/",
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
        <h1 className="text-white text-6xl font-semibold inview">
          Inspiring the Next Generation of Musicians
        </h1>
        <p className="text-white font-normal text-lg w-4/5 md:w-2/3 lg:w-1/2 inview">
          A unique platform where seasoned musicians share their insights,
          perform soul-stirring renditions, and inspire music enthusiasts.
        </p>
        <button className="mt-4 border border-white uppercase px-5 py-3 text-white text-md inview">
          <Link href="/#events"
>
View Upcoming Events
  </Link>         
        </button>
          {/* Carousel Section */}
      <div className="embla w-full px-10 overflow-hidden inview" ref={emblaRef}>
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

    <section className="flex flex-col md:flex-row justify-center items-center gap-36" id="about">
      <div className="md:w-1/2 w-full flex flex-col gap-4">
          <h1 className=" text-white text-3xl font-bold inview"> 
           <span className="bg-orange-500 rounded-xl p-1">
           🎶
            </span> 
             Our Mission: Bridging Generations of Music Enthusiasts
</h1>
<p className="leading-8 text-lg font-extralight inview">
At The Musician&apos;s Corner, we believe music has the power to connect, inspire, and transform. Our initiative brings together renowned musicians from diverse genres to share their experiences, conduct workshops, and perform unforgettable renditions.

Through live sessions, interactive workshops, and online engagements, we aim to:

Inspire the next generation of musicians.
Offer a platform for mentorship and skill-sharing.
Celebrate the universal language of music.
Join us as we build a community of passionate music lovers and creators.
</p>
        </div>
        <div className=" flex flex-col justify-start items-start inview">
          <Image src="/ceo.jpg" width={300} height={300} alt="" className="rounded-lg"/>
          <span className="text-white font-bold italic text-lg">Godfred Ababio, CEO </span>
        </div>
      </section>

<section className="flex flex-col justify-center items-center gap-4" id="events">
<h2 className="text-white text-4xl font-semibold inview ">Upcoming {" "} 
  <span className="text-orange-500 font-bold">
  Events & Sessions
    </span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 inview">
      <div className="flex flex-col justify-start items-start gap-4">
    <Image src="/flier-1.jpg" width={300} height={300} alt="" className="rounded-lg"/>
    <span className="text-2xl font-medium">The Tiny Desk</span>
    <button className="text-white border border-white px-10 py-2 hover:bg-orange-500 hover:border-none transition-all">
      <Link href="">Register</Link>
      </button>
      </div>
      <div className="flex flex-col justify-start items-start gap-4 inview">
      <Image src="/flier-2.jpg" width={300} height={300} alt="" className="rounded-lg"/>
      <span className="text-2xl font-medium">The Change Experience</span>
    <button className="text-white border border-white px-10 py-2 hover:bg-orange-500 hover:border-none transition-all">
      <Link href="">Register</Link>
      </button>
      </div>

    </div>
</section>

<section className="flex flex-col justify-center items-center gap-4" id="gallery">
<h2 className="text-4xl font-semibold inview">Gallery</h2>
<p className="text-gray-200 font-medium inview">Here are some pictures from some our past events</p>
<div className="flex flex-col justify-start items-start gap-10 w-full">
<div className="flex flex-col justify-start items-start gap-5">
  <span className="bg-orange-500 px-5 py-2 inview">Musician&apos;s Corner Virtual Room Episode 1</span>
  <div className="flex flex-wrap gap-10 inview">
    <Image src="/Newest-187.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-185.jpg" width={200} height={200} alt=""/>
    <Image src="/Newest-184.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-183.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-183.jpg" width={200} height={200} alt="" />
    </div>
  </div>
<div className="flex flex-col justify-start items-start gap-5">
  <span className="bg-orange-500 px-5 py-2 inview">Musician&apos;s Corner Virtual Room Episode 2</span>
    <div className="flex flex-wrap gap-10 inview">
    <Image src="/Newest-187.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-185.jpg" width={200} height={200} alt=""/>
    <Image src="/Newest-184.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-183.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-183.jpg" width={200} height={200} alt="" />
    </div>
  </div>
<div className="flex flex-col justify-start items-start gap-5">
  <span className="bg-orange-500 px-5 py-2 inview ">Mixing and Mastering Class</span>
  <div className="flex flex-wrap gap-10 inview">
  <Image src="/Newest-187.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-185.jpg" width={200} height={200} alt=""/>
    <Image src="/Newest-184.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-183.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-183.jpg" width={200} height={200} alt="" />
    </div>
  </div>
<div className="flex flex-col justify-start items-start gap-5">
  <span className="bg-orange-500 px-5 py-2 inview ">Musician&apos;s Hangout</span>
  <div className="flex flex-wrap gap-10 inview">
  <Image src="/Newest-187.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-185.jpg" width={200} height={200} alt=""/>
    <Image src="/Newest-184.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-183.jpg" width={200} height={200} alt="" />
    <Image src="/Newest-183.jpg" width={200} height={200} alt="" />
    </div>
  </div>
</div>

</section>
    </main>
  );
}
