import React, {useCallback} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import logo from '../assets/images/logo.png';

export default ({navigation: {navigate}}) => {
    const onLogout = useCallback(() => navigate('login'), [navigate]);

    return (
        <View
        style={{
            flex: 1,
            backgroundColor: '#E4E4E4',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableOpacity onPress={onLogout}>
                <Image source={logo}/>
            </TouchableOpacity>
            <View
            style={{
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 25,
                margin: 30,
            }}>
                <Image
                style={{
                    height: 300,
                    width: 300,
                }}
                source={null}
                />
            </View>
        </View>)};

