import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@/components/Button';

const ProfileScreen = ({ navigation }: any) => {
  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <View className="flex-1 justify-between items-center bg-background dark:bg-dark-background p-8">
      <View className="items-center pt-16">
        <View className="w-32 h-32 bg-card dark:bg-dark-card rounded-full items-center justify-center mb-4">
          <Text className="text-6xl">👤</Text>
        </View>
        <Text className="text-text dark:text-dark-text text-3xl font-bold">Usuário</Text>
        <Text className="text-muted dark:text-dark-muted text-lg">usuario@email.com</Text>
      </View>

      <View className="w-full pb-4">
        <Button
          onPress={handleLogout}
          label="Sair da Conta"
          variant="destructive"
          size="lg"
          className="w-full"
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
