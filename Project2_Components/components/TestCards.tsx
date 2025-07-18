import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function TestCards() {
  return (
    <View >
      <Text style ={styles.headingText}>TestCards</Text>

        <ScrollView horizontal={true} style={styles.container}>
        <View style= {styles.container}>
        <View style={[styles.card, styles.card1]}>
        <Text>Card 1</Text>
        </View>


        <View style={[styles.card, styles.card2]}>
        <Text>Card 2</Text>
        </View>


        <View style={[styles.card, styles.card3]}>
        <Text>Card 3</Text> 
        </View>
</View>
        </ScrollView>
        




    </View>
  )
}

const styles = StyleSheet.create({

    headingText:{
        margin: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    container:{
        padding:5,
      flexDirection:"row"
    },
    card:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        margin: 12,
        height: 100,
        width: 100,
        borderRadius: 7,
        shadowColor:"#000000"
    },
    card1:{
        backgroundColor: "#5DA3FA"
    },
     card2:{
        backgroundColor: "#EF5354"
    },
     card3:{
        backgroundColor: "#50DBB4"
    }



})