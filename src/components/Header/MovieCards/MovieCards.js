import React from 'react';
import { ScrollView } from 'react-native';
import { movies } from '../../../data/movies';
import Card from './Card';

const MovieCards = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
      }}
    >
      {movies.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

export default MovieCards;
