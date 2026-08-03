import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRef } from 'react';

function CardMenu({ icon, label, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;

  const animarEntrada = () => {
    Animated.spring(scale, { toValue: 0.95, useNativeDriver: true }).start();
  };
  const animarSaida = () => {
    Animated.spring(scale, { toValue: 1, friction: 3, useNativeDriver: true }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }], width: '47%' }}>
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        onPressIn={animarEntrada}
        onPressOut={animarSaida}
        activeOpacity={0.9}
      >
        {icon}
        <Text style={styles.texto}>{label}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0D47A1', '#061A40']} style={styles.header}>
        <View style={styles.escudo}>
          <Text style={styles.md}>MD</Text>
        </View>
        <Text style={styles.titulo}>MD Futebol</Text>
        <Text style={styles.subtitulo}>MoreiraDantas App</Text>
      </LinearGradient>

      <View style={styles.menu}>
        <CardMenu
          icon={<FontAwesome5 name="futbol" size={30} color="#fff" />}
          label="Jogos"
          onPress={() => navigation.navigate('Jogos')}
        />
        <CardMenu
          icon={<FontAwesome5 name="trophy" size={30} color="#FFD700" />}
          label="Campeonatos"
          onPress={() => navigation.navigate('Campeonatos')}
        />
        <CardMenu
          icon={<MaterialIcons name="bar-chart" size={32} color="#fff" />}
          label="Estatísticas"
          onPress={() => navigation.navigate('Estatisticas')}
        />
        <CardMenu
          icon={<Ionicons name="person-circle" size={34} color="#fff" />}
          label="Perfil"
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>

      <TouchableOpacity style={styles.jogo} onPress={() => navigation.navigate('Jogos')} activeOpacity={0.85}>
        <View style={styles.jogoLabel}>
          <Ionicons name="time-outline" size={16} color="#0D47A1" />
          <Text style={styles.jogoTitulo}>  Próximo jogo</Text>
        </View>
        <Text style={styles.times}>MD FC   vs   Adversário</Text>
        <Text style={styles.data}>Domingo · 16:00</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#061A40' },
  header: { alignItems: 'center', paddingTop: 60, paddingBottom: 35, borderBottomLeftRadius: 35, borderBottomRightRadius: 35 },
  escudo: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderColor: '#1E88E5', shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 8 },
  md: { fontSize: 40, fontWeight: 'bold', color: '#061A40' },
  titulo: { color: '#fff', fontSize: 32, fontWeight: 'bold', marginTop: 14 },
  subtitulo: { color: '#B0BEC5', fontSize: 15, marginTop: 2 },
  menu: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 22, marginTop: 10 },
  card: { height: 115, backgroundColor: '#0D47A1', borderRadius: 22, justifyContent: 'center', alignItems: 'center', marginBottom: 18, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 6, shadowOffset: { width: 0, height: 4 }, elevation: 6 },
  texto: { color: '#fff', fontSize: 16, fontWeight: '600', marginTop: 10 },
  jogo: { backgroundColor: '#fff', borderRadius: 22, padding: 22, marginHorizontal: 22, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 5 },
  jogoLabel: { flexDirection: 'row', alignItems: 'center' },
  jogoTitulo: { fontSize: 18, fontWeight: 'bold', color: '#0D47A1' },
  times: { fontSize: 17, marginTop: 14, fontWeight: '700', color: '#061A40' },
  data: { marginTop: 6, color: '#78909C', fontSize: 13 },
});
