import { TouchableOpacity, View } from "react-native";
import _Text from "./text";
import { COLORS } from "../utils/colors";
import FONT from "../utils/fonts";
import { ms } from "react-native-size-matters";
import DropdownIcon from "../../assets/icons/dropDownIcon.svg";

type DropDownComponentProps = {
  label: string;
  selectedValue?: string | null;
  onPress?: () => void; // Optional if you want to handle press
};

function DropDownComponent({
  label,
  selectedValue,
  onPress,
}: DropDownComponentProps) {
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
        style={{
          height: ms(50),
          borderRadius: ms(12),
          borderWidth: ms(1),
          borderColor: "#D0D5DD",
          marginTop: ms(10),
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "5%",
          flexDirection: "row",
        }}
      >
        {selectedValue ? (
          <_Text
            color={COLORS.dark}
            fontFamily={FONT.Lato_400_regular}
            text={selectedValue}
            fontSize={ms(17)}
          />
        ) : (
          <_Text
            color={"#667085"}
            fontFamily={FONT.Lato_400_regular}
            text="Select a category"
            fontSize={ms(17)}
          />
        )}
        <DropdownIcon />
      </TouchableOpacity>
    </View>
  );
}

export default DropDownComponent;
