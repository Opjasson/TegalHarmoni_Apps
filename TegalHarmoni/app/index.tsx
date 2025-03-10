import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { Text, View } from "react-native";
import Router from "./Routes";

export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
