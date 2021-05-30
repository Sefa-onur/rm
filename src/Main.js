import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from './Header';

const App = ({ navigation }) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode')

            .then(res => {
                console.log(res.data.results)
                setdata(res.data.results)
            })
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View style={styles.ListView} >
                <View style={{ flex: 1 }} >
                    <Text style={styles.TextEpisode} >
                        {item.id}. Episode
                     </Text>
                    <Text>
                        Name:<Text style={{ fontStyle: 'italic' }} >{item.name}</Text>
                    </Text>
                    <Text>
                        Publishat:<Text style={{ fontStyle: 'italic' }} >{item.air_date}</Text>
                    </Text>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => navigation.navigate('Episode',{item})} >
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ color: '#3b5998', fontSize: 16 }} >View</Text>
                        <Icon name='right' color='#3b5998' size={20} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    if (data.length == 0) {
        return (
            <View>
                <Header text='Rick and Morty' />
                <View style={{justifyContent:'center',alignItems:'center'}} >
                    <ActivityIndicator color='#3b5998' size='large' />
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ flex: 1 }} >
                <Header text='Rick and Morty' />
                <FlatList
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={renderItem}
                />
            </View>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    ListView: {
        borderWidth: 1,
        marginVertical: 5,
        borderColor: '#3b5998',
        elevation: 5,
        backgroundColor: 'white',
        marginHorizontal: 3,
        height: 70,
        borderRadius: 5,
        flexDirection: 'row'
    },
    TextEpisode: {
        fontWeight: 'bold',
        fontSize: 17
    }
})