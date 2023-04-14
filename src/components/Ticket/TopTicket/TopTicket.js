import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { styles } from './topticket.styles';
import DetailTicket from '../Details/DetailTicket';
import PaymentDetails from '../PaymentDetails/PaymentDetails';
import QrCode from '../QrCode/QrCode';

const TopTicket = () => {
  const route = useRoute();

  return (
    <View style={styles.content}>
      <View style={styles.box}>
        <Text style={styles.name}>{route.params.name}</Text>
        <Text>{route.params.selectedSeats.length}</Text>
      </View>

      <View style={styles.box}>
        <Text style={{ fontSize: 16, color: 'grey' }}>
          New York Cinema - 2D
        </Text>
        <Text style={{ color: 'red', fontSize: 16 }}>PVR TICKET</Text>
      </View>

      <Text style={styles.mall}>{route.params.malls}</Text>

      <Text style={styles.border} />

      <DetailTicket />
      <PaymentDetails />
      <QrCode />
    </View>
  );
};

export default TopTicket;
