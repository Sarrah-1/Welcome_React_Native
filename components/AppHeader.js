import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sara App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef5e98',
    paddingTop: 50, // espace pour la barre de statut du téléphone
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
 
});
