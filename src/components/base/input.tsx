import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import _Text from './text';
import FONT from '../utils/fonts';
import { COLORS } from '../utils/colors';
import { ms } from 'react-native-size-matters';

interface TechinnoverTextInputProps
  extends Pick<
    TextInputProps,
    'onChangeText' | 'placeholder' | 'value' | 'editable' | 'keyboardType'
  > {
  label?: string;
  error?: string;
}

const TechinnoverTextInput: React.FC<TechinnoverTextInputProps> = ({
  onChangeText,
  placeholder,
  value,
  editable = true,
  keyboardType = 'default',
  label,
  error,
}) => {
  return (
    <View style={{
      backgroundColor: COLORS.dark,
      borderRadius: ms(13),
      paddingVertical: ms(5),
      paddingHorizontal: "5%"
    }}>
      {label && (
        <_Text
          textAlign="left"
          text={label}
          marginTop={ms(10)}
          color={COLORS.white}
          fontSize={ms(15)}
          fontFamily={FONT.Lato_500_medium}
          fontWeight="400"
        />
      )}
     <View style={{flexDirection:"row", width:"100%",marginTop: ms(10), alignItems:"center", justifyContent:"space-between"}}>
        <_Text  text={"₦"} fontSize={ms(25)} color={COLORS.white} />
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={'#757679'}
          value={value}
          editable={editable}
          textContentType="name"
        />
     </View>
      {error && <_Text color="red" marginTop={10} text={error} />}
    </View>
  );
};

export default TechinnoverTextInput;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: COLORS.dark,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontFamily: FONT.Lato_600_semiBold,
    color: COLORS.white,
    fontSize: ms(37),
    fontWeight: '400',
  },
});
