import { Text, StyleSheet, View, Platform } from "react-native";
import { QUOTES } from "../data/quotes";
import { getRandomNumber } from "../utils/getRandomNumber";

export default function Quote() {
  const randomNumber = getRandomNumber(0, QUOTES.length - 1);

  const quote = QUOTES[randomNumber];

  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quote}>{quote.quote}</Text>
      <Text style={styles.author}>{quote.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  quoteContainer: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 16,
    gap: 8,
  },
  quote: {
    fontSize: 16,
    lineHeight: 24,
    color: "#111111",
    fontStyle: "italic",
    fontWeight: "light",
  },
  author: {
    fontSize: 14,
    fontFamily: Platform.select({
      ios: "Menlo", // o "Courier"
      android: "monospace",
      default: "monospace",
    }),
    alignSelf: "flex-end",
    color: "#B4B4B4",
  },
});
