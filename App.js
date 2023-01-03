
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import { FavoriteProvider } from './store/context';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import { Provider } from 'react-redux';
import store from './store/redux/store';

function DrawerCategory () {

    return (
      <Drawer.Navigator screenOptions={{
          headerStyle: {backgroundColor: "#351401"},
          headerTintColor: "white",
          sceneContainerStyle: {backgroundColor: "#3f2f25"},
          drawerContentStyle: {backgroundColor: "#351401"},
          drawerInactiveTintColor: "white",
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#e4baa1",
      }}>
        <Drawer.Screen name="Category" component={CategoryScreen}/>
        <Drawer.Screen name="Favorite" component={FavouriteScreen}/>
      </Drawer.Navigator>
    )
};

export default function App() {
  return (
  <>
  <StatusBar style='light'/>
  
  <Provider store={store}>
  <FavoriteProvider>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: {backgroundColor: "#351401"},
      headerTintColor: "white",
      contentStyle: {backgroundColor: "#3f2f25"}
    }}>
      <Stack.Screen name="Drawer" component={DrawerCategory} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="MealOverview" component={MealsOverview} />
      <Stack.Screen name="MealDetail" component={MealDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  </FavoriteProvider>
  </Provider>
 
  </>
  );
}

const styles = StyleSheet.create({
    root: {
      flex: 1
    },
    imageStyle: {
      opacity: 0.25
    }
});
