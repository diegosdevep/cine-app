import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './theatrenavbar.styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const TheatreNavbar = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.subContainer}>
        <View style={styles.content}>
          <Ionicons
            onPress={() => navigation.goBack()}
            size={24}
            color='black'
            name='arrow-back'
          />
          <View style={{ marginLeft: 6 }}>
            <Text style={styles.text1}>{route.params.name}</Text>
            <Text style={styles.text2}>{route.params.malls}</Text>
          </View>
        </View>
        <AntDesign size={24} color='black' name='sharealt' />
      </View>

      <Text style={styles.time}>{route.params.timeSelected}</Text>
      <Text style={styles.type}>CLASSIC (240)</Text>

      <View style={{ marginTop: 20 }} />
    </>
  );
};

export default TheatreNavbar;
