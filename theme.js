import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#1f6eeb",
      accent: "#C0D7FA",
      danger:'#F63D02',
      secondary:'#186BF0',
      default:'#fff',
      labelColor:'#717171'
    },
  };
  export default theme;