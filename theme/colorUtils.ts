// theme/colorUtils.ts
export function withOpacity(color: string, opacity: number): string {
  if (!color.startsWith('rgb')) {
    throw new Error('Color must be in RGB format');
  }
  return color.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
}

export function darken(color: string, amount: number): string {
  // Implementation for darkening a color
}

export function lighten(color: string, amount: number): string {
  // Implementation for lightening a color
}
