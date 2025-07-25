import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ms } from "react-native-size-matters";
import _Text from "../base/text";
import FONT from "../utils/fonts";
import { COLORS } from "../utils/colors";
import { formatCurrency } from "../../views/utils/functions";

type TransactionItemProps = {
  item: {
    description: string;
    category: string;
    amount: number;
    date: string;
    color?: string;
    icon?: React.ReactNode;
  };
  onPress?: () => void;
  transactionHistory?: boolean;
};

const TransactionItem = ({ item, onPress, transactionHistory }: TransactionItemProps) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: transactionHistory ? ms(70) : ms(60),
        marginBottom: ms(0),
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderColor: "#EAECF0",
        borderTopEndRadius: ms(12),
        borderBottomRightRadius: ms(12),
        paddingHorizontal: transactionHistory && "5%",
        borderWidth: transactionHistory  && ms(1),
        marginTop:  transactionHistory  && ms(15),
        
      }}
      onPress={onPress}
    >
      {/* Left Side: Icon or Color Dot + Description */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {transactionHistory ? (
          <View
            style={{
              backgroundColor: item.color,
              height: ms(10),
              width: ms(10),
              borderRadius: ms(10),
            }}
          />
        ) : (
          item.icon
        )}

        <View style={{ gap: ms(3), marginLeft: ms(15) }}>
          <_Text
            fontSize={ms(16)}
            text={item.description}
            color={COLORS.dark}
            fontFamily={FONT.Lato_500_medium}
          />
          <_Text
            fontSize={ms(12)}
            text={item.category}
            color={COLORS.grey}
            fontFamily={FONT.Lato_400_regular}
          />
        </View>
      </View>

      {/* Right Side: Amount + Date */}
      <View style={{ gap: ms(3), alignItems: "flex-end" }}>
        <_Text
          fontSize={ms(16)}
          text={`${formatCurrency(item?.amount, true)}`}
          color={COLORS.dark}
          fontFamily={FONT.Lato_500_medium}
        />
        <_Text
          fontSize={ms(12)}
          text={item.date}
          color={COLORS.grey}
          fontFamily={FONT.Lato_400_regular}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
