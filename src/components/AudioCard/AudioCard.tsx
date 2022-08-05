import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Audio, AVPlaybackStatusSuccess } from 'expo-av';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { IAudio } from '../../data';
import { styles } from './AudioCard.styles';

interface AudioCardProps {
  audio: IAudio;
}

export const AudioCard: React.FC<AudioCardProps> = ({ audio }) => {
  const [audioIsPlaying, setAudioIsPlaying] = useState<boolean>(false);
  const [currentAudio] = useState<Audio.Sound>(new Audio.Sound());

  useEffect(() => {
    (async () => {
      if (audioIsPlaying) {
        await currentAudio.loadAsync({ uri: audio.audioFile });
        const { isLoaded } = (await currentAudio.getStatusAsync()) as AVPlaybackStatusSuccess;

        if (isLoaded) {
          await currentAudio.playAsync();
        }
      } else {
        await currentAudio.unloadAsync();
        await currentAudio.pauseAsync();
      }
    })();
  }, [audioIsPlaying]);

  return (
    <>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => setAudioIsPlaying(!audioIsPlaying)}
      >
        <FontAwesome name={audioIsPlaying ? 'pause' : 'play'} size={24} style={styles.playIcon} />
        <View>
          <Text style={styles.audioName}>{audio.name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
