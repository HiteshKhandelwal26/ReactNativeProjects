import { View, Text, StyleSheet, StatusBar, Pressable, Linking, Image } from "react-native"

import React, { useState } from "react"


const App = () => {

  const [randomBackgroundColor, setBackground] = useState("#ffffff")

  //Function that will be generating the random color, it will be invoked when user Presses the PressMe button
  const changeBGColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let index = 0; index < 6; index++) {
      //Math.random() will generate a random number between 1 and 0 and multiplies with 16(ex- 0.45 * 16 = 7.2)
      // later to [Math.floor] will round off that value to proper number - Ex: 7
      // After that in hexRange will it pick the number from the 7th index [7] = which is 7 only here coincidently
      // in last it will keep on appending to the Color varibale followed by # and will run the loop until 6 times
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    //Now setting the updated random generated value to setBackground to update the UI. We cant direclty update varibale 
    //"backgroundColor"
    setBackground(color)

  }

  const resetBGColor = () => {
      setBackground("#FFFFFF")
  }
  return (
    <>
      <StatusBar backgroundColor={"#000000"} />
      <View style={[myStyles.mainContainer, { backgroundColor: randomBackgroundColor }]}>

        <Text style = {myStyles.headingText}>Generate the random App Background color-</Text>
        <Pressable onPress={() => changeBGColor()}>
          <View style={myStyles.innerBtnView}>
            <Text style={myStyles.innerBtnTxtView}>
              Press Me
            </Text>
          </View>
        </Pressable>

      <Pressable onPress={() =>resetBGColor()}>
      <View>
      <Text style={myStyles.innerBtnTxtView}>
        Rest color
      </Text>
      </View>
      </Pressable>
      </View>

    </>
  )
}

export default App

const myStyles = StyleSheet.create(
  {
    headingText:{
      fontSize: 18,
      fontWeight: "bold",
      padding: 10,
      alignItems:"center",
      justifyContent: "center",
      marginHorizontal: 10,
      color: "#ffffff"
    },

    mainContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    innerBtnView: {
      borderRadius: 7,
      backgroundColor: "#61AB4D",
      paddingVertical: 12,
      paddingHorizontal: 40

    },
    innerBtnTxtView: {
      color: "#FFFFFF",
      fontSize: 20,
      fontWeight: "bold",
      textTransform: "capitalize"

    }
  }
)