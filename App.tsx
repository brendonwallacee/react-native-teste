import { StatusBar } from 'expo-status-bar';
import { ApiTestScreen } from './src/app/ApiTestScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Cria uma instância do QueryClient
const queryClient = new QueryClient();

export default function App() {
  return (
    // Envolve o aplicativo com o provedor do TanStack Query
    <QueryClientProvider client={queryClient}>
      <ApiTestScreen />
      <StatusBar style="light" />
    </QueryClientProvider>
  );
}