import React from 'react';
import {Text, TextStyle} from 'react-native';
import { ms } from 'react-native-size-matters';

interface CustomTextProps {
  text: string;
  style?: TextStyle | TextStyle[];
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textAlign?: 'auto' | 'center' | 'left' | 'right' | 'justify' | undefined;
  fontSize?: number;
  numberOfLines?: number;
  marginTop?: number;
  marginLeft?: number;
  color: string;
  fontFamily?: string;
  marginRight?: number;
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined;
  lineHeight?: number | undefined;
  onPress?: () => void;
}

export default function _Text({
  text,
  fontSize,
  numberOfLines,
  fontWeight,
  onPress,
  style,
  textAlign,
  marginTop,
  marginLeft,
  color,
  fontFamily,
  marginRight,
  textDecorationLine,
  lineHeight,
}: CustomTextProps) {

  const customStyle: TextStyle = {
    fontSize,
    fontWeight,
    textAlign,
    marginTop,
    marginLeft,
    marginRight,
    color,
    fontFamily,
    textDecorationLine,
    lineHeight,
  };

  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[customStyle, style]}>
      {text}
    </Text>
  );
}
