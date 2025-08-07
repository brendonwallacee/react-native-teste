import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApiTestScreen } from '@/app/ApiTestScreen';
import ProfileScreen from '@/app/ProfileScreen';
import { useTheme } from '@/contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const { isDark } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: isDark ? '#161616' : '#FFFFFF',
          borderTopColor: isDark ? '#232323' : '#E5E7EB',
        },
        tabBarActiveTintColor: '#3ECF8F',
        tabBarInactiveTintColor: isDark ? '#707070' : '#6B7280',
      }}
    >
      <Tab.Screen name="Home" component={ApiTestScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} /> }} />
      <Tab.Screen name="Perfil" component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} /> }} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
