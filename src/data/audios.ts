import { IAudio } from "../@types/audios.d";

export const audios: IAudio[] = [
    {
        id: '1',
        duration: 100,
        name: 'Mr Krabs',
        audioFile: require('../../assets/audios/mr_krabs.mp3')
    },
    {
        id: '2',
        duration: 100,
        name: 'Boomerang',
        audioFile: require('../../assets/audios/boomerang.mp3')
    }
]