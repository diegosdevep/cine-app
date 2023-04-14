import React, { useState } from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import { styles } from './movies.styles';
import MovieNavbar from '../../components/MovieNavbar/MovieNavbar';
import { AntDesign } from '@expo/vector-icons';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import { data } from '../../data/data';
import { useNavigation, useRoute } from '@react-navigation/native';

const MoviesScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [malls, setMalls] = useState('');
  const [seatData, setSeatData] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  const today = new Date();
  const startDate = new Date();
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1);

  return (
    <SafeAreaView style={styles.container}>
      <MovieNavbar />

      <View style={styles.content}>
        <AntDesign name='Safety' size={24} color='orange' />
        <Text style={styles.text}>Your safety is our priority</Text>
      </View>

      <HorizontalDatepicker
        mode='gregorian'
        startDate={new Date(startDate)}
        endDate={new Date(endDate)}
        initialSelectedDate={new Date(today)}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor='#222831'
        unselectedItemBackgroundColor='#ececec'
        flatListContainerStyle={styles.flatListContainerStyle}
      />

      {data.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => {
            setMalls(item.name), setSeatData(item.tableData);
          }}
          style={{ margin: 10 }}
        >
          <Text style={styles.titles}>{item.name}</Text>
          {malls === item.name && (
            <FlatList
              numColumns={3}
              data={item.showtimes}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate('Theatre', {
                      malls: malls,
                      name: route.params.name,
                      timeSelected: item,
                      tableSeats: seatData,
                    })
                  }
                  style={styles.hoursContainer}
                >
                  <Text style={styles.hours}>{item}</Text>
                </Pressable>
              )}
            />
          )}
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default MoviesScreen;
