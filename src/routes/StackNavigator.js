import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import MoviesScreen from '../screens/Movies/MoviesScreen';
import TheatreScreen from '../screens/Theatre/TheatreScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Movies' component={MoviesScreen} />
      <Stack.Screen name='Theatre' component={TheatreScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
