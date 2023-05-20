import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import BoxHeader from './BoxHeader/BoxHeader';
import Categories from './Categories/Categories';
import { styles } from './header.styles';

const Header = () => {
  return (
    <View>
      <Image
        style={styles.img}
        source={{
          uri: 'https://i.pinimg.com/originals/c3/ab/de/c3abdef9bfcde2895c7718576cc5d91b.jpg',
        }}
      >
        {/* <BoxHeader /> */}
      </Image>

      <View style={{ marginTop: 0 }} />
      <Categories />
    </View>
  );
};

export default Header;
