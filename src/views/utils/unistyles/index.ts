import {darkTheme, lightTheme} from './themes';

// if you defined breakpoints

// if you defined themes
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
  //  blue: typeof blueTheme,
};

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
