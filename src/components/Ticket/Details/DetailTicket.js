import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './detailticket.styles';

const DetailTicket = () => {
  const route = useRoute();

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.date}>DATE & TIME</Text>
          <Text style={styles.time}>{route.params.timeSelected}</Text>
          <Text style={styles.time}>
            {new Date(route.params.date).toLocaleString()}
          </Text>
        </View>
        <Image style={styles.img} source={{ uri: route.params.image }} />
      </View>
      <Text style={styles.border} />
    </>
  );
};

export default DetailTicket;
