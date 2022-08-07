import React, { useEffect, useState } from "react";
import { Button, FlatList, StatusBar, TextInput, TouchableOpacity, View } from "react-native";
import { usePrismicDocuments } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { AudioCard } from "../../components/AudioCard";
import { IAudio } from "../../@types/audios.d";

import { styles } from "./Home.styles";

function parseAudios(documents: PrismicDocument[]): IAudio[] {
  const parsedAudios: IAudio[] = documents.map(document => {
    const { data } = document;

    return {
      id: document.uid ? document.uid : "",
      name: data["name"][0].text,
      audioFile: data["audio-file"].url,
    };
  });

  return parsedAudios;
}

export const Home: React.FC = () => {
  const [audios, setAudios] = useState<IAudio[]>();
  const [search, setSearch] = useState<string>("");
  const [documents] = usePrismicDocuments();

  useEffect(() => {
    if (documents) {
      const parsedAudios = parseAudios(documents.results);
      setAudios(parsedAudios);
    }
  }, [documents]);

  const filteredAudios =
    search.length > 0 ? audios?.filter(audio => audio.name.includes(search)) : [];

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.refreshButton}>
          <FontAwesome name="refresh" color="#fefefe" size={16}/>
        </TouchableOpacity>
        <TextInput
          placeholder="Pesquisar"
          onChangeText={e => setSearch(e)}
          style={styles.searchInput}
        />
      </View>
      {audios && search.length > 0 ? (
        <FlatList
          data={filteredAudios}
          keyExtractor={filteredAudio => filteredAudio.id}
          renderItem={({ item }) => <AudioCard audio={item} />}
          style={styles.audioList}
        />
      ) : (
        <FlatList
          data={audios}
          keyExtractor={audio => audio.id}
          renderItem={({ item }) => <AudioCard audio={item} />}
          style={styles.audioList}
        />
      )}
      <StatusBar />
    </View>
  );
};
