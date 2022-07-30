import React, { useEffect } from 'react';
import { Button, FlatList, StatusBar, Text, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import { AudioCard } from '../../components/AudioCard';
import { audios, IAudio } from '../../data';
import { useAudios } from '../../hooks'

import { styles } from './Home.styles';

export const Home: React.FC = () => {
  const { saveAudio, audios, getSavedAudios } = useAudios();

  useEffect(() => {
    (async () => {
      await getSavedAudios();
    })();
  }, [audios])

  async function handleSelectAudio(){
    try{
      const response = await DocumentPicker.getDocumentAsync({ type: 'audio/*' });
      
      if(response){
        const parsedResponse: IAudio = {
          audioFile: response.uri,
          duration: 100,
          id: '3',
          name: response.name
        }
        await saveAudio(parsedResponse);
      }
    } catch(err) {
      throw `Ocorreu um erro ao carregar o arquivo: ${err}`;
    }
  }

  return (
    <View style={styles.container}>
        <Button 
          title='Adicionar audio'
          onPress={handleSelectAudio}
        />
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
        <StatusBar />
    </View>
  )
}
