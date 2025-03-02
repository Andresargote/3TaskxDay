import { StyleSheet, SafeAreaView, View } from "react-native";
import Greeting from "./components/Greeting";
import Quote from "./components/Quote";
import Today from "./components/Today";
import Todos from "./components/Todos";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Greeting />
        <Quote />
        <Today />
        <Todos />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#FAFAFA",
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 24,
  },
});
