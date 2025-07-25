import { FlatList, TouchableOpacity, View, StyleSheet } from "react-native";
import { COLORS } from "../utils/colors";
import Container from "../container";
import _Text from "./text";
import FONT from "../utils/fonts";
import { ms } from "react-native-size-matters";
import ForwardIcon from "../../assets/icons/forward_icon.svg";

interface Props {
  data: any[];
}

const RenderItem = ({ item }: { item: any }) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemContent}>
        {item?.icon}
        <_Text
          textAlign="center"
          text={item?.label}
          color={COLORS.dark}
          marginLeft={ms(10)}
          fontSize={ms(17)}
          fontFamily={FONT.Lato_500_medium}
          fontWeight="400"
        />
      </View>
      <ForwardIcon />
    </TouchableOpacity>
  );
};

export default function RenderDropModalContent({ data }: Props) {
  return (
    // <View style={styles.container}>
    //   <Container>
    //     <_Text
    //       textAlign="center"
    //       text={'Select a Category'}
    //       color={COLORS.dark}
    //       fontSize={ms(21)}
    //       marginTop={ms(40)}
    //       fontFamily={FONT.Lato_600_semiBold}
    //       fontWeight="400"
    //     />
    //    <View style={{marginTop: ms(20)}}>
    //      <FlatList
    //       data={data}
    //       keyExtractor={(_, index) => index.toString()}
    //       renderItem={({ item }) => <RenderItem item={item} />}
    //       showsVerticalScrollIndicator={false}
    //       scrollEnabled={true}
    //     />
    //    </View>
    //   </Container>
    // </View>
    <View style={styles.container}>
      <Container style={{ flex: 1 }}> {/* Add flex:1 here too */}
        <_Text
          textAlign="center"
          text={'Select a Category'}
          color={COLORS.dark}
          fontSize={ms(21)}
          marginTop={ms(40)}
          fontFamily={FONT.Lato_600_semiBold}
          fontWeight="400"
        />
        <FlatList
          data={data}
          contentContainerStyle={{ paddingBottom: ms(100) }} // Optional padding
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <RenderItem item={item} />}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        />
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    height: '100%',
  },
  itemContainer: {
    height: ms(61),
    borderWidth: ms(1),
    borderColor: '#EAECF0',
    borderTopEndRadius: ms(12),
    borderTopRightRadius: ms(12),
    borderBottomRightRadius: ms(12),
    marginTop: ms(15),
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#F97316',
    width: ms(37),
    height: ms(37),
    borderRadius: ms(37),
    marginRight: ms(10),
  },
});
