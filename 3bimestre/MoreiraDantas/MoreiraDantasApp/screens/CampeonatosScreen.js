import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function CampeonatosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>{'< Voltar'}</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Campeonatos</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.card}>
          <Text style={styles.nomeCampeonato}>Campeonato Municipal 2026</Text>
          <Text style={styles.posicao}>2º lugar • 24 pontos</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.nomeCampeonato}>Copa Regional</Text>
          <Text style={styles.posicao}>Semifinal • Classificado</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.nomeCampeonato}>Torneio de Verão</Text>
          <Text style={styles.posicao}>Fase de grupos</Text>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#061A40', padding: 25 },
  header: { marginTop: 40, marginBottom: 20 },
  voltar: { color: '#1E88E5', fontSize: 16, marginBottom: 15 },
  titulo: { color: '#fff', fontSize: 30, fontWeight: 'bold' },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 20, marginTop: 15 },
  nomeCampeonato: { fontSize: 18, fontWeight: 'bold', color: '#061A40' },
  posicao: { marginTop: 8, color: '#555', fontSize: 15 },
});
