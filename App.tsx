import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Navigator } from './src/navigator/Navigator';


const App =()=>{
  return(
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}
export default App;