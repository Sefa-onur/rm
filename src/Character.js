import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import Header from './Header';

const Character = ({ navigation, route }) => {

    const params = route.params.item.item;
    const [data, setdata] = useState([])

    
    useEffect(() => {
        axios.get(params)
        .then(res => {
            setdata(res.data)
        })
    },[])
    console.log(data)
    if(data.length == 0 ){
        return(
            <View style = {{flex:1}} >
                <Header text = 'Character' />
                <ActivityIndicator size = 'large' color = '#3b5998' />
            </View>
        )
    }else {
        return (
            <View>
                <Header text = 'Character' />
                <View style = {styles.ImageView} >
                    <Image source = {{uri:data.image}} style = {styles.Image} />
                </View>
                <View>
                     <View style = {styles.InfoItem} >
                         <Text style = {styles.Text}>
                             Name:<Text style = {styles.InfoText} > {data.name} </Text>
                         </Text>
                     </View>
                     <View style = {styles.InfoItem} >
                         <Text style = {styles.Text}>
                             Status:<Text style = {styles.InfoText} > {data.status} </Text>
                         </Text>
                     </View>
                     <View style = {styles.InfoItem} >
                         <Text style = {styles.Text}>
                             Gender:<Text style = {styles.InfoText} > {data.gender} </Text>
                         </Text>
                     </View>
                     <View style = {styles.InfoItem} >
                         <Text style = {styles.Text}>
                             Species:<Text style = {styles.InfoText} > {data.gender} </Text>
                         </Text>
                     </View>
                     <View style = {styles.InfoItem} >
                         <Text style = {styles.Text}>
                             Type:<Text style = {styles.InfoText} > {data.type} </Text>
                         </Text>
                     </View>                   
                </View>
            </View>
        )
    }
    
}

export default Character;

const styles = StyleSheet.create({
    ImageView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    Image:{
        height:230,
        width:230,
        borderRadius:150,
    },
    InfoItem:{
        borderWidth:1,
        alignItems:'center',
        borderColor:'#3b5998',
        marginVertical:10,
        marginHorizontal:5,
        elevation:5,
        backgroundColor:'white',
        borderRadius:10,
        height:35,
        justifyContent:'center'
    },
    Text:{
        fontWeight:'bold',
        fontSize:18
    },
    InfoText:{
        fontWeight:'normal',
        fontStyle:'italic',
        color:'#3b5998'
    }
})