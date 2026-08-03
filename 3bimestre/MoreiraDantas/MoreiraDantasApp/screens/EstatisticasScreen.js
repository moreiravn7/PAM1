import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function EstatisticasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>{'< Voltar'}</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Estatísticas</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.statBox}>
          <Text style={styles.statNumero}>12</Text>
          <Text style={styles.statLabel}>Gols</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumero}>7</Text>
          <Text style={styles.statLabel}>Assistências</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumero}>18</Text>
          <Text style={styles.statLabel}>Jogos</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.statBox}>
          <Text style={styles.statNumero}>2</Text>
          <Text style={styles.statLabel}>Cartões</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumero}>85%</Text>
          <Text style={styles.statLabel}>Passes certos</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#061A40', padding: 25 },
  header: { marginTop: 40, marginBottom: 20 },
  voltar: { color: '#1E88E5', fontSize: 16, marginBottom: 15 },
  titulo: { color: '#fff', fontSize: 30, fontWeight: 'bold' },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 20, marginTop: 15, flexDirection: 'row', justifyContent: 'space-around' },
  statBox: { alignItems: 'center' },
  statNumero: { fontSize: 26, fontWeight: 'bold', color: '#061A40' },
  statLabel: { fontSize: 13, color: '#666', marginTop: 4 },
});
