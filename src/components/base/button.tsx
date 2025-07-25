import React from 'react';
import {
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
  TextStyle,
  Text,
  ActivityIndicator,
} from 'react-native';
import { ms } from 'react-native-size-matters';

interface AppButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  borderRadius?: number;
  backgroundColor?: string;
  height?: number;
  width?: string;
  marginTop?: number;
  borderWidth?: number;
  borderColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
  activeOpacity?: number;
  loading?: boolean;
}

export default function AppButton({
  onPress,
  children,
  borderRadius = 8,
  backgroundColor = '#FFFFFF',
  height = ms(25),
  width,
  marginTop,
  borderWidth,
  borderColor,
  paddingHorizontal = 16,
  paddingVertical = 10,
  disabled = false,
  style,
  textStyle,
  accessibilityLabel,
  activeOpacity = 0.7,
  loading,
}: AppButtonProps) {
  const buttonStyle: StyleProp<ViewStyle> = {
    borderRadius,
    backgroundColor,
    height,
    width,
    marginTop,
    borderWidth,
    borderColor,
    paddingHorizontal,
    paddingVertical,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: loading ? 'row' : 'column',
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <TouchableOpacity
      style={[buttonStyle, style]}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      activeOpacity={activeOpacity}>
      {typeof children === 'string' ? (
        <Text style={textStyle}>{children}</Text>
      ) : (
        children
      )}
      {loading && <ActivityIndicator style={{marginLeft: 10}} />}
    </TouchableOpacity>
  );
}
