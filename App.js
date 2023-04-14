import { NavigationContainer } from '@react-navigation/native';
import { MovieProvider } from './src/context/Context';
import StackNavigator from './src/routes/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MovieProvider>
        <StackNavigator />
      </MovieProvider>
    </NavigationContainer>
  );
};

export default App;
