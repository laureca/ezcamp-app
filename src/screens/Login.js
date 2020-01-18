import React, { useCallback, useState } from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import logo from '../assets/images/logo.png';

export default ({ navigation: {navigate} }) => {
  const [username, setUsername] = useState('');

  const onSubmit = useCallback(() => {
    // TODO try to authenticate
    // TODO navigate to main screen
    navigate('main');
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E4E4E4',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
      <Image source={logo}/>
      <TextInput 
        autoCapitalize="none" 
        placeholder={'Digite seu usuário do GitHub'}
        value={username}
        onChangeText={setUsername}
        style={{
          marginTop: 20,
          height: 45,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 4,
          alignSelf: 'stretch',
          paddingHorizontal:15,
        }}
      />
      <TouchableOpacity
        onPress={onSubmit} 
        style={{
          marginTop: 10,
          height: 45,
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F35009',
          borderRadius: 6,
        }}>
          <Text style={{
            color: '#E4E4E4',
            fontWeight: 'bold',
          }}>
          ENTRAR
          </Text>
      </TouchableOpacity>
      <Text 
        style={{
          color: '#A2A2A2',
          fontStyle: 'italic',
          marginTop: 10,
        }}>
        &copy; Laureca
      </Text>
    </View>
)};
