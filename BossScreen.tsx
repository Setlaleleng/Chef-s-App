import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function BossScreen() {
  // Sample data for items
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 'R123,0', imageUrl: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Item 2', price: 'R123,0', imageUrl: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Item 3', price: 'R123,0', imageUrl: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Item 4', price: 'R123,0', imageUrl: 'https://via.placeholder.com/50' },
  ]);

  // Function to update item details
  const handleEdit = (id, newName, newPrice) => {
    setItems(items.map(item => (item.id === id ? { ...item, name: newName, price: newPrice } : item)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Boss</Text>
      {items.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          {/* Edit Button */}
          <View style={styles.editContainer}>
            <EditButton
              item={item}
              onSave={(newName, newPrice) => handleEdit(item.id, newName, newPrice)}
            />
          </View>

          {/* Text and Image */}
          <View style={styles.contentContainer}>
            <Text style={styles.itemText}>
              {item.name} - {item.price}
            </Text>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
          </View>
        </View>
      ))}
    </View>
  );
}

// Edit Button Component
function EditButton({ item, onSave }) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const [newPrice, setNewPrice] = useState(item.price);

  if (editing) {
    return (
      <View style={styles.editForm}>
        <TextInput
          style={styles.input}
          placeholder="New Name"
          value={newName}
          onChangeText={setNewName}
        />
        <TextInput
          style={styles.input}
          placeholder="New Price"
          value={newPrice}
          onChangeText={setNewPrice}
        />
        <Button
          title="Save"
          onPress={() => {
            onSave(newName, newPrice);
            setEditing(false);
          }}
        />
      </View>
    );
  }

  return <Button title="Edit" onPress={() => setEditing(true)} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    marginRight: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  editContainer: {
    marginRight: 10,
  },
  editForm: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    width: 100,
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
});
