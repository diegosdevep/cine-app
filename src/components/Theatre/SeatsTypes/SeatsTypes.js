import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './seatstypes.styles';

const SeatsTypes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FontAwesome
          style={styles.icon}
          name='square'
          size={24}
          color='#FFC40C'
        />
        <Text>Selected</Text>
      </View>
      <View>
        <FontAwesome style={styles.icon} name='square' size={24} color='#FFF' />
        <Text>Vacant</Text>
      </View>
      <View>
        <FontAwesome
          style={styles.icon}
          name='square'
          size={24}
          color='#989898'
        />
        <Text>Ocuppied</Text>
      </View>
    </View>
  );
};

export default SeatsTypes;
