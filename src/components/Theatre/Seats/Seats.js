import { useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, FlatList, Pressable } from 'react-native';
import { MovieContext } from '../../../context/Context';
import { styles } from './seats.styles';

const Seats = () => {
  const route = useRoute();
  const { seats, setSeats, occupied } = useContext(MovieContext);

  const onSeatSelect = (item) => {
    const seatSelected = seats?.find((seat) => seat === item);

    if (seatSelected) {
      setSeats(seats.filter((seat) => seat !== item));
    } else {
      setSeats([...seats, item]);
    }
  };

  return (
    <FlatList
      numColumns={7}
      data={route.params.tableSeats}
      renderItem={({ item }) => (
        <Pressable onPress={() => onSeatSelect(item)} style={styles.seats}>
          {seats?.includes(item) ? (
            <Text
              style={{
                backgroundColor: '#FFC40C',
                padding: 8,
                flex: 1,
                width: '100%',
              }}
            >
              {item}
            </Text>
          ) : occupied.includes(item) ? (
            <Text
              style={{
                backgroundColor: '#989898',
                padding: 8,
                flex: 1,
                width: '100%',
              }}
            >
              {item}
            </Text>
          ) : (
            <Text style={styles.textSeats}>{item}</Text>
          )}
        </Pressable>
      )}
      style={{ flexGrow: 1 }}
    />
  );
};

export default Seats;
