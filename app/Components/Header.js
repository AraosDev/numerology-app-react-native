import React from 'react';
import {StyleSheet,View,Text } from 'react-native';

function Header({title}){
    return(
    <View style={styles.headerView}>
        <View style={styles.header}>
            <Text style={styles.title}>Numerology App</Text>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    </View>
    
    )
}

const styles = StyleSheet.create({
    headerView:{
        flex: 1,
        flexDirection: "row",
        backgroundColor:'#737373',
        maxHeight:90,
    },
    header:{
        flex:4,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        flex:1,
        paddingTop:10,
        fontSize:25,
        color:'white'
    },
    subtitle:{
        flex:1,
        padding:8,
        fontSize:14,
        color:'white'
    }
})

export default Header;
