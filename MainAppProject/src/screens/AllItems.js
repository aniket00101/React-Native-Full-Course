import { FlatList, StyleSheet, Text, View } from 'react-native'

const AllItems = ({ data }) => {
  return (
    <View>

      <View style={styles.headingContainer}>

        <Text style={styles.headingText}>Items</Text>

        <Text style={styles.headingText}>Quantity</Text>

      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{gap:10}}
        renderItem={({ item }) => (

          <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? "#FFCCCC" : "#D7F6BFFF" }]}>

            <Text style={styles.itemText}>{item.name}</Text>

            <Text style={styles.itemText}>{item.stock}</Text>

          </View>
        )}
      />

    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  headingText: {
    fontWeight: "700",
    fontSize: 16
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