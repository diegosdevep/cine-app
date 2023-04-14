import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './boxheader.styles';

const BoxHeader = () => {
  return (
    <Pressable style={styles.content}>
      <Text style={styles.upTitle}>Reasing in 1 days</Text>

      <View style={styles.flexRSB}>
        <View>
          <Text style={styles.title}>VIKRAN RONA</Text>
          <Text style={styles.subTitle}>U/A * KANNADA</Text>
        </View>

        <Pressable style={styles.containerBook}>
          <Text style={styles.book}>Book</Text>
        </Pressable>
      </View>

      <Text style={styles.text}>Fantasy, thriller, action</Text>
    </Pressable>
  );
};

export default BoxHeader;
