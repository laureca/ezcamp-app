import React, {useCallback, useState, useEffect} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import logo from '../assets/images/logo.png';
import api from '../store/api';

export default ({navigation: {getParam, navigate}}) => {
    const [users, setUsers] = useState([]);

    const id = getParam('id');

    const onLogout = useCallback(() => navigate('login'), [navigate]);

    const loadUsers = useCallback(async () => {
        const {data} = await api.get('/devs', {
            headers: {
                user: id
            },
        });

        setUsers(data);
    }, [id]);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

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

