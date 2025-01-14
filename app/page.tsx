import Image from "next/image";

export default function Home() {
  return (
   <main className=" mx-auto ">
    {/* Landing Page Hero Section */}
    <section className="hero h-[90vh] flex flex-col justify-center items-center">
      <span className="heading text-lg text-lime-500">
        18 January, 2025
      </span>
      <h1 className="text-white text-[5rem] font-light">The Tribute Medley</h1>
      <button className="border border-white uppercase px-5 py-3 text-white text-md">
        Register Now
      </button>
    </section>
    </main>
  );
}
