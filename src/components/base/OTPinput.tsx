import React, {useRef} from 'react';
import {StyleSheet, View, TextStyle, ViewStyle} from 'react-native';
import {OtpInputRef, OtpInput as RNTOtpInput} from 'react-native-otp-entry';
import {Wp} from '../../views/utils/dimensions';
import _Text from './text';

interface OtpInputProps {
  numberOfDigits?: number;
  onFilled?: (otp: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  pin?: string;
  setPin?: (otp: string) => void | undefined;
  error?: string;
  onBlur?: () => void;
  onChangeText?: (value: string) => void;
  clearPin: boolean;
}

function OtpInput({
  numberOfDigits = 6,
  onFilled,
  autoFocus = false,
  disabled = false,
  setPin,
  onBlur,
  onChangeText,
  clearPin,
  error,
}: OtpInputProps) {
  const otpRef = useRef<OtpInputRef>(null);
  return (
    <View style={styles.wrapper}>
      <RNTOtpInput
        numberOfDigits={numberOfDigits}
        ref={otpRef}
        autoFocus={autoFocus}
        hideStick={true}
        placeholder="•"
        blurOnFilled={true}
        disabled={disabled}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onFocus={() => console.log('Focused')}
        onBlur={onBlur}
        onTextChange={text => {
          console.log(text);
          onChangeText?.(text);
        }}
        onFilled={text => {
          console.log(`OTP is ${text}`);
          onFilled?.(text);
          setPin?.(text);
          if (clearPin) {
            setTimeout(() => {
              otpRef.current?.clear();
            }, 500);
          }
        }}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
        }}
        textProps={{
          accessibilityRole: 'text',
          accessibilityLabel: 'OTP digit',
          allowFontScaling: false,
        }}
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          placeholderTextStyle: styles.placeholderText,
          filledPinCodeContainerStyle: styles.filledPinCodeContainer,
          disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
        }}
      />
      {error && <_Text color="red" marginTop={10} text={error} />}
    </View>
  );
}

const styles = StyleSheet.create<{
  wrapper: ViewStyle;
  container: ViewStyle;
  pinCodeContainer: ViewStyle;
  activePinCodeContainer: ViewStyle;
  filledPinCodeContainer: ViewStyle;
  disabledPinCodeContainer: ViewStyle;
  pinCodeText: TextStyle;
  placeholderText: TextStyle;
  focusStick: ViewStyle;
}>({
  wrapper: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pinCodeContainer: {
    width: Wp(13),
    height: 53,
    borderRadius: 8,
    borderWidth: 0,
    borderColor: '#F3F4F7',
    backgroundColor: '#F3F4F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  activePinCodeContainer: {
    borderColor: '#0057FF',
    // backgroundColor: '#EAF1FF',
    backgroundColor: '#F3F4F7',
  },
  filledPinCodeContainer: {
    borderColor: '#28A745',
    // backgroundColor: '#E6F4EA',
    backgroundColor: '#F3F4F7',
  },
  disabledPinCodeContainer: {
    // borderColor: '#DEE2E6',
    backgroundColor: '#F3F4F7',
  },
  pinCodeText: {
    fontSize: 17,
    color: '#120542',
    fontWeight: '500',
  },
  placeholderText: {
    color: '#F3F4F7',
    fontSize: 18,
  },
  focusStick: {
    height: 2,
    width: 24,
    backgroundColor: '#0057FF',
    marginTop: 4,
  },
});

export default OtpInput;
