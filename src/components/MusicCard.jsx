import React from 'react';
import { Play } from 'lucide-react';

const MusicCard = ({ image, artist, title, plays }) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
      <img src={image} alt={title} className="w-16 h-16 rounded-md object-cover" />
      <div className="flex-1">
        <p className="text-sm text-gray-600">{artist}</p>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-gray-400">{plays}</p>
      </div>
      <button className="p-2 rounded-full hover:bg-gray-200 transition">
        <Play className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MusicCard;
