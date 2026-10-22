import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import AllItems from './screens/AllItems';
import Createscreen from './screens/Createscreen';

const data1 = [
    { id: 1, name: "Wheat", stock: 5, unit: "kg" },
    { id: 2, name: "Rice", stock: 25, unit: "kg" },
    { id: 3, name: "Milk", stock: 12, unit: "litres" },
    { id: 4, name: "Cooking Oil", stock: 8, unit: "litres" },
    { id: 5, name: "Sugar", stock: 15, unit: "kg" },
];

const HomeScreen = () => {
    
    const [view, setView] = useState(0);
    const [data, setData] = useState(data1);
    
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Dashboard</Text>

            <View style={styles.buttoncontainer}>

                <Pressable style={[styles.button, view === 0 ? { backgroundColor: "green" } : null]} onPress={() => setView(0)}>

                    <Text style={[styles.btnText, view === 0 ? { color: "white" } : null]}>All Items</Text>

                </Pressable>

                <Pressable style={[styles.button, view === 1 ? { backgroundColor: "green" } : null]} onPress={() => setView(1)}>

                    <Text style={[styles.btnText, view === 1 ? { color: "white" } : null]}>Low Stock</Text>

                </Pressable>

                <Pressable style={[styles.button, view === 2 ? { backgroundColor: "green" } : null]} onPress={() => setView(2)}>

                    <Text style={[styles.btnText, view === 2 ? { color: "white" } : null]}>Create</Text>

                </Pressable>

            </View>

            {view === 0 && <AllItems data={data} />}

            {view === 1 && <AllItems data={data.filter((item) => item.stock < 20)} />}

            {view === 2 && <Createscreen data={data} setdata={setData}/>}

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "lightblue",
        padding: "9%"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#33333",
    },
    buttoncontainer: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 12
    },
    button: {
        paddingVertical: 3.5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "green"
    },
    btnText: {
        color: "green",
        fontWeight: "bold",
        fontSize: 16
    }
})