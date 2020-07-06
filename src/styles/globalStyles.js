import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = {
  box: {
    backgroundColor: '#FFF',
    borderRadius: 3,
    padding: 20,
  },

  metrics: {
    basePadding: 20,
    baseMargin: 10,
    baseRadius: 3,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
  },

  colors: {
    white: '#FFF',
    lighter: '#F3F6F7',
    light: '#DDD',
    regular: '#999',
    dark: '#666',
    darker: '#333',
    black: '#000',

    primary: '#004E89',
    secondary: '#1A659E',
    tertiary: '#f4a261',
    success: '#1A659E',
    danger: '#e76f51',
    warnner: '#e9c46a',

    transparent: 'transparent',
    darkTransparent: 'rgba(0, 0, 0, 0.6)',
    whiteTransparent: 'rgba(0, 0, 0, 0.3)',
  },
};

export default styles
