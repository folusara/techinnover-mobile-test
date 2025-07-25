import {  ScrollView, StyleSheet, View } from 'react-native';
import _Text from '../../components/base/text';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ms } from 'react-native-size-matters';
import Container from '../../components/container';
import FONT from '../../components/utils/fonts';
import { COLORS } from '../../components/utils/colors';
import TechinnoverTextInput from '../../components/base/input';
import DatePicker from '../../components/base/date-picker';
import moment from 'moment';
import DropDownComponent from '../../components/base/dropDownComponent';
import CustomModal from '../../components/base/customModal';
import RenderDropModalContent from '../../components/base/renderDropDownModal';
import FoodIcon from "../../assets/icons/food_icon.svg";
import HousingIcon from "../../assets/icons/housing_icon.svg";
import ShoppingIcon from "../../assets/icons/shopping_icon.svg";
import FamilyIcon from "../../assets/icons/family_icon.svg";
import TransportIcon from "../../assets/icons/transportation_icon.svg";
import TravelIcon from "../../assets/icons/travel_icon.svg";
import EntertainmentIcon from "../../assets/icons/entertainment_icon.svg";
import HealthIcon from "../../assets/icons/health_icon.svg";
import ImageUploadComponent from '../../components/base/imageUploader';
import TextArea from '../../components/base/TextArea';
import AppButton from '../../components/base/button';

function AddExpenseScreen({ route }) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<Boolean>(false);
  const [selectedTime, setSelecetdTime] = useState(moment(new Date()));
  const [chosenDate, setChosenDate] = useState(moment(new Date()));
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [getTime, setTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const expenseCategories = [
    { icon: <FoodIcon height={ms(36)} width={ms(36)} />, id: "food", label: "Food & Drinks" },
    { icon: <HousingIcon height={ms(36)} width={ms(36)} />, id: "transport", label: "Housing" },
    { icon: <ShoppingIcon height={ms(36)} width={ms(36)} />, id: "utilities", label: "Shopping" },
    { icon: <FamilyIcon height={ms(36)} width={ms(36)} />, id: "housing", label: "Family" },
    { icon: <TransportIcon height={ms(36)} width={ms(36)} />, id: "health", label: "Transportation" },
    { icon: <TravelIcon height={ms(36)} width={ms(36)} />, id: "education", label: "Travel/ Vacation" },
    { icon: <EntertainmentIcon height={ms(36)} width={ms(36)} />, id: "entertainment", label: "Entertainment" },
    { icon: <HealthIcon height={ms(36)} width={ms(36)} />, id: "clothing", label: "Health" }
  ];

  const handleSelectDate = (date: any) => {
    let time = moment(date);
    setChosenDate(time);
    setSelectedDate(true);
    setShowDatePicker(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Container>
          <_Text text='Add Expense' color={COLORS.dark} fontFamily={FONT.Lato_600_semiBold} fontSize={ms(25)} />
          
          <View style={styles.inputSpacing}>
            <TechinnoverTextInput label='How much?' />
          </View>

          <View style={styles.inputSpacing}>
            <DropDownComponent label='Category' onPress={() => setShowModal(true)} selectedValue={selectedCategory} />
          </View>

          <CustomModal visible={showModal} onClose={() => setShowModal(false)}>
            <RenderDropModalContent data={expenseCategories} />
          </CustomModal>

          <View style={styles.inputSpacing}>
            <DatePicker
              mode="date"
              label="Expense date"
              onPress={() => setShowDatePicker(!showDatePicker)}
              onConfirm={handleSelectDate}
              chosenDate={chosenDate.format('YYYY-MM-DD')}
              showDatePicker={showDatePicker}
              selectedDate={selectedDate}
              getTime={getTime}
              onCancel={() => setShowDatePicker(false)}
            />
          </View>

          <View style={styles.inputSpacing}>
            <ImageUploadComponent onPress={null} />
          </View>

          <View style={styles.inputSpacing}>
            <TextArea placeholder='Give a description' label='Note' />
          </View>

          <View style={styles.buttonRow}>
            <AppButton
              children="Cancel"
              width="48%"
              height={ms(50)}
              borderColor='#D0D5DD'
              borderWidth={ms(1)}
              borderRadius={ms(12)}
              backgroundColor={COLORS.white}
              textStyle={styles.cancelText}
              onPress={() => navigation.goBack()}
            />
            <AppButton
              children="Continue"
              width='48%'
              height={ms(50)}
              borderRadius={ms(12)}
              backgroundColor='#005EE8'
              textStyle={styles.continueText}
            />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddExpenseScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: ms(20),
    backgroundColor: COLORS.white,
  },
  inputSpacing: {
    marginTop: ms(15),
  },
  buttonRow: {
    marginTop: ms(40),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelText: {
    color: COLORS.dark,
    fontSize: ms(17),
    fontFamily: FONT.Lato_600_semiBold,
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: ms(17),
    fontFamily: FONT.Lato_600_semiBold,
  },
});
