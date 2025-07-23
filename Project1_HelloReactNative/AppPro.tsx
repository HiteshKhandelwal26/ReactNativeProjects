import React, { JSX } from "react";

import {StyleSheet, useColorScheme, View, SafeAreaView, Text, Button, Alert} from "react-native";

function AppPro(): JSX.Element
{
    const theme = useColorScheme()
    const isDarkmode = theme === "dark"
        return(
            <View style= {styles.container}>
                <Text style={ isDarkmode? styles.whiteText1: styles.darkText}>Hello World - Hitesh</Text>
                 <Text style={ isDarkmode? styles.whiteText2: styles.darkText}>Welcome to 1st React project</Text>
                <View style={styles.buttonStyle} >
                <Button title="Button clicked"></Button>
                </View>
                </View>
        )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems : "center",
           justifyContent: "center"
          
                },

        whiteText1:{
            fontSize: 28,
            color: "#000000",
            backgroundColor: "#cdcdcd",
        },
          whiteText2:{
            color: "#000000",
             backgroundColor: "#cdcdcd",
             fontSize: 22,
             margin: 8
        },

         darkText:{
            color: "#FFFFFF",
             backgroundColor: "#000000",
             fontSize: 30,
             fontStyle:"italic"
        },
        buttonStyle:{
            margin:10,
            padding: 8,
            backgroundColor: "#090909"
        }
    }
)

export default AppPro;