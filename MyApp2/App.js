import { StyleSheet, Text, useColorScheme, View } from 'react-native';

export default function App() {
  const theme = useColorScheme();
  const isDarkMode = theme==="dark" ? "black" : "white"
  const textcolor = theme==="dark" ? "yellow" : "red"
  return (
    <View style={[styles.container, {backgroundColor: isDarkMode}]}>
      <Text style={[styles.text, {color: textcolor}]}>Hi This is Aniket Das!!</Text>
      <Text style={[styles.text, {color: textcolor}]}>{theme}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
