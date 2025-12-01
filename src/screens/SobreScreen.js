import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>

      <Text style={styles.description}>
        Este é um aplicativo simples de lista de tarefas (To-Do List), criado como
        parte de um projeto acadêmico. O objetivo é demonstrar fundamentos de
        React Native, navegação entre telas, gerenciamento básico de estado e
        organização de projeto.
      </Text>

      <Text style={styles.subtitle}>Desenvolvedores</Text>

      <View style={styles.devBox}>
        <Text style={styles.devText}>1 - Kristen Charles Tavares de Freitas</Text>
        <Text style={styles.devText}>2 - José Flávio Drumond de Vasconcellos Dias Filho</Text>
        <Text style={styles.devText}>3 - Alan Cefair dos Santos Souza Junior</Text>
        <Text style={styles.devText}>4 - José Victor Maia de Sousa</Text>
      </View>

      <Text style={styles.footer}>Versão 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  devBox: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 10,
  },
  devText: {
    fontSize: 18,
    marginVertical: 5,
  },
  footer: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
});
