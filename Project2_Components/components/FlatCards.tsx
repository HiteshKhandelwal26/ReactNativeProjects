import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (

    <View>
      <Text style = {styles.headingText}>Fixed Cards</Text>
      
      <View style ={styles.container}>
        <View style ={[styles.cardOne, styles.card]}>
        <Text style={styles.redText}>Card Red</Text>
        </View>

        <View style ={[styles.cardTwo, styles.card]}>
        <Text style={styles.redText}>Card Green</Text>
        </View>

         <View style ={[styles.cardThree, styles.card]}>
        <Text style={styles.redText}>Card Blue</Text>
        </View>

        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        padding: 10,
        fontWeight:"bold"
    }, 
    container:{
        flex:1,
        flexDirection:"row"
    },
    
    card:{
        width: 100,
        height: 100,
        margin: 8,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cardOne:{
        backgroundColor: "#EF5354"
    },
    cardTwo:{
        backgroundColor: "#50DBB4"
    },
    cardThree:{
    
        backgroundColor: "#5DA3FA"
    },
    redText:{
        color:"rgb(68, 135, 146)"
    }

})