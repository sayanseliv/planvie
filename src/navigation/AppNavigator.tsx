import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScreenHome from '../screens/ScreenHome';
import ScreenAddTask from '../screens/ScreenAddTask';
import { useInterpolatedTheme, useTheme } from '../hooks';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ThemeTabScreen = () => null;

const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='home-outline' size={size} color={color} />
);

const AddTaskIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='add-circle-outline' size={size} color={color} />
);

const ThemeIconLight = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='sunny-outline' size={size} color={color} />
);
const ThemeIconDark = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name='moon-outline' size={size} color={color} />
);

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  const theme = useInterpolatedTheme();
  const { toggleTheme, isTransitioning } = useTheme();
  const [tabBarStyle, setTabBarStyle] = useState({});

  useEffect(() => {
    setTabBarStyle({
      backgroundColor: theme.colors.surface,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    });
  }, [theme]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarLabelStyle: {
          color: theme.colors.text,
        },
      }}
      screenListeners={({ route }) => ({
        tabPress: e => {
          if (route.name === 'Theme' && !isTransitioning) {
            e.preventDefault();
            toggleTheme();
          }
        },
      })}>
      <Tab.Screen
        name='Home'
        component={ScreenHome}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name='AddTask'
        component={ScreenAddTask}
        options={{
          tabBarLabel: 'Добавить',
          tabBarIcon: AddTaskIcon,
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
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='MainTabs'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='MainTabs' component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
