import React from 'react';
import MusicCard from './components/MusicCard';
import songImg from './assets/song-image.png';  

const HomePage = () => {
  return (
    <div className="space-y-4">
      <MusicCard image={songImg} artist="Whispering Willow" title="Wind in The Willows" plays="Played Over Ten Thousand" />
      
      <MusicCard image={songImg} artist="Night Bloom" title="Moonlight Parade" plays="Played Over Five Thousand" />
    </div>
  );
};

export default HomePage;
