import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ title, onPress, onDelete }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>🗑️</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },

  title: {
    fontSize: 16,
  },

  delete: {
    fontSize: 18,
  },
});
