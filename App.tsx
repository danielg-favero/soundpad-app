import React from "react";
import { registerRootComponent } from "expo";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { PrismicProvider } from "@prismicio/react";
import "react-native-url-polyfill/auto";

import { Home } from "./src/screens/Home";
import { client } from "./src/api/prismic";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PrismicProvider client={client}>
      <Home />
    </PrismicProvider>
  );
}

registerRootComponent(App);
