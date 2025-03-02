import { StyleSheet, Text } from "react-native";
import { isMorning } from "../utils/isMorning";
import { isEvening } from "../utils/isEvening";
import { isNight } from "../utils/isNight";

export default function Greeting() {
  const currentHour = new Date().getHours();

  const greetingText = () => {
    let greeting = "";
    // todo: add unit tests for isMorning, isEvening, and isNight functions
    if (isMorning(currentHour)) greeting = "☀️ Good morning";
    if (isEvening(currentHour)) greeting = "🌤️ Good evening";
    if (isNight(currentHour)) greeting = "🌙 Good night";

    return greeting;
  };

  return <Text style={styles.greeting}>{greetingText()}</Text>;
}

const styles = StyleSheet.create({
  greeting: {
    color: "#111111",
    fontWeight: "regular",
    fontSize: 40,
    lineHeight: 48,
  },
});
