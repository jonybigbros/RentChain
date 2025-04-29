import React from 'react';
import { Tabs } from 'expo-router';
import { Image, Text } from 'react-native';
import { icons } from '../../assets/icons'; 

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const icon = icons[route.name];

          return (
            <Image
              source={icon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#9245B8' : '#00000',
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#9245B8',    
        tabBarInactiveTintColor: '#00000',    
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },
        tabBarShowLabel: true,               
        headerShown: false,
      })}
    >
      <Tabs.Screen name="find" options={{ title: 'Поиск' }} />
      <Tabs.Screen name="wishlist" options={{ title: 'Избранное' }} />
      <Tabs.Screen name="home" options={{ title: 'Дом' }} />
      <Tabs.Screen name="chat" options={{ title: 'Чат' }} />
      <Tabs.Screen name="profile" options={{ title: 'Профиль' }} />
    </Tabs>
  );
}
