import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function TaskScreen({ route, navigation }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Tarefa</Text>

      <View style={{ padding: 20, backgroundColor: '#eee', borderRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {task.title}
        </Text>

        <Text style={{ marginTop: 10, color: '#666' }}>
          ID: {task.id}
        </Text>

        {/* Mostrar a data */}
        <Text style={{ marginTop: 5, color: '#666' }}>
          Criada em: {task.date}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.profileButton}
      >
        <Text style={styles.profileText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
