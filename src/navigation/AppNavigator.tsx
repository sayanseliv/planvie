import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScreenHome from '../screens/ScreenHome';
import ScreenAddTask from '../screens/ScreenAddTask';
import ScreenTest from '../screens/ScreenTest';
import ScreenAuth from '../screens/ScreenAuth';
import { useThemeContext } from '../themes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ThemeTabScreen = () => null;

const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='home-outline' size={size} color={color} />
);

const AddTaskIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='add-circle-outline' size={size} color={color} />
);

const AddTestIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='desktop-outline' size={size} color={color} />
);

const AddAuth = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='enter-outline' size={size} color={color} />
);

const ThemeIconLight = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='sunny-outline' size={size} color={color} />
);

const ThemeIconDark = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='moon-outline' size={size} color={color} />
);

// Bottom Tab Navigator
const BottomTabNavigator: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarLabelStyle: {
          color: theme.colors.text,
          fontSize: 12,
        },
      }}
      screenListeners={({ route }) => ({
        tabPress: e => {
          if (route.name === 'Theme') {
            e.preventDefault();
            toggleTheme();
          }
        },
      })}>
      <Tab.Screen
        name='Home'
        component={ScreenHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name='AddTask'
        component={ScreenAddTask}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: AddTaskIcon,
        }}
      />
      <Tab.Screen
        name='Test'
        component={ScreenTest}
        options={{
          tabBarLabel: 'Test',
          tabBarIcon: AddTestIcon,
        }}
      />
      <Tab.Screen
        name='Auth'
        component={ScreenAuth}
        options={{
          tabBarLabel: 'Authentification',
          tabBarIcon: AddAuth,
        }}
      />
      <Tab.Screen
        name='Theme'
        component={ThemeTabScreen}
        options={{
          tabBarLabel: 'Theme',
          tabBarIcon: theme.dark ? ThemeIconLight : ThemeIconDark,
        }}
      />
    </Tab.Navigator>
  );
};

// Main Stack Navigator
const AppNavigator: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName='MainTabs'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='MainTabs' component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
