import React from "react";
import Section from "components/Section";

function Home() {

  const items = [
    {
      id: 1,
      title: 'Metallica - Master Of Puppets(Remastered)',
      description: '1986',
      artist: 'Metallica',
      image: 'https://i.scdn.co/image/ab67616d00001e02668e3aca3167e6e569a9aa20',
      type: 'album',
      src: "https://archive.org/download/MetallicaMasterOfPuppets_0/02__Master_Of_Puppets_64kb.mp3"
    },
    {
      id: 2,
      title: 'Daily Mix',
      artist: 'Karışık varmı',
      description: 'The Smiths, The Libertines, Red Hot Chili Peppers ve daha fazlası',
      image: 'https://dailymix-images.scdn.co/v2/img/4bf08a9e6eea088b20d4092d1322bbd3f39ff9af/2/tr/default',
      type: 'album',
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      id: 3,
      title: 'White Buffalo',
      description: 'Artist',
      artist: 'White Buffalo',
      image: 'https://i.scdn.co/image/ab6761610000f178cb9a88533fc514f8cef30467',
      type: 'artist',
      src: "https://archive.org/download/MetallicaMasterOfPuppets_0/02__Master_Of_Puppets_64kb.mp3"
    },
    {
      id: 4,
      title: 'TED Talks Daily',
      description: 'PODCAST',
      artist: 'Konuş babam konuş',
      image: 'https://i.scdn.co/image/e048b26a93dc026381ab0107e6c01e4e3417b14a',
      type: 'podcast',
      src: "https://archive.org/download/MetallicaMasterOfPuppets_0/02__Master_Of_Puppets_64kb.mp3"
    },
    {
      id: 5,
      title: 'Metallica - Master Of Puppets(Remastered)',
      description: '1986',
      artist: 'Metallica',
      image: 'https://i.scdn.co/image/ab67616d00001e02668e3aca3167e6e569a9aa20',
      type: 'album',
      src: "https://archive.org/download/MetallicaMasterOfPuppets_0/02__Master_Of_Puppets_64kb.mp3"
    },
  ]

  return (
    <div>
      <Section title="Recently played" more="/blabla" items={items}/>
    </div>
  );
}

export default Home;
