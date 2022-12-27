import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Navigator} from './src/navigator/Navigator';
import {AuthProvider} from './src/context/AuthContex';

const AppState = ({ children }: any ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};
export default App;
