import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { usePrismicDocuments } from '@prismicio/react';

import { AudioCard } from '../../components/AudioCard';
import { IAudio } from '../../data';

import { styles } from './Home.styles';
import { PrismicDocument } from '@prismicio/types';

function parseAudios(documents: PrismicDocument[]): IAudio[] {
  const parsedAudios: IAudio[] = documents.map(document => {
    const { data } = document;
    return {
      id: document.uid ? document.uid : '',
      name: data["name"][0].text,
      audioFile: data["audio-file"].url,
    }
  })

  return parsedAudios;
}

export const Home: React.FC = () => {
  const [audios, setAudios] = useState<IAudio[]>();
  const [documents] = usePrismicDocuments();

  useEffect(() => {
    if(documents){
      const parsedAudios = parseAudios(documents.results);
      console.log(parsedAudios)
      setAudios(parsedAudios);
    }
  }, [documents])

  return (
    <View style={styles.container}>
      {
        documents && (
          <FlatList 
              data={audios}
              keyExtractor={audio => audio.id}
              renderItem={({ item }) => (
                  <AudioCard 
                      audio={item}
                  />
              )}
              style={styles.audioList}
          />
        )
      }
        <StatusBar />
    </View>
  )
}
