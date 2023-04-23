import { StyleSheet, Dimensions } from "react-native";
const Width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  h1: {
    marginVertical: 28,
    marginHorizontal: 18,
    fontSize: 22,
    fontWeight: "700",
  },
});
