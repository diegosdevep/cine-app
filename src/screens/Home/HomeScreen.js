import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import MovieCards from '../../components/Header/MovieCards/MovieCards';
import { styles } from './home.styles';
import Header from '../../components/Header/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <MovieCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
