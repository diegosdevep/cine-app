import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './movienavbar.styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const MovieNavbar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.content}>
      <View style={styles.box1}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name='arrow-back'
          size={24}
          color='black'
        />
        <Text style={styles.text}>{route.params.name}</Text>
      </View>

      <View style={styles.box1}>
        <Ionicons name='search' size={24} color='black'></Ionicons>
        <Ionicons name='filter-outline' size={24} color='black'></Ionicons>
        <Ionicons name='share-outline' size={24} color='black'></Ionicons>
      </View>
    </View>
  );
};

export default MovieNavbar;
