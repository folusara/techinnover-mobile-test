/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';

function AccessCard({index, item}) {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          //   flexDirection: 'row',
          //   justifyContent: 'space-between',
          width: '40%',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 14,
            lineHeight: 20,
            color: '#2D3748',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Normal',
            fontSize: 12,
            lineHeight: 12,
            color: '#FCA311',
          }}>
          {item.user}
        </Text>
      </View>
      <View
        style={{
          //   flexDirection: 'row',
          alignItems: 'center',
          width: '40%',
          marginTop: 5,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 12,
            lineHeight: 12,
            color: '#2D3748',
          }}>
          Today
        </Text>

        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 10,
            lineHeight: 10,
            color: '#FCA311',
            marginTop: 5,
          }}>
          {item.time}
        </Text>
      </View>
      <Text>Used</Text>
    </TouchableOpacity>
  );
}

export default AccessCard;
