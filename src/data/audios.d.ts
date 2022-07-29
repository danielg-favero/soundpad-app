import { AVPlaybackSource } from "expo-av";

export interface IAudio {
    id: string;
    name: string;
    duration: number;
    imageUrl: string;
    audioFile: AVPlaybackSource;
}