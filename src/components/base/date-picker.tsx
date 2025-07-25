import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { ms } from 'react-native-size-matters';
import { COLORS } from '../utils/colors';
import FONT from '../utils/fonts';
import _Text from './text';
import DateIcon from "../../assets/icons/date_icon.svg"

type TimePickerModalProps = {
  onCancel: () => void;
  onConfirm: (date: Date) => void;
  showDatePicker: boolean;
  getTime: Date;
  selectedDate: boolean;
  label: string;
  value: string
  onPress: () => void;
  mode: 'time' | 'date' | 'datetime' | undefined,
  chosenDate: string
};

function TimePickerModal({
  onCancel,
  onConfirm,
  showDatePicker,
  getTime,
  label,
  value,
  onPress,
  chosenDate,
  placeholder,
  selectedDate,
  mode,
}: TimePickerModalProps) {
  return (
    <View >
        <_Text text={label} color={COLORS.dark} fontFamily={FONT.Lato_500_medium} fontSize={ms(15)} />
        <TouchableOpacity
            onPress={onPress}
            style={{height: ms(50),
            borderRadius:ms(12),
            borderWidth:ms(1),
            borderColor: "#D0D5DD",
            marginTop: ms(10),
            alignItems:"center",
            justifyContent:"space-between",
            paddingHorizontal: "5%",
            flexDirection:"row"
        }}>
           { selectedDate ? 
            <_Text color={COLORS.dark} fontFamily={FONT.Lato_400_regular} text={chosenDate} fontSize={ms(17)} />   
             :
            <_Text color={"#667085"} fontFamily={FONT.Lato_400_regular} text='DD/MM/YYYY' fontSize={ms(17)}  />   
        }
        <DateIcon />
            <DatePicker
                modal
                open={showDatePicker}
                mode={mode}
                date={getTime}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </TouchableOpacity>
    </View>
  );
}

export default TimePickerModal;
