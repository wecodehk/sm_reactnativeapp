import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import React, { useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default Home = () => {
  const navigation = useNavigation(); // Initialize navigation

  const data = [
    { id: 1, title: 'Current Ipo', image: 'https://cdn4.iconfinder.com/data/icons/business-finance-line-art-1/128/ipo-initial-public-offering-ol-512.png' , navigator: "ipo" },
    { id: 2, title: 'Upcomming Ipo', image: 'https://cdn4.iconfinder.com/data/icons/business-finance-line-art-1/128/ipo-initial-public-offering-ol-512.png' , navigator: "ipo" },
    { id: 3, title: 'Past Ipo', image: 'https://cdn4.iconfinder.com/data/icons/business-finance-line-art-1/128/ipo-initial-public-offering-ol-512.png' , navigator: "ipo" },
    { id: 4, title: 'Allotment Data IPO', image: 'https://cdn4.iconfinder.com/data/icons/business-finance-line-art-1/128/ipo-initial-public-offering-ol-512.png' , navigator: "ipo" },
    
   
    // Add other data items
  ];

  const [options, setOptions] = useState(data);

  const showAlert = () => {
    Alert.alert('Option selected');
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={options}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id.toString();
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(item.navigator)} // Use navigation here
            >
              <View style={styles.cardFooter}></View>
              <Image style={styles.cardImage} source={{ uri: item.image }} />
              <View style={styles.cardHeader}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#1B2732',
    
  },
  list: {
    paddingHorizontal: 5,
    marginTop:50,
    
  },
  listContainer: {
    alignItems: 'center',
  },
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
});
