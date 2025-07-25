import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FeatureHeaderStyles from './feature-header.styles';
import {IFeatureHeaderProps} from './feature-header.types';
import { useNavigation } from '@react-navigation/native';
import _Text from '../base/text';
import FONT from '../utils/fonts';
import { COLORS } from '../utils/colors';
import { ms } from 'react-native-size-matters';

interface FeatureHeaderProps extends IFeatureHeaderProps {
  onIconPress?: () => void;
  icon?: React.ReactNode;
}

const FeatureHeader = (props: FeatureHeaderProps) => {
  const {
    title,
    rightText,
    // iconName,
    // iconColor,
    // iconSize,
    icon,
    iconGap,
    onPressAction,
    // onIconPress,
  } = props;

  return (
    <View style={FeatureHeaderStyles.container}>
      <View>
        <_Text color={COLORS.dark} text={title} fontWeight='200'  fontSize={ms(17)} fontFamily={FONT.Lato_600_semiBold} />
      </View>
      <TouchableOpacity
        onPress={onPressAction}
        style={[FeatureHeaderStyles.rightGroup, {gap: iconGap}]}>
        <View>
          <View style={{borderBottomWidth: rightText && 1,flexDirection:"row", alignItems:"center", borderColor: rightText && "#005EE8"}}>
             {icon}
             <_Text color={"#005EE8"} marginLeft={icon && ms(2)} text={rightText} fontSize={ms(15)} fontFamily={FONT.Lato_500_medium}/>
         </View>
      </View>
        {/* {iconName && (
          <TouchableOpacity onPress={onIconPress ? onIconPress : onPressAction}>
            <Icon color={iconColor} name={iconName} size={iconSize ?? 24} />
          </TouchableOpacity>
        )} */}
      </TouchableOpacity>
    </View>
  );
};

export default FeatureHeader;
