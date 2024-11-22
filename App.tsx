import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the Stack Navigator
type RootStackParamList = {
  Home: undefined; // No parameters
  User: undefined;
  Boss: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Typing for HomeScreen
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Foodie!</Text>
      
      <Text style={styles.label}>Enter Name:</Text>
      <TextInput 
        style={styles.input}
        placeholder="User name"
        placeholderTextColor="#aaa"
      />
      
      <Text style={styles.label}>Enter Password:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="Login" 
          color="#0000FF" 
          onPress={() => navigation.navigate('User')} // Navigate to "User" screen
        />
        <View style={styles.spacer} />
        <Button 
          title="Chef" 
          color="#0000FF" 
          onPress={() => navigation.navigate('Boss')} // Navigate to "Boss" screen
        />
      </View>
    </View>
  );
}

function UserScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome User</Text>
    </View>
  );
}

function BossScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Boss</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Boss" component={BossScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    width: 10,
  },
});
