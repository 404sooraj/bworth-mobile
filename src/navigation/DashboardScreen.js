import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screen/TabScreen/Home';
import Brands from '../screen/TabScreen/Brands';
import Profile from '../screen/TabScreen/Profile';
import Cashbacks from '../screen/TabScreen/Cashbacks';

import HomeIcon from '../components/icons/HomeIcon';
import BrandsIcon from '../components/icons/BrandsIcon';
import CashbacksIcon from '../components/icons/CashbacksIcon';
import ProfileIcon from '../components/icons/ProfileIcon';

const Tab = createBottomTabNavigator();

import { useAppTheme } from '../theme/theme';

export default function DashboardScreen() {
  const theme = useAppTheme();
  const iconSize = 26;

  const getTabIcon = (routeName, focused) => {
    const color = focused ? theme.accent : theme.text;

    switch (routeName) {
      case 'Home':
        return <HomeIcon size={iconSize} color={color} />;
      case 'Brands':
        return <BrandsIcon size={iconSize} color={color} />;
      case 'Cashbacks':
        return <CashbacksIcon size={iconSize} color={color} />;
      case 'Profile':
        return <ProfileIcon size={iconSize} color={color} />;
      default:
        return null;
    }
  };



  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          margin: 0,
        },
        tabBarIcon: ({ focused }) =>
          getTabIcon(route.name, focused),
      })}
    >

      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Brands" component={BrandStackNavigator} />
      <Tab.Screen name="Cashbacks" component={Cashbacks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
    </HomeStack.Navigator>
  );
};

const BrandStack = createStackNavigator();

const BrandStackNavigator = () => {
  return (
    <BrandStack.Navigator screenOptions={{ headerShown: false }}>
      <BrandStack.Screen name="BrandsScreen" component={Brands} />
    </BrandStack.Navigator>
  );
};
