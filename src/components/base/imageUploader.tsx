import { TouchableOpacity, View } from "react-native";
import CameraIcon from "../../assets/icons/camera_icon.svg"
import { ms } from "react-native-size-matters";
import _Text from "./text";
import { COLORS } from "../utils/colors";
import FONT from "../utils/fonts";

function ImageUploadComponent({
    onPress,
}) {
    return ( <TouchableOpacity style={{
                  height: ms(75),
                  borderRadius: ms(12),
                  borderWidth: ms(1),
                  borderColor: "#D0D5DD",
                  marginTop: ms(10),
                  alignItems: "center",
                  justifyContent: "flex-start",
                  paddingHorizontal: "5%",
                  flexDirection: "row",
    }} onPress={onPress}>
        <View style={{
            height: ms(40),
            width:ms(40),
            borderRadius: ms(20),
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#F2F4F7"
        }}>
            <CameraIcon />
        </View>
        <View style={{gap:ms(3), marginLeft: ms(10)}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <_Text
                    text={'Click to upload'}
                    color={'#005EE8'}
                    fontSize={ms(15)}
                    fontFamily={FONT.Lato_500_medium}
                />
                 <_Text
                    text={'or drag and drop'}
                    color={'#667085'}
                    fontSize={ms(15)}
                    marginLeft={ms(2)}
                    fontFamily={FONT.Lato_400_regular}
                />
            </View>
            <_Text
                textAlign="center"
                text={'SVG, PNG, JPG or GIF (max. 800x400px)'}
                color={'#667085'}
                fontSize={ms(13)}
                fontFamily={FONT.Lato_400_regular}
                fontWeight="400"
            />
        </View>
    </TouchableOpacity> );
}

export default ImageUploadComponent;