import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSaveName = () => {
    setDisplayName(inputText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>შეიყვანეთ სახელი</Text>

      <TextInput
        style={styles.input}
        placeholder="შეიყვანეთ სახელი"
        value={inputText}
        onChangeText={setInputText}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveName}>
        <Text style={styles.buttonText}>შენახვა</Text>
      </TouchableOpacity>

      {displayName ? (
        <Text style={styles.resultText}>გამარჯობა, {displayName}</Text>
      ) : null}

      <Button
        title="პროფილზე გადასვლა"
        onPress={() => navigation.navigate('Info', { name: displayName })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  resultText: {
    fontSize: 18,
    color: '#333'
  }
});