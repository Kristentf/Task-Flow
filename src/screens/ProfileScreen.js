import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/200' }}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }}
      />

      <Text style={styles.title}>Kristen</Text>
      <Text style={{ color: '#555', marginBottom: 20 }}>Usuário padrão</Text>

      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.profileText}>Voltar para Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.profileText}>Sobre o App</Text>
      </TouchableOpacity>
      
    </View>
  );
}
