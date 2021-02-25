import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const Screen1 = () => {

    return (
        <>
    <View>
        <View style={styles.container}>
            <Text style={styles.login}>Login</Text>
        </View>
    </View>




        </>
    )
};
const styles = StyleSheet.create({
    container:{
        width:331,
        height:511,
        marginTop:176,
        marginLeft:40,
        borderRadius:40,
        backgroundColor:'#000000'
    },
    login: {
        width:89,
        height:46,
        marginTop:62,
        marginLeft:116,
        fontWeight:'400',
        fontSize:34,
        color:'#ffff'
    }
})

export default Screen1;