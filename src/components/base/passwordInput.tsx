import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import AntDesign from 'react-native-vector-icons/Ionicons';
// import {ColorScheme} from '../../utils/colorScheme';
// import EyeIcon from '../../assets/svgs/password-eye-icon.svg';
// import ShowPasswordIcon from '../../assets/svgs/eye-view-interface-symbol-svgrepo-com.svg';

const PasswordInput = (props: any) => {
  return (
    <View style={props?.viewStyles}>
      <Text style={style.inputLabel}>{props?.label}</Text>
      <View style={props.inputContainer}>
        <TextInput
          style={[
            style.input,
            props?.extraStyle,
            // {color: ColorScheme(useColorScheme)},
          ]}
          placeholderTextColor={'#757679'}
          placeholder={props?.placeholder}
          {...props}
        />
        {props?.show ? (
          <TouchableOpacity
            style={{
              display: 'flex',
              position: 'absolute',
              right: 10,

              borderRadius: 50,
              paddingHorizontal: 10,
              top: 25,
            }}
            onPress={props?.toggleSecureText}>
            {/* {props?.isShow ? (
              <ShowPasswordIcon width={24} height={24} />
            ) : (
              <EyeIcon />
            )} */}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  inputLabel: {
    color: '#141414',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    paddingHorizontal: 20,
    height: 50,
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default PasswordInput;
