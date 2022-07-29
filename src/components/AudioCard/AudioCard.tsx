import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Audio, AVPlaybackSource } from 'expo-av';

import { IAudio } from '../../data';
import { styles } from './AudioCard.styles';

interface AudioCardProps {
    audio: IAudio;
}

export const AudioCard: React.FC<AudioCardProps> = ({ audio }) => {
    async function playAudio(audioFile: AVPlaybackSource){
        const { sound } = await Audio.Sound.createAsync(audioFile);
        const soundStatus = await sound.getStatusAsync();
            
        if(soundStatus.isLoaded){
            if(soundStatus.isPlaying === false){
                await sound.playAsync();
            }
        }
    }

    return (
        <TouchableOpacity 
            style={styles.cardContainer}
            onPress={() => playAudio(audio.audioFile)}
        >
            <Image 
                source={{ uri: audio.imageUrl }}
                style={styles.audioImage}
            />
            <View style={styles.cardInfo}>
                <Text>{audio.name}</Text>
                <Text>{audio.duration}</Text>
            </View>
        </TouchableOpacity>
    )
}
