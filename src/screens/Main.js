import React from 'react';
import {Image, View} from 'react-native';

import logo from '../assets/images/logo.png';

export default () => 
    <View
    style={{
        flex: 1,
        backgroundColor: '#E4E4E4',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
          <Image source={logo}/>

    </View>;

