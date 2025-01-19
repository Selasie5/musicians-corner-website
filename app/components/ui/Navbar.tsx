import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Links {
    name: string;
    path: string;
}
const Navbar = () => {
    const Links: Links[]=[
        {
            name:"Home",
            path:"/#home"
        },
        {
            name:"About",
            path:"/#about"
        },
        {
            name:"Events",
            path:"/#events"
        },
        {
            name:"Gallery",
            path:"/#gallery"
        },
        {
            name:"Contact",
            path:"/#contact"
        },
    ]
  return (
    <section className='bg-black w-full px-10 py-6'>
        <nav className='flex justify-between items-center'>
          <div>
            <Image src="/mc_logo.png" alt="musicians-corner-logo" width={100} height={100}/>
            </div> 

            <div className="flex justify-between items-center gap-10">
                {Links.map((link, index)=>
                (
                    <Link href={link.path} key={index} className='text-white hover:text-orange-500'>
                        {link.name}
                        </Link>
                ))}
                </div> 
                <div>
                    <button className='bg-orange-500 text-black text-sm px-5 py-5 uppercase flex justify-center items-center gap-4'>
                        <hr className="bg-black h-[0.1rem] border-0 w-10"/> {" "}
                        Partner With Us
                        </button>
                </div>
        </nav>
    </section>
  )
}

export default Navbar
