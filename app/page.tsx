import Image from "next/image";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function Home() {
  return (
   <main className=" mx-auto h-auto ">
    {/* Landing Page Hero Section */}
    <section className="hero h-[70vh] flex flex-col justify-center items-center gap-2">
      <h1 className="text-white text-6xl font-light">Inspring the next generation of musicians</h1>
      <p className="text-white font-normal text-lg">A unique platform where seasoned musicians share their insights, perform soul-stirring renditions, and inspire music enthusiasts</p>
      <button className="mt-2 border border-white uppercase px-5 py-3 text-white text-md">
        View Upcoming Events
      </button>
     
    </section>
    {/* Message From The CEO*/}
    <section>
    <VelocityScroll className="bg-lime-500 text-3xl heading" numRows={1}>{"  "}Musician's Corner {" "}</VelocityScroll>
    </section>
    <section className="flex flex-col justify-center items-center gap-5"> 

<h2>A Message From The CEO</h2>
<p>

</p>
      </section>

    </main>
  );
}
