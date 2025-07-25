import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardTypeOptions,
} from "react-native";
import _Text from "./text";
import { COLORS } from "../utils/colors";
import FONT from "../utils/fonts";
import { ms } from "react-native-size-matters";

type TextAreaProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  onPress?: () => void;
};

function TextArea({
  onChangeText,
  placeholder,
  value,
  editable = true,
  keyboardType = "default",
  label,
  error,
  onPress,
}: TextAreaProps) {
  return (
    <View>
      <_Text
        text={label}
        color={COLORS.dark}
        fontFamily={FONT.Lato_500_medium}
        fontSize={ms(15)}
      />
      <TouchableOpacity
        onPress={onPress}
        style={styles.inputWrapper}
        activeOpacity={onPress ? 0.7 : 1}
      >
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor="#667085"
          numberOfLines={5}
         textAlignVertical="top"
          value={value}
          multiline
          editable={editable}
          textContentType="none"
        />
      </TouchableOpacity>
      {/* Optionally show error */}
      {error && (
        <_Text
          text={error}
          color="red"
          fontSize={ms(12)}
          fontFamily={FONT.Lato_400_regular}
          style={{ marginTop: ms(5) }}
        />
      )}
    </View>
  );
}

export default TextArea;

const styles = StyleSheet.create({
  inputWrapper: {
    height: ms(90),
    borderRadius: ms(12),
    borderWidth: ms(1),
    borderColor: "#D0D5DD",
    marginTop: ms(10),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textInput: {
    flex: 1, // So it fills the container
    // backgroundColor: "red",
    borderRadius: 8,
    paddingHorizontal: "5%",
    fontFamily: FONT.Lato_400_regular,
    color: COLORS.dark,
    fontSize: ms(17),
    height: ms(86)
  },
});
