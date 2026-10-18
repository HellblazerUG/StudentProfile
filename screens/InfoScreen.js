import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function InfoScreen({ navigation, route }) {
  const { name } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>სტუდენტის პროფილი</Text>

      <Image
        source={{ uri: 'https://assets.change.org/photos/8/jw/ax/QMjwAxeQAfcpoxs-400x225-noPad.jpg?1597557421' }}
        style={styles.image}
      />

      <Text style={styles.infoText}>სტუდენტი: {name || 'უცნობია'}</Text>

      <Button
        title="მთავარ გვერდზე დაბრუნება"
        onPress={() => navigation.goBack()}
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  infoText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333'
  }
});