import React from 'react';
import { View, Text, Pressable } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import { styles } from './qrcode.styles';
import { useNavigation } from '@react-navigation/native';

const QrCode = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.border} />

      <View style={styles.content}>
        <SvgQRCode value={'hello'} />
      </View>

      <Text style={styles.text}>W33JNK3</Text>
      <Text style={styles.border} />
      <Pressable onPress={() => navigation.navigate('Home')} style={styles.btn}>
        <Text style={styles.textBtn}>Home</Text>
      </Pressable>
    </View>
  );
};

export default QrCode;
