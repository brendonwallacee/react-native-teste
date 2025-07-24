import { StatusBar } from 'expo-status-bar';
import { Calculadora } from './src/app/Calculadora';


export default function App() {
  return (
    <>
      <Calculadora/>
      <StatusBar style="auto" />
    </>
  );
}