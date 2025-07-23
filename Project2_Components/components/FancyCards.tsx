import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View style={styles.container}>
      <Text style ={styles.headingText}>Trending Cards</Text>
      <View style={[styles.cardElevated, styles.card]}>
        <Image style={styles.imageStyle}
        source={{
          uri: 'https://picsum.photos/200',
        }} 
        />
        <View style={styles.contentBody}>
        <Text style={styles.ImgTittle}>Name: Shooting palace</Text>
        <Text style={styles.ImgDes}>Description, some unknown place in xyz country.</Text>
        <Text style={styles.ImgLocation}>Image Location: Somewhere in Europe, test data for the image</Text>
        <Text style={styles.ImgFooter}>Distance: 5 km from centeral</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        marginRight: 5,
        marginLeft: 5,
    },

    headingText:{
        fontSize:20,
        marginStart: 5,
        marginTop: 5,
        fontWeight:"bold"
    },
    cardElevated:{
      
    },

    contentBody:{
        flex: 1,
        padding:8,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },

    card:{
      padding: 4,
      height:350,
      width: 350,
      backgroundColor: "#cdcdcd",
      borderRadius: 6
    },
    imageStyle:{
      height: 180,
      marginBottom: 8
    
    },
    ImgTittle:{
      color: "#000000",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 6
    },
    ImgDes:{
       fontSize: 15,
      color: "#000000",
      fontWeight: "semibold"
    },
    ImgLocation:{
       marginTop: 5,
       fontSize: 13,
      color: "#000000",
      fontWeight: "semibold"
    },
    ImgFooter:{
      flex: 1,
      alignItems: "flex-end",
      marginTop: 5,
       fontSize: 13,
      color: "#000000"   ,
   
    },

})