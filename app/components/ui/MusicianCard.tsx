import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon from react-icons

interface MusicianCardProps {
  name: string;
  role: string;
  backgroundImage: string;
  instagramLink: string; // Add Instagram link as a prop
}

const MusicianCard: React.FC<MusicianCardProps> = ({ name, role, backgroundImage, instagramLink }) => {
  return (
    <div
      className="\ relative flex flex-col justify-end items-end h-64 w-48 p-4 rounded-lg text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Instagram Icon */}
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 z-20 text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
      >
        <FaInstagram size={20} />
      </a>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
};

export default MusicianCard;
