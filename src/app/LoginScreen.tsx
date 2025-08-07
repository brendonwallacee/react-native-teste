
import React from 'react';
import { View, Text, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Button } from '@/components/Button';

const LoginScreen = ({ navigation }: any) => {
  const handleLogin = async () => {
    try {
      const { success } = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Faça login para continuar',
        cancelLabel: 'Cancelar',
        fallbackLabel: 'Usar senha',
      });

      if (success) {
        navigation.replace('Main');
      }
    } catch (error) {
      console.error('Erro de autenticação:', error);
      Alert.alert('Erro', 'Ocorreu um erro durante a autenticação.');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-background dark:bg-dark-background p-8">
      <Text className="text-7xl mb-6">🔑</Text>
      <Text className="text-text dark:text-dark-text text-3xl font-bold mb-2 text-center">Acesso Seguro</Text>
      <Text className="text-muted dark:text-dark-muted text-lg text-center mb-12">
        Use sua biometria ou senha para entrar no aplicativo.
      </Text>
      <Button
        onPress={handleLogin}
        label="Autenticar Agora"
        variant="ghost"
        size="lg"
        className="w-full"
      />
    </View>
  );
};

export default LoginScreen;
