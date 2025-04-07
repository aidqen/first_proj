import { Stack } from "expo-router";
import './globals.css';
import { StatusBar } from "react-native";

export default function RootLayout() {
  return <>
    <StatusBar hidden={true} />
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(tabs)"
      />
      <Stack.Screen 
        name="movies/[id]"
      />
    </Stack>
  </>
}
