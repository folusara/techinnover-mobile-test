import React, { FC, useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import moment, { Moment } from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ms } from 'react-native-size-matters';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

import _Text from '../../components/base/text';
import Container from '../../components/container';
import FONT from '../../components/utils/fonts';
import { COLORS } from '../../components/utils/colors';
import TechinnoverTextInput from '../../components/base/input';
import DatePicker from '../../components/base/date-picker';
import DropDownComponent from '../../components/base/dropDownComponent';
import CustomModal from '../../components/base/customModal';
import RenderDropModalContent from '../../components/base/renderDropDownModal';
import ImageUploadComponent from '../../components/base/imageUploader';
import TextArea from '../../components/base/TextArea';
import AppButton from '../../components/base/button';

import FoodIcon from '../../assets/icons/food_icon.svg';
import HousingIcon from '../../assets/icons/housing_icon.svg';
import ShoppingIcon from '../../assets/icons/shopping_icon.svg';
import FamilyIcon from '../../assets/icons/family_icon.svg';
import TransportIcon from '../../assets/icons/transportation_icon.svg';
import TravelIcon from '../../assets/icons/travel_icon.svg';
import EntertainmentIcon from '../../assets/icons/entertainment_icon.svg';
import HealthIcon from '../../assets/icons/health_icon.svg';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../screen.types'; // Adjust path as needed
import { RouteProp } from '@react-navigation/native';
import ScreenEnums from '../../enums/screen-enums';
import { formatCurrency } from '../../views/utils/functions';

type AddExpenseScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenEnums.ADD_EXPENSE
>;

type AddExpenseScreenRouteProp = RouteProp<RootStackParamList, ScreenEnums.ADD_EXPENSE>;

type Props = {
  navigation: AddExpenseScreenNavigationProp;
  route: AddExpenseScreenRouteProp;
};

type ExpenseCategory = {
  icon: JSX.Element;
  id: string;
  label: string;
};

const AddExpenseScreen: FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<Moment>(moment(new Date()));
  const [chosenDate, setChosenDate] = useState<Moment>(moment(new Date()));
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [getTime, setTime] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [amount, setAmount] = useState<number| null>(0);

  const expenseCategories: ExpenseCategory[] = [
    { icon: <FoodIcon height={ms(36)} width={ms(36)} />, id: 'food', label: 'Food & Drinks' },
    { icon: <HousingIcon height={ms(36)} width={ms(36)} />, id: 'housing', label: 'Housing' },
    { icon: <ShoppingIcon height={ms(36)} width={ms(36)} />, id: 'shopping', label: 'Shopping' },
    { icon: <FamilyIcon height={ms(36)} width={ms(36)} />, id: 'family', label: 'Family' },
    { icon: <TransportIcon height={ms(36)} width={ms(36)} />, id: 'transport', label: 'Transportation' },
    { icon: <TravelIcon height={ms(36)} width={ms(36)} />, id: 'travel', label: 'Travel / Vacation' },
    { icon: <EntertainmentIcon height={ms(36)} width={ms(36)} />, id: 'entertainment', label: 'Entertainment' },
    { icon: <HealthIcon height={ms(36)} width={ms(36)} />, id: 'health', label: 'Health' },
  ];

  const handleSelectDate = (date: Date) => {
    const selected = moment(date);
    setChosenDate(selected);
    setSelectedDate(true);
    setShowDatePicker(false);
  };

  const openPhoneGallery = () => {
     launchImageLibrary(
        {
          includeBase64: true,
          storageOptions: {
            skipBackup: true,
            path: "images",
          },
        },
        (response: any) => {
          if (response.didCancel) {
            console.log("User cancelled image picker");
          } else if (response.error) {
            console.log("ImagePicker Error: ", response.error);
          } else if (response.customButton) {
            console.log("User tapped custom button: ", response.customButton);
          } else {
            // const source = response.assets[0];
            // console.log(source.uri);
            // userDetails.profilePicture.photo = source.uri;
            // userDetails.profilePicture.base64 = source.base64;
            // setuserUpload(source.uri);
            // setToggleProfileModal(false);
            // setnewProfilePicture(source.uri);
            // handleUploadPicture(source.base64);
          }
        }
      );
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Container>
          <_Text
            text="Add Expense"
            color={COLORS.dark}
            fontFamily={FONT.Lato_600_semiBold}
            fontSize={ms(25)}
          />

          <View style={{ marginTop: ms(30) }}>
            <TechinnoverTextInput value={formatCurrency(amount ?? 0, false)} onChangeText={(txt) => setAmount(Number(txt))} label="How much?" />
          </View>

          <View style={styles.inputSpacing}>
            <DropDownComponent
              label="Category"
              onPress={() => setShowModal(true)}
              selectedValue={selectedCategory}
            />
          </View>

          <CustomModal visible={showModal} onClose={() => setShowModal(false)}>
            <RenderDropModalContent
              data={expenseCategories}
              onPress={(item: ExpenseCategory) => {
                
                setSelectedCategory(item.label);
                setShowModal(false);
                console.log(item);
                
              }}
            />
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
            <ImageUploadComponent onPress={openPhoneGallery} />
          </View>

          <View style={styles.inputSpacing}>
            <TextArea placeholder="Give a description" label="Note" />
          </View>

          <View style={styles.buttonRow}>
            <AppButton
              children="Cancel"
              width="48%"
              height={ms(50)}
              borderColor="#D0D5DD"
              borderWidth={ms(1)}
              borderRadius={ms(12)}
              backgroundColor={COLORS.white}
              textStyle={styles.cancelText}
              onPress={() => navigation.goBack()}
            />
            <AppButton
              children="Continue"
              width="48%"
              height={ms(50)}
              borderRadius={ms(12)}
              backgroundColor="#005EE8"
              textStyle={styles.continueText}
              // Add onPress handler
            />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

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
