/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import _Text from '../../components/base/text';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import SunIcon from '../../assets/icons/sun_icon.svg';
import { COLORS } from '../../components/utils/colors';
import { ms } from 'react-native-size-matters';
import FONT from '../../components/utils/fonts';
import DashboardCarousel from '../../components/dashboardCarousel';
import Container from '../../components/container';
import { FlatList } from 'react-native-gesture-handler';
import FeatureHeader from '../../components/feature-header';
import QuickLink from '../../components/QuickLinks/quick-link';
import ScreenEnums from '../../enums/screen-enums';
import AddExpenseIcon from '../../assets/icons/add_expense_icon.svg';
import CreateCategoryIcon from '../../assets/icons/create_category_icon.svg';
import TransactionItem from '../../components/TransactionItem';
import TransactioIcon1 from '../../assets/icons/transactionIcon1.svg';
import TransactionIcon2 from '../../assets/icons/transaction_icon2.svg';

const carouselData = [{
  id: '1',
  title: 'Transactions',
  description: 'View your recent transactions',
  icon: 'transactions_icon', // Placeholder for icon
}, {
  id: '2',
  title: 'Analytics',
  description: 'View your spending analytics',
  icon: 'analytics_icon', // Placeholder for icon
}, {
  id: '3',
  title: 'Settings',
  description: 'Manage your account settings',
  icon: 'settings_icon', // Placeholder for icon
  },
  {
  id: '4',
  title: 'Settings',
  description: 'Manage your account settings',
  icon: 'settings_icon', // Placeholder for icon
  },
];

const SecondCarouselData = [{
  ctx: 'Add Expense',
  icon: <AddExpenseIcon width={ms(36)} height={ms(36)} />,
  route: ScreenEnums.ADD_EXPENSE,
}, {
  ctx: 'Create Category',
  icon: <CreateCategoryIcon width={ms(36)} height={ms(36)} />,
  route: ScreenEnums.ADD_EXPENSE,
}];
function HomeScreen() {
  const navigation = useNavigation();
  const flatlistRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  
  const transactions = [
  {
    description: "Cooking gas",
    amount: 12000,
    category: "Housing",
    date: "Sun, 16 Jan",
    icon: <TransactioIcon1 width={ms(36)} height={ms(36)} />,
  },
  {
    description: "Grocery shopping",
    amount: 23500,
    category: "Food",
    date: "Wed, 19 Jan",
     icon: <TransactionIcon2 width={ms(36)} height={ms(36)} />,
  },
  {
    description: "Uber ride to office",
    amount: 3500,
    category: "Transport",
    date: "Fri, 21 Jan",
    icon: <TransactioIcon1 width={ms(36)} height={ms(36)} />,
  },
  {
    description: "Netflix subscription",
    amount: 4500,
    category: "Entertainment",
    date: "Sat, 22 Jan",
    icon: <TransactionIcon2 width={ms(36)} height={ms(36)} />,
  },
  {
    description: "Electricity bill",
    amount: 18000,
    category: "Utilities",
    date: "Mon, 24 Jan",
    icon: <TransactioIcon1 width={ms(36)} height={ms(36)} />,
  }
];


  const navigateToAddExpense = (item) => {
    navigation.navigate(ScreenEnums.ADD_EXPENSE, { item });
  };
  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % carouselData.length;
      flatlistRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const { width } = Dimensions.get('window');

  // Update activeIndex on manual scroll
  useEffect(() => {
    const listener = scrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      setActiveIndex(index);
    });
    return () => scrollX.removeListener(listener);
  }, []);

  const renderItem = ({ item }: { item: typeof carouselData[0] }) => (
    <DashboardCarousel item={item} />
  );

  const renderDotIndicators = () =>
    carouselData.map((_, index) => (
      <View
        key={`dot-${index}`}
        style={{
          height: ms(6),
          width: ms(16),
          borderRadius: ms(100),
          marginHorizontal: 2,
          borderWidth: 1,
          borderColor: COLORS.white,
          backgroundColor: activeIndex === index ? COLORS.dark : COLORS.tint_grey,
        }}
      />
    ));


  return (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView
      contentContainerStyle={{ paddingBottom: ms(40) }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ width: "100%", backgroundColor: COLORS.white }}>
        <Header />

        <View style={{ paddingHorizontal: '5%', paddingTop: ms(10), flexDirection: 'row', alignItems: 'center' }}>
          <_Text text='Good Morning!' fontSize={ms(15)} color='#667085' fontFamily={FONT.Lato_500_medium} />
          <SunIcon width={24} height={24} style={{ marginLeft: ms(5) }} />
        </View>
        <View style={{ paddingHorizontal: '5%', marginTop: ms(5) }}>
          <_Text text='Adeola Adeyoyin' fontSize={ms(17)} color={COLORS.dark} fontWeight="200" fontFamily={FONT.Lato_500_medium} />
        </View>

        <View style={{ paddingLeft: '5%', paddingTop: ms(20) }}>
          <Animated.FlatList
            ref={flatlistRef}
            data={carouselData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: ms(10) }}>
            {renderDotIndicators()}
          </View>
        </View>

        <View style={{ paddingHorizontal: '5%', marginTop: ms(25) }}>
          <FeatureHeader title='Quick Links' iconColor='red' />
          <View style={{ marginTop: ms(10) }}>
            <FlatList
              data={SecondCarouselData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <QuickLink item={item} onPress={() => navigateToAddExpense(item)} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
            />
          </View>
        </View>

        <View style={{ paddingHorizontal: '5%', marginTop: ms(20) }}>
          <FeatureHeader title='Recent Transaction' rightText='View All' />
          <View style={{ marginTop: ms(10) }}>
            <FlatList
              data={transactions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <TransactionItem item={item} />}
              scrollEnabled={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  safeArea: {
    paddingTop: 20,
    backgroundColor: 'white',

  },
});

export default HomeScreen;
