import React from 'react';
import { View, ImageBackground } from 'react-native';
import BoxHeader from './BoxHeader/BoxHeader';
import Categories from './Categories/Categories';
import { styles } from './header.styles';

const Header = () => {
  return (
    <View>
      <ImageBackground
        style={styles.img}
        source={{
          uri: 'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00020779.jpg',
        }}
      >
        <BoxHeader />
      </ImageBackground>

      <View style={{ marginTop: 110 }} />
      <Categories />
    </View>
  );
};

export default Header;
