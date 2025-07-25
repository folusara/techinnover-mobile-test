import { TouchableOpacity, View } from "react-native";
import { COLORS } from "../utils/colors";
import { ms } from "react-native-size-matters";
import _Text from '../base/text';
import FONT from "../utils/fonts";
import { formatCurrency } from "../../views/utils/functions";

function CategoryItem({item, onPress}: any) {
    return ( 
        <TouchableOpacity
            style={{
            backgroundColor: COLORS.white,
            width: ms(163),
            height: ms(125),
                borderRadius: ms(12),
            borderWidth: ms(1),
                borderColor: COLORS.tint_grey,
                marginRight: ms(16),
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          
        }}
        >
            <View style={{  gap: ms(5), width:ms(154)}}>
                <_Text text={item.description} textAlign="center" fontSize={ms(15)} color={COLORS.dark} fontFamily={FONT.Lato_500_medium} />
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    {item?.icon}
                </View>
                <View style={{ flexDirection: "row", alignItems:"flex-start", justifyContent:"center", }}>
                    <_Text text="₦" fontSize={ms(15)} color={COLORS.dark} marginTop={ms(2)} fontFamily={FONT.Lato_600_semiBold} />
                    <_Text text={formatCurrency(item?.amount, false)} marginLeft={ms(3)} fontSize={ms(19)} color={COLORS.dark} fontFamily={FONT.Lato_600_semiBold} />
                </View>
            </View>
        </TouchableOpacity>
     );
}

export default CategoryItem;