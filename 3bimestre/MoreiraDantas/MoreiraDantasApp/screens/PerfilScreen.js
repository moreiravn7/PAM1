import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>{'< Voltar'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.perfilTopo}>
        <Image
          source={{ uri: 'https://ui-avatars.com/api/?name=Jogador&background=1E88E5&color=fff&size=200' }}
          style={styles.foto}
        />
        <Text style={styles.nome}>Nome do Jogador</Text>
        <Text style={styles.posicao}>Atacante • Camisa 9</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.linha}>Time: MD FC</Text>
        <Text style={styles.linha}>Idade: 17 anos</Text>
        <Text style={styles.linha}>Pé dominante: Direito</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#061A40', padding: 25 },
  header: { marginTop: 40 },
  voltar: { color: '#1E88E5', fontSize: 16 },
  perfilTopo: { alignItems: 'center', marginTop: 20 },
  foto: { width: 110, height: 110, borderRadius: 60, borderWidth: 4, borderColor: '#fff' },
  nome: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 15 },
  posicao: { color: '#aaa', fontSize: 16, marginTop: 4 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 20, marginTop: 30 },
  linha: { fontSize: 16, color: '#061A40', marginBottom: 10 },
});
