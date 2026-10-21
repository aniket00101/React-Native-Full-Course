import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('')
  const [submitText, setSubmitText] = useState('')

  const handleSubmit = () => {
    setSubmitText(text);
    setText('')
  }

  return (
    <View style={styles.container}>
      
      <Text style = {styles.text}>Hi Aniket...Wassup Dude!!</Text>

      <TextInput 
        style = {styles.input}
        placeholder='Enter you Name'
        value = {text}
        onChangeText={setText}
      />

      <Button title="Submit" onPress={handleSubmit}/>

      {submitText ? (<Text>Result: {submitText}</Text>) : ''}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  input: {
    width: "80%",
    padding: 5,
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 10
  }
});
