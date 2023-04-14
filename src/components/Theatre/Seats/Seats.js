import { useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, FlatList, Pressable } from 'react-native';
import { MovieContext } from '../../../context/Context';
import { styles } from './seats.styles';

const Seats = () => {
  const route = useRoute();
  const { seats, setSeats } = useContext(MovieContext);

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
              style={[
                styles.textSeats,
                {
                  backgroundColor: 'orange',
                  borderColor: 'orange',
                  flex: 1,
                  width: '100%',
                },
              ]}
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
