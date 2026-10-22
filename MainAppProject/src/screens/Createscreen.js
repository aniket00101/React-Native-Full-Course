import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const Createscreen = ({ data, setdata }) => {

    const [itemName, setItemName] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [stock1, setStock1] = useState('')
    const [editItemId, setEditItemId] = useState(null)

    const AddItemHandler = () => {
        const newItem = {
            id: Date.now(),
            name: itemName,
            stock: stock1
        }
        setdata([...data, newItem])
        setItemName('')
        setStock1('')
        setIsEdit(false)
    }

    const deleteItemHandler = (id) => {
        setdata(data.filter((item) => item.id !== id))
    }

    const editItemHandler = (item) => {
        setIsEdit(true)
        setItemName(item.name);
        setEditItemId(item.id)
    }

    const updateItemHandler = () => {
        setdata(data.map((item) => (
            item.id === editItemId ? {
                ...item,
                name: itemName,
                stock: stock1
            } : item
        )))
    }

    return (
        <View style={styles.container}>

            <TextInput
                placeholder='Enter an Item Name'
                placeholderTextColor="black"
                style={styles.input}
                value={itemName}
                onChangeText={(itemName) => setItemName(itemName)}
            />

            <TextInput
                placeholder='Enter the stock amount'
                placeholderTextColor="black"
                style={styles.input}
                value={stock1}
                onChangeText={(stock1) => setStock1(stock1)}
            />

            <Pressable style={styles.button} onPress={() => isEdit ? updateItemHandler() : AddItemHandler()}>

                <Text style={styles.btnText}>{isEdit ? 'Edit Item in stock' : 'Add Item in stock'}</Text>

            </Pressable>

            <View style={{ marginTop: 10 }}>

                <Text style={styles.headingText}>All Items in the stock</Text>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ gap: 10 }}
                    renderItem={({ item }) => (

                        <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? "#FFCCCC" : "#D7F6BFFF" }]}>

                            <Text style={styles.itemText}>{item.name}</Text>

                            <View style={{ flexDirection: "row", gap: 20 }}>

                                <Text style={styles.itemText}>{item.stock}</Text>

                                <Pressable onPress={() => editItemHandler(item)}>

                                    <Text style={styles.itemText}>Edit</Text>

                                </Pressable>

                                <Pressable onPress={() => deleteItemHandler(item.id)}>

                                    <Text style={styles.itemText}>Delete</Text>

                                </Pressable>

                            </View>

                        </View>
                    )}
                />

            </View>

        </View>
    )
}

export default Createscreen

const styles = StyleSheet.create({
    container: {
        paddingVertical: "4%",
        gap: 15
    },
    input: {
        borderWidth: 1.5,
        borderColor: "green",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7
    },
    button: {
        backgroundColor: 'darkgrey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16
    },
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    headingText: {
        fontWeight: "700",
        fontSize: 16,
        marginVertical: 10
    },
    itemText: {
        fontWeight: "400",
        fontSize: 15
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7
    }
})