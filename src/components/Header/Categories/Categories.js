import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { categories } from '../../../data/categories';
import { styles } from './categories.styles';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((cate, index) => (
        <View key={index} style={styles.content}>
          <Text style={styles.text}>{cate.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;
