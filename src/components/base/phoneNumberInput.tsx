import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  PureComponent,
} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  Platform,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
// import Cancel from '../../assets/svgs/cancel.svg';
import CustomModal from './customModal';
// import DropdownIcon from '../../assets/svgs/country-code-dropdown.svg';
// import {ColorScheme} from '../../utils/colorScheme';
import _Text from './text';

interface PhoneInputProps {
  ContainerStyles?: StyleProp<ViewStyle>;
  onChangeText?: Dispatch<SetStateAction<string>>;
  value?: string | undefined;
  countryButtonBackground?: string;
  placeholder?: string;
  inputRef?: any;
  getTextInput?: (val: string) => void;
  onBlur?: () => void;
  label?: string;
  error?: string;
}

interface CountryModel {
  name: string;
  code: string;
  flag: string;
  dial_code: string;
}

interface CountryProps {
  item: CountryModel;
  onPress: Function;
}

class Country extends PureComponent<CountryProps> {
  render() {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', height: 40, alignItems: 'center'}}
        onPress={() => {
          this.props.onPress();
        }}>
        <Text style={{fontSize: 20, lineHeight: 24}}>
          {this.props.item.flag}
        </Text>
        <Text style={styles.countryName}>{this.props.item.name}</Text>
      </TouchableOpacity>
    );
  }
}

const PhoneInput: FC<PhoneInputProps> = ({
  ContainerStyles,
  onChangeText,
  placeholder,
  inputRef,
  editable,
  label,
  error,
  onBlur,
}: PhoneInputProps) => {
  const countries: Array<CountryModel> = require('../../../countries.json');
  const [filteredCountries, setFilteredCountries] = useState<
    Array<CountryModel>
  >([...countries]);
  const [countrySelected, setCountrySelected] = useState<CountryModel>(
    countries.filter((country: CountryModel) => country.code === 'NG')[0],
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [number, setNumber] = useState('');

  function closeModal(): void {
    setShowModal(false);
    setFilteredCountries([...countries]);
  }

  function filterCountries(value: string): void {
    if (value.length > 0) {
      setFilteredCountries(
        countries.filter(country =>
          country.name.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    } else {
      setFilteredCountries(countries);
    }
  }
  {
    console.log(error);
  }

  function selectCountry(item: CountryModel): void {
    setCountrySelected(item);
    setPropValue(number);
    closeModal();
  }

  function setPropValue(value: string) {
    if (onChangeText) {
      onChangeText(`${countrySelected.dial_code}${value}`);
    }
  }

  const renderCountry = useCallback(
    ({item}: {item: CountryModel}) => (
      <Country
        item={item}
        onPress={() => {
          selectCountry(item);
        }}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(
    (item: any, index: number) => index.toString(),
    [],
  );

  return (
    <View>
      <_Text
        color="#000000"
        fontSize={15}
        fontWeight="400"
        textAlign="left"
        text={label}
      />
      <View
        style={
          ContainerStyles
            ? [ContainerStyles, {alignItems: 'center'}]
            : undefined
        }>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[styles.countryButton]}
            // onPress={() => {
            //   setShowModal(true);
            // }}
          >
            <Text style={{fontSize: 20, lineHeight: 24}}>
              {/* {countrySelected.flag} */}
              <Image
                height={32}
                width={32}
                source={require('../../assets/images/nigerian-flag.png')}
                resizeMode="contain"
              />
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              ...styles.text,
              paddingBottom: Platform.OS === 'ios' ? 1.5 : 1.5,
            }}>
            {/* {countrySelected.dial_code} */}
          </Text>
          <TextInput
            onChangeText={value => {
              setNumber(value);
              setPropValue(value);
            }}
            style={{
              flex: 1,
              // color: ColorScheme(useColorScheme),
              color: 'black',
            }}
            editable={editable}
            onBlur={onBlur}
            keyboardType={'phone-pad'}
            placeholder={placeholder !== undefined ? placeholder : ''}
            ref={inputRef}
          />
        </View>
        <CustomModal visible={showModal} onClose={closeModal}>
          <View
            style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
            <TextInput
              placeholder={'Search country'}
              onChangeText={filterCountries}
              style={styles.filterInput}
            />
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              {/* <Cancel width={16} height={16} fill={'#575757'} /> */}
            </TouchableOpacity>
          </View>

          <FlatList
            data={[]}
            renderItem={renderCountry}
            keyExtractor={keyExtractor}
            style={{marginHorizontal: 10, marginBottom: 10}}
          />
        </CustomModal>
      </View>
      {error && <_Text color="red" marginTop={10} text={error} />}
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginRight: 2,
    fontFamily: 'Clash Grotesk Variable',
    fontWeight: '400',
    fontSize: 17,
    color: '#000000',
  },
  closeButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryButton: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 58,
    height: 32,
    // // backgroundColor: 'red',
    // paddingRight: 4,
    // marginRight: 10,
    // // borderRadius: 4,
    // alignSelf: 'center',
    // borderRightWidth: 1,
    // borderRightColor: '#D1D5DB',
  },
  filterInput: {
    backgroundColor: '#eee',
    flex: 1,
    height: 40,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    fontFamily: 'WorkSans-Bold',
    fontWeight: '400',
  },
  countryName: {
    paddingVertical: 6,
    borderRadius: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
});
