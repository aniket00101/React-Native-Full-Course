import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';

export default function App() {
  const theme = useColorScheme();
  const isDarkMode = theme==="dark" ? "black" : "white"
  const textcolor = theme==="dark" ? "green" : "red"
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.text, {color: textcolor}]}>Hi This is Aniket Das!!</Text>
      <Text style={[styles.text, {color: textcolor}]}>{theme}</Text>
      <View style={styles.boxes}>
        <View style = {styles.style1}></View>
        <View style = {styles.style2}></View>
        <View style = {styles.style3}></View>
      </View>
      <View style={styles.boxes}>
        <View style = {styles.style1}></View>
        <View style = {styles.style2}></View>
        <View style = {styles.style3}></View>
      </View>
      <View style={styles.boxes}>
        <View style = {styles.style1}></View>
        <View style = {styles.style2}></View>
        <View style = {styles.style3}></View>
      </View>
      <View style={styles.boxes}>
        <View style = {styles.style1}></View>
        <View style = {styles.style2}></View>
        <View style = {styles.style3}></View>
      </View>
      <View style={styles.boxes}>
        <View style = {styles.style1}></View>
        <View style = {styles.style2}></View>
        <View style = {styles.style3}></View>
      </View>
      <View style={styles.boxes}>
        <View style = {styles.style1}></View>
        <View style = {styles.style2}></View>
        <View style = {styles.style3}></View>
      </View>
      <View style={styles.boxes}>
        <View style = {styles.style1}></View>
        <View style = {styles.style2}></View>
        <View style = {styles.style3}></View>
      </View>
      <View style={styles.boxes}>
        <View style = {styles.style1}></View>
        <View style = {styles.style2}></View>
        <View style = {styles.style3}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    
  },
  boxes: {
    flexDirection: "row",
    gap: 10,
    padding: 15,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20
  },
  style1: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  style2: {
    height: 100,
    width: 100,
    backgroundColor: "yellow",
  },
  style3: {
    height: 100,
    width: 100,
    backgroundColor: "green",
  },
});
