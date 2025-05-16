// lib/useThemeColor.ts
export function useThemeColor(colorKey: SemanticColorKey | BaseColorKey) {
  const { colorScheme, colors } = useColorScheme();
  return React.useMemo(() => {
    if (colorKey in BASE_COLORS) {
      return BASE_COLORS[colorKey as BaseColorKey];
    }
    return SEMANTIC_COLORS[colorKey as SemanticColorKey][colorScheme];
  }, [colorKey, colorScheme]);
}
