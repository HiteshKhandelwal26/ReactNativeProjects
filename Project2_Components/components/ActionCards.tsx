import { StyleSheet, Text, View, Image, Pressable,Linking } from 'react-native'
import React from 'react'

export default function ActionCards() {
  function openWebLink(url:string)
  {
    Linking.openURL(url)
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCards</Text>
      <View style = {styles.container}>
         <Image style={styles.imageStyle}
                source={{
                  uri: 'https://placebear.com/300/300',
                }} 
                />
        <View style={styles.contentBody}>
        <Text style={styles.ImgTittle}>Actionable card</Text>
        <Text style={styles.ImgDes}>Please tap on the bottom text to launch new browser from the app.</Text>
        
        <Pressable style={styles.pressable} onPress={() => openWebLink('https://reactnative.dev')}>
        <Text style= {styles.clickImage}>ReadMore</Text> 

        </Pressable>
      
       
      </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  headingText:{
      fontWeight: "bold",
      fontSize: 20,
      marginStart: 10,
      marginTop: 10
  },
  container: {
    flex: 1,
    marginTop: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    marginBottom: 5,
    backgroundColor: "#678676",
    padding: 10
  },

  imageStyle:{
      height: 180,
      marginBottom: 8,
      borderRadius: 6,
      
    
    },

    contentBody:{},
    ImgTittle:{},
    ImgDes:{},
    clickImage:{
      color: "#50DBB4",
      fontWeight: "bold",
      fontSize: 16
    },
    pressable:{
      padding: 8
    }

})
