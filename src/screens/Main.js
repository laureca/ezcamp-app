import React, {useCallback,  useEffect, useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import logo from '../assets/images/logo.png';
import like from '../assets/images/like.png';
import dislike from '../assets/images/dislike.png';

import api from '../store/api';

export default ({navigation: {getParam, navigate}}) => {
    const [users, setUsers] = useState([]);

    const {avatar: uri, bio, name} = useMemo(() => users[0] || {}, [users]);

    const id = getParam('id');

    const onEvaluate = useCallback(
        async evaluation => {
          const [{_id}, ...rest] = users;
    
          await api.post(`/devs/${_id}/${evaluation}`, null, {
            headers: {
              user: id,
            },
          });
    
          setUsers(rest);
        },
        [id, users],
      );
    
      const onDislike = useCallback(() => onEvaluate('dislikes'), [onEvaluate]);
      const onLike = useCallback(() => onEvaluate('likes'), [onEvaluate]);

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
                source={{uri}}
                />
                <View 
                    style={{
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                        borderRadius: 8,
                    }}>
                        <Text
                            style={{
                                fontSize: 16, 
                                fontWeight: 'bold',
                                color: '#333',
                            }}>
                                {name}
                        </Text>
                        <Text 
                            style={{
                                fontSize: 14,
                                color: '#999',
                                marginTop: 5,
                                lineHeight: 8,
                            }}
                            numberOfLines={3}>
                                {bio}
                        </Text>
                </View>
            </View>

            <View
            style={{
            flexDirection: 'row',
            }}>
            <TouchableOpacity
            onPress={dislike}
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FFF',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20,
                elevation: 2,
                shadowColor: '#000',
                shadowOpacity: 0.05,
                shadowRadius: 2,
                shadowOffset: {
                width: 0,
                height: 2,
                },
            }}>
            <Image source={dislike} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={like}
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FFF',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20,
                elevation: 2,
                shadowColor: '#000',
                shadowOpacity: 0.05,
                shadowRadius: 2,
                shadowOffset: {
                width: 0,
                height: 2,
                },
            }}>
            <Image source={like} />
            </TouchableOpacity>
        </View>
</View>)};

