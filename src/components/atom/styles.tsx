import { StyleSheet, Dimensions } from "react-native";
const Width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    borderColor: "#E4E4E4",
    borderRadius: 20,
    borderWidth: 1,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  section: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  description: {
    fontSize: 13,
    color: "#050D2E",
    fontWeight: "300",
    width: Width / 1.5,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  containerAge: {
    paddingVertical: 3,
    paddingHorizontal: 7,
    backgroundColor: "#F5F5F5",
    borderRadius: 6,
  },
  age: {
    fontSize: 12,
  },
});
