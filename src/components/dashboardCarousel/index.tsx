import { TouchableOpacity, View } from "react-native";
import { COLORS } from "../utils/colors";
import { ms } from "react-native-size-matters";
import _Text from '../base/text';
import FONT from "../utils/fonts";
import InterestRateIcon from "../../assets/icons/interest_rate_icon.svg";

function DashboardCarousel({ item }: any) {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.dark,
            width: ms(339),
            height: ms(150),
            borderRadius: ms(12),
            marginRight: ms(16),
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{gap: ms(10), alignItems: 'center'}}>
                <View style={{ flexDirection: "row", alignItems: "center"}}>
                    <_Text text={"Today spend"} fontSize={ms(16)} color={COLORS.white} fontFamily={FONT.Lato_600_semiBold} />
                    <_Text text={`(Mon, 15 Apr)`} marginLeft={ms(2)} fontSize={ms(16)} color={COLORS.white_fade} fontFamily={FONT.Lato_600_semiBold} />
                </View>
                 <View style={{ flexDirection: "row", alignItems:"flex-start", justifyContent:"center", }}>
                    <_Text text="₦" fontSize={ms(25)} color={COLORS.white} marginTop={ms(5)} fontFamily={FONT.Lato_600_semiBold} />
                    <_Text text="12,000" marginLeft={ms(3)} fontSize={ms(37)} color={COLORS.white} fontFamily={FONT.Lato_600_semiBold} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"center", }}>
                    <InterestRateIcon width={ms(24)} height={ms(24)} />
                    <_Text text="47% below than last yesterday" marginLeft={ms(3)} fontSize={ms(12)} color={COLORS.white_fade} fontFamily={FONT.Lato_600_semiBold} />
                </View>
            </View>
       </TouchableOpacity>
    );
}

export default DashboardCarousel;