import * as NavigationBar from 'expo-navigation-bar';
import { useColorScheme as useNativewindColorScheme } from 'nativewind';
import * as React from 'react';
import { Platform } from 'react-native';
import { COLORS } from '~/theme/colors';

type ColorScheme = 'light' | 'dark';

interface ColorSchemeContextValue {
  colorScheme: ColorScheme;
  isDarkColorScheme: boolean;
  setColorScheme: (scheme: ColorScheme) => Promise<void>;
  toggleColorScheme: () => Promise<void>;
  colors: typeof COLORS.light | typeof COLORS.dark;
}

const ColorSchemeContext = React.createContext<ColorSchemeContextValue | undefined>(undefined);

export function ColorSchemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme: nativeColorScheme, setColorScheme: setNativeWindColorScheme } = useNativewindColorScheme();
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(nativeColorScheme ?? 'light');

  const setScheme = React.useCallback(async (newScheme: ColorScheme) => {
    setNativeWindColorScheme(newScheme);
    setColorScheme(newScheme);
    
    if (Platform.OS === 'android') {
      try {
        await setNavigationBar(newScheme);
      } catch (error) {
        console.error('Error setting navigation bar:', error);
      }
    }
  }, [setNativeWindColorScheme]);

  const toggleScheme = React.useCallback(async () => {
    const newScheme = colorScheme === 'light' ? 'dark' : 'light';
    await setScheme(newScheme);
  }, [colorScheme, setScheme]);

  const value = React.useMemo(() => ({
    colorScheme,
    isDarkColorScheme: colorScheme === 'dark',
    setColorScheme: setScheme,
    toggleColorScheme: toggleScheme,
    colors: COLORS[colorScheme],
  }), [colorScheme, setScheme, toggleScheme]);

  return (
    <ColorSchemeContext.Provider value={value}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export function useColorScheme() {
  const context = React.useContext(ColorSchemeContext);
  if (!context) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }
  return context;
}

export function useInitialAndroidBarSync() {
  const { colorScheme } = useColorScheme();
  
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      setNavigationBar(colorScheme).catch((error) => {
        console.error('Error syncing navigation bar:', error);
      });
    }
  }, [colorScheme]);
}

async function setNavigationBar(colorScheme: ColorScheme) {
  return Promise.all([
    NavigationBar.setButtonStyleAsync(colorScheme === 'dark' ? 'light' : 'dark'),
    NavigationBar.setPositionAsync('absolute'),
    NavigationBar.setBackgroundColorAsync(colorScheme === 'dark' ? '#00000030' : '#ffffff80'),
  ]);
}