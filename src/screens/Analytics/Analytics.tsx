import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import Container from '../../components/container';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import _Text from '../../components/base/text';
import FONT from '../../components/utils/fonts';
import { COLORS } from '../../components/utils/colors';
import { ms } from 'react-native-size-matters';
import DropDownIcon from '../../assets/icons/dropDownIcon.svg'
import { useState } from 'react';
import FeatureHeader from '../../components/feature-header';
import AddIcon from '../../assets/icons/add_plus_icon.svg'
import CategoryItem from '../../components/category/categoryItem';
import TransactioIcon1 from '../../assets/icons/transactionIcon1.svg';
import TransactionIcon2 from '../../assets/icons/transaction_icon2.svg';
import TransactionItem from '../../components/TransactionItem';
import TrnsactionFoodIcon from "../../assets/icons/food_expense_icon.svg"
import HousingIcon from "../../assets/icons/housing_expense_icon.svg"
import { PieChart } from 'react-native-svg-charts';
import AppButton from '../../components/base/button';
import { useNavigation } from '@react-navigation/native';
import ScreenEnums from '../../enums/screen-enums';

function AnalyticsScreen() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const navigation = useNavigation();
  const types = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Daily' },
    { id: 3, title: 'Weekly' },
    { id: 4, title: 'Monthly' },
  ];

  const expenseCategories = [
    { title: 'Food & Drinks', value: 'Groceries, restaurants, coffee shops', color: '#F04438' },
    { title: 'Family', value: 'Childcare, dependents, family support', color: '#039855' },
    { title: 'Housing', value: 'Rent, mortgage, home maintenance', color: '#FACC15' },
    { title: 'Shopping', value: 'Clothing, electronics, personal items', color: '#F97316' },
    { title: 'Transportation', value: 'Fuel, ride-hailing, car maintenance', color: '#005EE8' },
    { title: 'Travel & Vacation', value: 'Flights, hotels, holiday spending', color: '#800080' },
  ];
  const chartHeight = ms(300);
  const pieChartData = expenseCategories.map((category, index) => {
  const randomAmount = Math.floor(Math.random() * 20000) + 1000; // Random value between 1000 and 20999
  return {
    key: index + 1,
    value: randomAmount,
    svg: {
      fill: category.color,
    },
    arc: { padAngle: 0 },
    label: category.title,
  };
});
  const transactions = [
    {
      description: 'Grocery shopping',
      amount: 23500,
      category: 'Food & Drinks',
      date: 'Wed, 19 Jan',
      icon: <TrnsactionFoodIcon width={ms(36)} height={ms(36)} />,
      color: '#FEC53D',
    },
      {
      description: 'Cooking gas',
      amount: 12000,
      category: 'Housing',
      date: 'Sun, 16 Jan',
      icon: <HousingIcon width={ms(36)} height={ms(36)} />,
      color: '#A162F7',
    },
    {
      description: 'Uber ride to office',
      amount: 3500,
      category: 'Transport',
      date: 'Fri, 21 Jan',
      icon: <TransactioIcon1 width={ms(36)} height={ms(36)} />,
      color: '#52C8FF',
    },
    {
      description: 'Netflix subscription',
      amount: 4500,
      category: 'Entertainment',
      date: 'Sat, 22 Jan',
      icon: <TransactionIcon2 width={ms(36)} height={ms(36)} />,
      color: '#FF8E63',
    },
    {
      description: 'Electricity bill',
      amount: 18000,
      category: 'Utilities',
      date: 'Mon, 24 Jan',
      icon: <TransactioIcon1 width={ms(36)} height={ms(36)} />,
      color: '#4CD964',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Header />
        <Container>
          <View style={styles.headerRow}>
            <_Text
              text='Expense Report'
              color={COLORS.dark}
              fontFamily={FONT.Lato_600_semiBold}
              fontSize={ms(23.5)}
            />
            <TouchableOpacity style={styles.dropdown}>
              <_Text color='#667085' fontFamily={FONT.Lato_500_medium} fontSize={ms(15)} text='This year (2024)' />
              <DropDownIcon />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.typeSelector}>
            {types.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedIndex(index)}
                style={[
                  styles.typeItem,
                  selectedIndex === index
                    ? styles.typeItemActive
                    : styles.typeItemInactive,
                ]}
              >
                <_Text
                  text={item.title}
                  fontSize={ms(15)}
                  color={selectedIndex === index ? 'white' : '#667085'}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

         <View
  style={{
    width: '100%',
    marginTop: ms(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <View
    style={{
      width: chartHeight,
      height: chartHeight,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <PieChart
      style={{
        height: chartHeight,
        width: chartHeight,
      }}
      data={pieChartData}
      innerRadius={109}
    />

    <View
      style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <_Text
        text="Total Expense"
        color="#667085"
        textAlign="center"
        fontFamily={FONT.Lato_600_semiBold}
        fontSize={ms(16)}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginTop: ms(10)
        }}
      >
        <_Text
          text="₦"
          fontSize={ms(17)}
          color={COLORS.dark}
          fontFamily={FONT.Lato_600_semiBold}
        />
        <_Text
          text="12,000"
          marginLeft={ms(3)}
          fontSize={ms(25)}
          lineHeight={ms(34)}
          color={COLORS.dark}
          fontFamily={FONT.Lato_600_semiBold}
        />
      </View>
    </View>
  </View>
</View>


          <View style={styles.categoryLegend}>
            <View>
              {expenseCategories.slice(0, 3).map((item) => (
                <View key={item.value} style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: item.color }]} />
                  <_Text
                    text={item.title}
                    color='#667085'
                    fontSize={ms(14)}
                    marginLeft={ms(8)}
                    marginTop={ms(-2.5)}
                    fontFamily={FONT.Lato_400_regular}
                  />
                </View>
              ))}
            </View>
            <View>
              {expenseCategories.slice(3, 6).map((item) => (
                <View key={item.value} style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: item.color }]} />
                  <_Text
                    text={item.title}
                    color='#667085'
                    fontSize={ms(14)}
                    marginLeft={ms(8)}
                    marginTop={ms(-2.5)}
                    fontFamily={FONT.Lato_400_regular}
                  />
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <FeatureHeader 
              onPressAction={
               () => navigation.navigate(ScreenEnums.BOTTOM_TAB_STACK)
              }
              title='Categories' 
              icon={<AddIcon height={ms(16)} 
              width={ms(16)} />} rightText='Add' />
            <View style={styles.categoryList}>
              <FlatList
                data={transactions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <CategoryItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View style={styles.section}>
            <FeatureHeader title='Transaction History' />
            <FlatList
              data={transactions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <TransactionItem transactionHistory item={item} />}
              scrollEnabled={false}
            />
            <AppButton 
             children="Load more Transaction"
                width="100%"
                height={ms(50)}
                borderColor="#005EE8"
                style={{marginTop: ms(30)}}
                borderWidth={ms(1)}
                borderRadius={ms(12)}
                backgroundColor={COLORS.white}
                textStyle={{
                  color:"#005EE8",
                  fontFamily: FONT.Lato_500_medium,
                  fontSize: ms(17),
                }}
            />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AnalyticsScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: ms(40),
  },
  scrollView: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  headerRow: {
    width: '100%',
    marginTop: ms(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdown: {
    backgroundColor: COLORS.white,
    borderColor: '#EAECF0',
    borderWidth: ms(1),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: ms(12),
    paddingHorizontal: '2.5%',
    height: ms(44),
    width: ms(151),
  },
  typeSelector: {
    marginTop: ms(20),
  },
  typeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: ms(20),
    paddingVertical: ms(10),
    marginRight: ms(8),
    borderRadius: ms(12),
  },
  typeItemActive: {
    backgroundColor: '#005EE8',
  },
  typeItemInactive: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EAECF0',
  },
  categoryLegend: {
    width: '100%',
    alignItems: 'center',
    marginTop: ms(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  legendItem: {
    width: ms(123),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: ms(15),
  },
  legendDot: {
    height: ms(8),
    width: ms(8),
    borderRadius: ms(8),
  },
  section: {
    marginTop: ms(40),
  },
  categoryList: {
    marginTop: ms(10),
  },
});
