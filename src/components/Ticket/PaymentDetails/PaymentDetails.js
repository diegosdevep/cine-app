import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './paymentDetails.styles';

const PaymentDetails = () => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>Price Details</Text>

        <View style={styles.flex}>
          <Text style={styles.text}>Convenience Fee</Text>
          <Text style={styles.text}>$ 87</Text>
        </View>

        <View style={styles.flex}>
          <Text style={styles.text}>Grand Total</Text>
          <Text style={styles.text}>$ {route.params.total}</Text>
        </View>

        <View style={styles.flex}>
          <Text style={styles.text}>ID NO</Text>
          <Text style={styles.text}>W33JNK3</Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentDetails;
