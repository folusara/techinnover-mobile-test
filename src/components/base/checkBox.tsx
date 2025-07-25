import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import BlackCheckMark from '../../assets/svgs/black-checkmark.svg';

interface CheckBoxProps {
  label: string;
  value: string | number;
  selected: boolean;
  labelColor?: string;
  onPress: Function;
}

const CheckBox: FC<CheckBoxProps> = ({
  label,
  value,
  selected,
  labelColor,
  onPress,
}: CheckBoxProps) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17,
        justifyContent: 'flex-start',
      }}
      onPress={() => {
        onPress(value);
      }}
      activeOpacity={0.6}>
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: selected ? 'black' : '#4F4F4F',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 8,
        }}>
        {selected ? (
          <View
            style={{
              // width: '100%',
              // height: '100%',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            {/* <BlackCheckMark /> */}
          </View>
        ) : null}
      </View>
      <Text
        style={{
          color: '#4F4F4F',
          textAlign: 'justify',
          // fontFamily: '',
          fontSize: 12,
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 16,
          fontFamily: 'WorkSans-Regular',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
