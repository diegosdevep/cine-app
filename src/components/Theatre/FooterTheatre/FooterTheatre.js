import React, { useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import { MovieContext } from '../../../context/Context';
import { styles } from './footer.styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const FooterTheatre = () => {
  const { seats, setSeats, occupied, selectedDate } = useContext(MovieContext);
  const navigation = useNavigation();
  const route = useRoute();

  const fee = 87;
  const noOfSeats = seats.length;
  const total = seats.length > 0 ? fee + noOfSeats * 240 : 0;
  const displayName = [...seats];

  const showSeat = () => {
    return seats.map((seat, index) => (
      <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginTop: 4, fontSize: 17, flexDirection: 'row' }}>
          {seat}
        </Text>
      </View>
    ));
  };

  const goToTicket = () => {
    if (total > 0) {
      occupied.push(...seats);
      navigation.navigate('Ticket', {
        name: route.params.name,
        malls: route.params.malls,
        timeSelected: route.params.timeSelected,
        total: total,
        date: selectedDate,
        image: route.params.image,
        selectedSeats: displayName,
      });
      setSeats([]);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text style={styles.text}>Show end tome approx 6:51Pm</Text>

          {seats.length > 0 ? (
            <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
              {showSeat()}
            </View>
          ) : (
            <Text style={{ fontSize: 18 }}>No Seats Selected</Text>
          )}
        </View>

        <View
          style={{ backgroundColor: '#E0E0E0', borderRadius: 6, padding: 12 }}
        >
          <Text style={{ width: 110, fontSize: 14 }}>
            Now with ticket cancellation
          </Text>
        </View>
      </View>

      <Pressable onPress={goToTicket} style={styles.btn}>
        {seats.length > 0 ? (
          <Text style={{ fontSize: 17, fontWeight: '600' }}>
            {seats.length} Seat's Selected
          </Text>
        ) : (
          <Text style={{ fontSize: 17, fontWeight: '600' }}>
            No Seat Selected
          </Text>
        )}

        <Text style={styles.textBtn}>Pay ${total}</Text>
      </Pressable>
    </>
  );
};

export default FooterTheatre;
