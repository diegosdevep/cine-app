import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Image, Text } from 'react-native';
import { styles } from './moviecards.styles';

const Card = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.content}>
      <Image style={styles.img} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>{item.language}</Text>
      <Text style={[styles.subtitle, { color: 'black' }]}>{item.genre}</Text>

      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate('Movies', { name: item.name })}
      >
        <Text style={styles.text}>Book</Text>
      </Pressable>
    </Pressable>
  );
};

export default Card;
