import {TouchableOpacity, View} from 'react-native';
// import BackwardArrow from '../../assets/svgs/backward-arrow.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import _Text from '../base/text';
interface AuthHeaderProps {
  title: string;
  backwardNavigation: () => void;
}
function AuthHeader({title, backwardNavigation}: AuthHeaderProps) {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity onPress={backwardNavigation}>
          {/* <BackwardArrow /> */}
        </TouchableOpacity>
        <_Text
          textAlign="left"
          text={title}
          color="#120542"
          fontSize={20}
          fontWeight="500"
        />
        <View style={{width: '10%'}}></View>
      </View>
    </SafeAreaView>
  );
}

export default AuthHeader;
