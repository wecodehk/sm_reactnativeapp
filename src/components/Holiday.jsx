import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EventsView = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://www.nseindia.com/api/holiday-master?type=trading', {
      headers: {
        'User-Agent': 'Your Custom User-Agent String'
      }
    })
      .then(response => {
        setData(response.data.NDM);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: '#1B2732' }]}>
      <Text style={styles.header}>Stock Market Holiday</Text>
      {!loading ? (
        <FlatList
          style={styles.eventList}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.eventRow}>
                <Text style={styles.cell}>{item.tradingDate}</Text>
                <Text style={styles.cell}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Image
          source={require('./1480.gif')}
          style={styles.loadingImage}
          resizeMode="stretch" // Adjust the resizeMode property
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  eventList: {
    width: '100%',
  },
  eventRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  cell: {
    marginStart: 15,
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
  },
  loadingImage: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    backgroundColor: '#1B2732', // Background color for the image
  },
});

export default EventsView;
