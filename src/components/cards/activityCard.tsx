/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';

function ActivityCard({index, item}) {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        marginTop: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
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
            fontFamily: 'Poppins-SemiBold',
            fontSize: 12,
            lineHeight: 12,
            color: '#2D3748',
          }}>
          Today
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 5,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Normal',
            fontSize: 12,
            lineHeight: 12,
            color: '#FCA311',
          }}>
          {item.user}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 10,
            lineHeight: 10,
            color: '#FCA311',
          }}>
          {item.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ActivityCard;
