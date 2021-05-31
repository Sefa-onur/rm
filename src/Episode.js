import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Header from './Header';

const Episode = ({ navigation, route }) => {
    const data = route.params.item;
    console.log(data)

    const renderItem = (item) => {
        return (
            <TouchableOpacity onPress = {() => navigation.navigate('Character',{item}) } >
                <View style={styles.CharactersView} >
                    <Text>
                        {item.index + 1}.
                   </Text>
                </View>
            </TouchableOpacity>

        )
    }
    return (
        <View style={{ flex: 1 }} >
            <Header text='Episode' />
            <View>
                <View style={styles.View} >
                    <Text style={styles.Text} >
                        {data.id}.<Text style={styles.DataText} >Episode</Text>
                    </Text>
                </View>
                <View style={styles.View}>
                    <Text style={styles.Text} >
                        Episode Name:<Text style={styles.DataText} >{data.name}</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.View}>
                <Text style={styles.Text} >
                    Publishat:<Text style={styles.DataText} >{data.air_date}</Text>
                </Text>
            </View>
            <View style={styles.Characters} >
                <Text style={styles.Text} >
                    Characters
                </Text>
            </View>
            <FlatList
                data={data.characters}
                renderItem={renderItem}
                keyExtractor={item => item.index}
            />
        </View>
    )
}

export default Episode;

const styles = StyleSheet.create({
    Text: {
        fontWeight: 'bold',
        fontSize: 18
    },
    DataText: {
        color: '#3b5998',
        fontWeight: 'normal',
        fontStyle: 'italic'
    },
    View: {
        borderBottomWidth: 1,
        borderColor: '#3b5998',
    },
    Characters: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderBottomWidth: 1,
        borderColor: '#3b5998'
    },
    CharactersView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3b5998',
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 3,
        borderRadius: 5,
        height: 40,
        backgroundColor: 'white',
        elevation: 5
    }
})