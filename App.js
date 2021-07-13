import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { LoadingIndicator } from "./src/components/utility/loading-indicator";
import { Navigation } from "./src/infrastructure/navigation/index";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyATaFRM0KJ1brzfUqZEQ6z0RnxwaDwdMNk",
  authDomain: "mealstogo-9dfdb.firebaseapp.com",
  projectId: "mealstogo-9dfdb",
  storageBucket: "mealstogo-9dfdb.appspot.com",
  messagingSenderId: "790008615833",
  appId: "1:790008615833:web:ccdc4a1bb8075760987908",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (oswaldLoaded && latoLoaded) {
    return (
      <>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar />
      </>
    );
  } else {
    return (
      <SafeArea>
        <LoadingIndicator />
      </SafeArea>
    );
  }
}
