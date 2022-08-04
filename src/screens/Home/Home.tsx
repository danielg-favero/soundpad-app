import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StatusBar, TextInput, View } from 'react-native';
import { usePrismicDocuments } from '@prismicio/react';
import { PrismicDocument } from '@prismicio/types';

import { AudioCard } from '../../components/AudioCard';
import { IAudio } from '../../data';

import { styles } from './Home.styles';

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

  const handleSearch = useCallback((searchText: string) => {
    if(audios){
      if(searchText !== ''){
        const filteredAudios = audios.filter(audio => audio.name.toUpperCase() === searchText.toUpperCase());
  
        if(filteredAudios.length > 0){
          setAudios(filteredAudios);
        } 
      }
    } 
  }, [audios])

  useEffect(() => {
    if(documents){
      const parsedAudios = parseAudios(documents.results);
      setAudios(parsedAudios);
    }
  }, [documents])

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Pesquisar'
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
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
