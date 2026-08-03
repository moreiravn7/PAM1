import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function JogosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>{'< Voltar'}</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Jogos</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={styles.jogo}>
          <Text style={styles.jogoTitulo}>Próximo jogo</Text>
          <Text style={styles.times}>MD FC  ⚽  VS  ⚽  Adversário</Text>
          <Text style={styles.data}>Domingo - 16:00</Text>
        </View>
        <View style={styles.jogo}>
          <Text style={styles.jogoTitulo}>Último jogo</Text>
          <Text style={styles.times}>MD FC  3 x 1  Rival FC</Text>
          <Text style={styles.data}>Vitória • 27/07</Text>
        </View>
        <View style={styles.jogo}>
          <Text style={styles.jogoTitulo}>Treino</Text>
          <Text style={styles.times}>Quarta-feira</Text>
          <Text style={styles.data}>19h00 • Campo do Clube</Text>
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
  jogo: { backgroundColor: '#fff', borderRadius: 20, padding: 20, marginTop: 15, alignItems: 'center' },
  jogoTitulo: { fontSize: 18, fontWeight: 'bold', color: '#061A40' },
  times: { fontSize: 17, marginTop: 12, fontWeight: 'bold' },
  data: { marginTop: 8, color: '#555' },
});
