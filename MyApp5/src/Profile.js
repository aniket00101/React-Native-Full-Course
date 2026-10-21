import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation, route }) => {
    const val = route.params
    return (
        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 10, marginBottom: 10 }}>Profile</Text>
            <Button title="Search" onPress={() => navigation.navigate("Search")} />
            <Text>{val.id} {val.name}</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})