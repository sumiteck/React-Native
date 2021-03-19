import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from "./src/screens/ListScreen";
import ComponentsScreen from './src/screens/ComponentsScreens';
import ImageScreen  from "./src/screens/ImageScreen";
import CounterScreen  from "./src/screens/CounterScreen";
import ColorScreen  from "./src/screens/ColorScreen";
import TextScreen  from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen"


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
