import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function UserScreen() {
  
  const items = [
    { id: 1, name: 'Item 1', price: 'R123,0', imageUrl: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Item 2', price: 'R130,0', imageUrl: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Item 3', price: 'R59,0', imageUrl: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Item 4', price: 'R72,0', imageUrl: 'https://via.placeholder.com/50' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu List</Text>
      {items.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemText}>
            {item.name} - {item.price}
          </Text>
          <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    flex: 1,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginLeft: 10,
  },
});
