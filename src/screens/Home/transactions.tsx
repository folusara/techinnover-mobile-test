import {ActivityIndicator, View} from 'react-native';
import _Text from '../../components/base/text';
import {useNavigation} from '@react-navigation/native';
// import Transaction
import {useEffect, useMemo, useState} from 'react';

function Transactions({route}) {
  const naviagtion = useNavigation();
  const [loading, setLoading] = useState<Boolean>(false);
  const backwardNavigation = () => {
    naviagtion.goBack();
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const transactions = useMemo(
    () => [
      {
        id: '1',
        title: 'Payment to John Doe',
        description: 'Transfer for groceries',
        amount: '-₦5,000',
        status: 'completed',
        date: '2025-05-25',
      },
      {
        id: '2',
        title: 'Received from Jane Smith',
        description: 'Freelance project',
        amount: '+₦15,000',
        status: 'completed',
        date: '2025-05-26',
      },
      {
        id: '3',
        title: 'Utility Bill',
        description: 'Electricity payment',
        amount: '-₦10,200',
        status: 'pending',
        date: '2025-05-27',
      },
      {
        id: '4',
        title: 'Netflix Subscription',
        description: 'Monthly subscription',
        amount: '-₦4,000',
        status: 'failed',
        date: '2025-05-20',
      },
    ],
    [],
  );

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
      }}>
      {/* <AuthHeader
        backwardNavigation={backwardNavigation}
        title="Transactions"
      /> */}
      
    </View>
  );
}

export default Transactions;
