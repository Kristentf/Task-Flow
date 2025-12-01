import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/styles';
import TaskItem from '../components/TaskItem';

export default function HomeScreen({ navigation }) {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === '') return;

    const currentDate = new Date().toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newTask = {
      id: Date.now().toString(),
      title: task,
      date: currentDate,   // <-- AQUI A DATA DA CRIAÇÃO
    };

    setTasks([...tasks, newTask]);
    setTask('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas tarefas</Text>

      {/* Campo de adicionar */}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            title={item.title}
            onPress={() => navigation.navigate('Task', { task: item })}
            onDelete={() => deleteTask(item.id)}
          />
        )}
      />

      {/* Perfil */}
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.profileText}>Ir ao Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
