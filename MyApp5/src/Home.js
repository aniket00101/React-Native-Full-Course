import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './Profile'

const Home = ({ navigation }) => {
  return (
    <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>

      <Text style={{ fontSize: 20, fontWeight: 10, marginBottom: 10 }} >Home</Text>

      <Button title="Profile" onPress={() => navigation.navigate("Profile", { id: 1, name: "aniket" })} />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})