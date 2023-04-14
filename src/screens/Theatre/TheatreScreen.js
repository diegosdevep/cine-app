import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './theatre.styles';
import TheatreNavbar from '../../components/Theatre/TheatreNavbar/TheatreNavbar';
import Seats from '../../components/Theatre/Seats/Seats';
import SeatsTypes from '../../components/Theatre/SeatsTypes/SeatsTypes';
import FooterTheatre from '../../components/Theatre/FooterTheatre/FooterTheatre';

const TheatreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TheatreNavbar />
      <Seats />
      <SeatsTypes />
      <FooterTheatre />
    </SafeAreaView>
  );
};

export default TheatreScreen;
