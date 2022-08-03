import React, { useEffect } from 'react';
import { Button, FlatList, StatusBar, Text, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import { AudioCard } from '../../components/AudioCard';
import { audios, IAudio } from '../../data';
import { useAudios } from '../../hooks'

import { styles } from './Home.styles';

export const Home: React.FC = () => {
  

  return (
    <View style={styles.container}>
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
