import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';

import { AudioCard } from '../../components/AudioCard';
import { audios } from '../../data';

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
