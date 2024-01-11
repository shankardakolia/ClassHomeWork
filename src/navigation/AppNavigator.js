import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Products from '../screens/Products';
import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={Products}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Favourites" component={Favourites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
