import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import JogosScreen from './screens/JogosScreen';
import CampeonatosScreen from './screens/CampeonatosScreen';
import EstatisticasScreen from './screens/EstatisticasScreen';
import PerfilScreen from './screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jogos" component={JogosScreen} />
        <Stack.Screen name="Campeonatos" component={CampeonatosScreen} />
        <Stack.Screen name="Estatisticas" component={EstatisticasScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
