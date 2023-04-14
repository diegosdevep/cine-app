import React from 'react';
import { SafeAreaView } from 'react-native';
import TopTicket from '../../components/Ticket/TopTicket/TopTicket';
import { styles } from './ticket.styles';

const TicketScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopTicket />
    </SafeAreaView>
  );
};

export default TicketScreen;
