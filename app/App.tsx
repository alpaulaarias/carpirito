// index.js / App.tsx (Archivo principal)
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator'; // El componente donde está el Stack.Navigator
import { UserProvider } from './src/services/userContext';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}