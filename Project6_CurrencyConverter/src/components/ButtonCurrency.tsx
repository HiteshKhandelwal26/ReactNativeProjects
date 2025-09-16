import {View, Text, StyleSheet} from "react-native"
import React, {JSX, PropsWithChildren} from "react"



//TODO the below prop is created to ensure that whenever we use ButtonCurrency component, it should always use atleast name and flag strings
type ButtonCurrencyProps = PropsWithChildren<{
    countryName: string;
    countryFlag:string;
}>

const ButtonCurrency = (props: ButtonCurrencyProps):JSX.Element =>{

    return(
        <View style = {styles.container}>
            <Text style = {styles.name}>{props.countryName}</Text>
            <Text style = {styles.flag}>{props.countryFlag}</Text>


        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent:"center"
        },
        name:{
            fontSize: 15,
            color: "#cfh654",
            alignItems:"center",
            justifyContent:"center",
            fontWeight:"bold",
            marginBottom: 4
        },
        flag:{
            fontSize: 12,
            color: "#ffffff",

        }
    }
)

export default ButtonCurrency