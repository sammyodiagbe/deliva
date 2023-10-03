
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from './screens/home';
import StoreScreen from './screens/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{
      
      headerStyle: {
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        
        
        headerShown: false
       
      }}/>
      <Stack.Screen name="about" component={StoreScreen} options={{
      }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  customHeader: {
    height: 150,
    paddingTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
