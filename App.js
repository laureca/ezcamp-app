import React from 'react';
import {Image, View} from 'react-native';

import logo from './src/assets/images/logo.png';

export default () => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Image source={logo}/>
  </View>
);
