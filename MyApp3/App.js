import { StyleSheet, Text, View, Image, FlatList } from 'react-native';


const dummyData = [
  {
    id: 1,
    name: "Aniket",
    email: "aniket@gmail.com",
    image: "https://i.ytimg.com/vi/7lCDEYXw3mM/hqdefault.jpg"
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@gmail.com",
    image: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
  },
  {
    id: 3,
    name: "Priya",
    email: "priya@gmail.com",
    image: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg"
  },
  {
    id: 4,
    name: "Amit",
    email: "amit@gmail.com",
    image: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg"
  },
  {
    id: 5,
    name: "Sneha",
    email: "sneha@gmail.com",
    image: "https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg"
  },
  {
    id: 6,
    name: "Rohan",
    email: "rohan@gmail.com",
    image: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg"
  },
  {
    id: 7,
    name: "Neha",
    email: "neha@gmail.com",
    image: "https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg"
  },
  {
    id: 8,
    name: "Sourav",
    email: "sourav@gmail.com",
    image: "https://i.ytimg.com/vi/CevxZvSJLk8/hqdefault.jpg"
  },
  {
    id: 9,
    name: "Priyanshu",
    email: "priyanshu@gmail.com",
    image: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg"
  },
  {
    id: 10,
    name: "Pooja",
    email: "pooja@gmail.com",
    image: "https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg"
  },
  {
    id: 11,
    name: "Arjun",
    email: "arjun@gmail.com",
    image: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg"
  },
  {
    id: 12,
    name: "Kavya",
    email: "kavya@gmail.com",
    image: "https://i.ytimg.com/vi/uelHwf8o7_U/hqdefault.jpg"
  }
];


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList 
        data = {dummyData}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{height:10, width: 10}}/>}
        numColumns={2}
        columnWrapperStyle ={{gap:10}}
        renderItem={({item}) => (
          <View style={styles.cards}>
            <Image 
              style = {{height: 40, width: 40, borderRadius: 50}}
              source = {{uri:item.image}}
            />
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  cards: {
    width: 160,
    height: 130,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  }
});
