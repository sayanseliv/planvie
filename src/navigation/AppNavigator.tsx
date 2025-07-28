import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScreenHome from '../screens/ScreenHome';
import ScreenAddTask from '../screens/ScreenAddTask';
import ScreenTest from '../screens/ScreenTest';
import ScreenAuth from '../screens/ScreenAuth';
import { useInterpolatedTheme, useTheme } from '../hooks';
import { ExtendedTheme } from '../types/theme';

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
  const theme: ExtendedTheme = useInterpolatedTheme();
  const { toggleTheme, isTransitioning } = useTheme();
  const [tabBarStyle, setTabBarStyle] = useState({});

  useEffect(() => {
    setTabBarStyle({
      backgroundColor: theme.colors.surface,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
      paddingBottom: 20,
      paddingTop: 10,
    });
  }, [theme]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary, // И про textSecondary!
        tabBarLabelStyle: {
          color: theme.colors.text,
          fontSize: 12,
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
