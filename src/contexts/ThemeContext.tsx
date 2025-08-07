import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'nativewind';

interface ThemeContextData {
  isDark: boolean;
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // O hook useColorScheme do NativeWind gerencia automaticamente a detecção
  // e a aplicação do tema (light/dark).
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const isDark = colorScheme === 'dark';

  return (
    <ThemeContext.Provider value={{ isDark, toggleColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};