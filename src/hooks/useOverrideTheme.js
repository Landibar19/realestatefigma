import { createTheme } from '@mui/material/styles';

export const useOverrideTheme = (baseTheme, overrides) => {
  const theme = createTheme({
    ...baseTheme,
    components: {
      ...baseTheme.components,
      ...overrides
    },
  });

  return theme;
};