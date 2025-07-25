import { TouchableOpacity, View } from "react-native";
import { COLORS } from "../utils/colors";
import { ms } from "react-native-size-matters";
import _Text from '../base/text';
import FONT from "../utils/fonts";

function QuickLink({item, onPress}: any) {
    return ( 
        <TouchableOpacity
            style={{
            backgroundColor: COLORS.white,
            width: ms(182),
            height: ms(92),
                borderRadius: ms(12),
            borderWidth: ms(1),
                borderColor: COLORS.tint_grey,
                marginRight: ms(16),
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          
        }}
        onPress={onPress}
        >
            <View style={{  gap: ms(10), width:ms(154)}}>
                {item?.icon}
                <_Text text={item.ctx} fontSize={ms(16)} color={COLORS.blue} fontFamily={FONT.Lato_500_medium} />
            </View>
        </TouchableOpacity>
     );
}

export default QuickLink;