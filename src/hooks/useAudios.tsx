import { useState } from "react"
import { AsyncStorage } from "react-native";

import { IAudio } from "../@types/audios";

export const useAudios = () => {
    const [audios, setAudios] = useState<IAudio[]>();

    async function getSavedAudios(){
        const savedAudios: IAudio[] = await AsyncStorage
            .getItem('audios')
            .then(res => JSON.parse(res));

        return savedAudios;
    }

    async function saveAudio(audioFile: IAudio){
        // Resgatar audios já salvos
        const savedAudios = await getSavedAudios();

        if(savedAudios){
            // Adicionar novo arquivo ao array resgatado
            savedAudios.push(audioFile);
            console.log("\nsaveAudio - Audios recuperados: ", savedAudios, "\n")

            // Salvar novo array com música nova adicionada
            AsyncStorage
                .setItem('audios', JSON.stringify(savedAudios))
                .then(() => console.log('Áudio salvo com sucesso!'))
                .catch(error => console.log(`Não foi possível salvar o áudio: ${error}`))
            
            setAudios(savedAudios);
        } else {
            console.log("\nsaveAudio - Salvar audio: ", audioFile, "\n")
            AsyncStorage
                .setItem('audios', JSON.stringify([audioFile]))
                .then(() => console.log('Áudio salvo com sucesso!'))
                .catch(error => console.log(`Não foi possível salvar o áudio: ${error}`))
            
            setAudios([audioFile]);
        }
    }

    return {
        audios,
        getSavedAudios,
        saveAudio
    }
}