import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    padding: 16,
  },
  audioList: {
    width: "100%",
  },
  searchInput: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 4,
    padding: 16,
    fontFamily: "Poppins_300Light",
  },
  topSection: {
    width: "100%",
    flexDirection: 'row'
  },
  refreshButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    marginRight: 8,
    backgroundColor: "#ceacfc",
    borderRadius: 4
  }
});
