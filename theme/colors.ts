import { Platform } from 'react-native';

// Base colors that don't change with theme
const BASE_COLORS = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  transparent: 'transparent',
} as const;

// Semantic colors for different purposes
const SEMANTIC_COLORS = {
  primary: {
    light: 'rgb(0, 122, 255)',
    dark: 'rgb(10, 132, 255)',
  },
  secondary: {
    light: 'rgb(45, 175, 231)',
    dark: 'rgb(100, 210, 255)',
  },
  success: {
    light: 'rgb(52, 199, 89)',
    dark: 'rgb(48, 209, 88)',
  },
  warning: {
    light: 'rgb(255, 149, 0)',
    dark: 'rgb(255, 159, 10)',
  },
  error: {
    light: 'rgb(255, 59, 48)',
    dark: 'rgb(255, 69, 58)',
  },
} as const;

// Platform specific colors
const PLATFORM_COLORS = {
  ios: {
    light: {
      grey6: 'rgb(242, 242, 247)',
      grey5: 'rgb(230, 230, 235)',
      grey4: 'rgb(210, 210, 215)',
      grey3: 'rgb(199, 199, 204)',
      grey2: 'rgb(175, 176, 180)',
      grey: 'rgb(142, 142, 147)',
      background: 'rgb(242, 242, 247)',
      foreground: 'rgb(0, 0, 0)',
      root: 'rgb(255, 255, 255)',
      card: 'rgb(255, 255, 255)',
      border: 'rgb(230, 230, 235)',
    },
    dark: {
      grey6: 'rgb(21, 21, 24)',
      grey5: 'rgb(40, 40, 42)',
      grey4: 'rgb(55, 55, 57)',
      grey3: 'rgb(70, 70, 73)',
      grey2: 'rgb(99, 99, 102)',
      grey: 'rgb(142, 142, 147)',
      background: 'rgb(0, 0, 0)',
      foreground: 'rgb(255, 255, 255)',
      root: 'rgb(0, 0, 0)',
      card: 'rgb(28, 28, 30)',
      border: 'rgb(40, 40, 42)',
    },
  },
  android: {
    light: {
      grey6: 'rgb(249, 249, 255)',
      grey5: 'rgb(215, 217, 228)',
      grey4: 'rgb(193, 198, 215)',
      grey3: 'rgb(113, 119, 134)',
      grey2: 'rgb(65, 71, 84)',
      grey: 'rgb(24, 28, 35)',
      background: 'rgb(249, 249, 255)',
      foreground: 'rgb(0, 0, 0)',
      root: 'rgb(255, 255, 255)',
      card: 'rgb(255, 255, 255)',
      border: 'rgb(215, 217, 228)',
    },
    dark: {
      grey6: 'rgb(16, 19, 27)',
      grey5: 'rgb(39, 42, 50)',
      grey4: 'rgb(49, 53, 61)',
      grey3: 'rgb(54, 57, 66)',
      grey2: 'rgb(139, 144, 160)',
      grey: 'rgb(193, 198, 215)',
      background: 'rgb(0, 0, 0)',
      foreground: 'rgb(255, 255, 255)',
      root: 'rgb(0, 0, 0)',
      card: 'rgb(16, 19, 27)',
      border: 'rgb(39, 42, 50)',
    },
  },
} as const;

// Get platform-specific colors
const COLORS = {
  ...BASE_COLORS,
  ...SEMANTIC_COLORS,
  light: PLATFORM_COLORS[Platform.OS === 'ios' ? 'ios' : 'android'].light,
  dark: PLATFORM_COLORS[Platform.OS === 'ios' ? 'ios' : 'android'].dark,
} as const;

export { COLORS, BASE_COLORS, SEMANTIC_COLORS };