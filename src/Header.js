import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return(
        <View style = {styles.HeaderView} >
            <Text style = {styles.Text} >
                {props.text}
            </Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    HeaderView:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#3b5998',
        elevation:5,
        marginBottom:5
    },
    Text:{
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic'
    }
})