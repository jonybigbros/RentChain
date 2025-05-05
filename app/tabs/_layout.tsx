import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="AvaiHousScreen"
        options={{
          title: 'Доступное жильё',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="FilterScreen"
        options={{
          title: 'Фильтр',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="options-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="ListingScreen"
        options={{
          title: 'Объявление',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: 'Профиль',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}