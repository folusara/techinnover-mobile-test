import { TouchableOpacity, View } from "react-native";
import Logo from "../../assets/icons/tech_nover_logo.svg";
import UserIcon from "../../assets/icons/user_icon.svg";
import { ms } from "react-native-size-matters";
function Header() {
    return (
        <View style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            padding: "5%",
            justifyContent: "space-between"
        }} >
            <Logo width={ms(128)} height={ms(29)} />
            <TouchableOpacity style={{backgroundColor:"#D0D5DD", height: ms(37), width: ms(37), borderRadius: ms(37),  alignItems:"center", justifyContent:"center"}}>
                <UserIcon  width={ms(25)} height={ms(25)} />
            </TouchableOpacity>
       </View>
    );
}

export default Header;