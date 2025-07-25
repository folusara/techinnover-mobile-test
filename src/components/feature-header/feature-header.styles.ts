import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import { COLORS } from '../utils/colors';

const FeatureHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  title: {
    color: COLORS.dark,


  },
  rightTxtColor: {
    color: '#4894FE',
    fontSize: ms(14),
  },
  rightGroup: {
    flexDirection: 'row',
    gap: ms(2),
    alignItems: 'center',
  },
});

export default FeatureHeaderStyles;
