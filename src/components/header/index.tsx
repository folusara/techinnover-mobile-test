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
            <Logo />
            <TouchableOpacity style={{backgroundColor:"#D0D5DD", height: ms(36), width: ms(36), borderRadius: ms(36),  alignItems:"center", justifyContent:"center"}}>
                <UserIcon />
            </TouchableOpacity>
       </View>
    );
}

export default Header;