import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (

    <View>
      <Text style = {styles.headingText}>Scrollable Cards</Text>
      <ScrollView horizontal ={true} style ={styles.container}>
      <View style ={styles.container}>
        <View style ={[styles.cardOne, styles.card]}>
        <Text style={styles.redText}>These</Text>
        </View>

        <View style ={[styles.cardTwo, styles.card]}>
        <Text style={styles.redText}>are</Text>
        </View>

         <View style ={[styles.cardThree, styles.card]}>
        <Text style={styles.redText}>Scrollable</Text>
        </View>
        
        <View style ={[styles.cardFour, styles.card]}>
        <Text style={styles.redText}>Cards</Text>
        </View>

      </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        padding: 10,
        fontWeight:"bold"
    }, 
    maincontainer:
    {
      padding: 8
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

    cardFour:{
        backgroundColor: "#EF5354"
    },
    redText:{
        color:"rgb(68, 135, 146)"
    },
    

})