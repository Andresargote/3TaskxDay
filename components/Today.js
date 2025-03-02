import { StyleSheet, View, Text, Platform } from "react-native";
import { getMonthName } from "../utils/dates";

export default function Today() {
  const day = new Date().getDate();
  const month = getMonthName(new Date().getMonth())?.toUpperCase();

  return (
    <View style={styles.todayContainer}>
      <Text style={styles.today}>Today</Text>
      <Text style={styles.date}>{`${day} ${month}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todayContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  today: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111",
  },
  date: {
    fontSize: 14,
    color: "#B4B4B4",
    fontFamily: Platform.select({
      ios: "Menlo", // o "Courier"
      android: "monospace",
      default: "monospace",
    }),
  },
});
