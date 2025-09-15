import { View, StyleSheet, Text, ImageSourcePropType, Image, Pressable, Linking, useColorScheme } from "react-native"
import React, { useState } from "react";
import type { JSX, PropsWithChildren } from "react";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import DiceOne from "../assets/One.png";
import DiceTwo from "../assets/Two.png";
import DiceThree from "../assets/Three.png";
import DiceFour from "../assets/Four.png";
import DiceFive from "../assets/Five.png";
import DiceSix from "../assets/Six.png";


//Definig a typescipt rule "DiceProps that say, hey this compoonent needs an imageURL and can also put some other stuff too, like Text, View etc"
//Basically, "ImageSourcePropType" will ensure that the imageURL you pass to Image component is always of Image Type only,
// not just a string, or url, or something else. To avoid errors.
type DiceProps = PropsWithChildren<{
  imageURL: ImageSourcePropType
}>

const myColor = useColorScheme() 
const myArr = [
  {uid:1},{uid:2},{uid:3}
]

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageURL }: DiceProps): JSX.Element => {
  return (
    <View style = {[myColor==="dark"? styles.container :styles.container]}>

      {myArr.map(({uid}) =>(
        <View key={uid}></View>
      ))}
      <Image source={imageURL} style={styles.diceImage} />
    </View>
  )
}
const App = () => {
  //appending <ImageSourcePropType> after useState will also ensures that we pass the source as Image Type only
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const loadDiceImage = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }


  return (
    <View style={styles.container}>
      <Dice imageURL={diceImage}></Dice>
     

      <Pressable onPress={loadDiceImage}>
        {({ pressed }) => (
          <Text
            style={[
              styles.rollDiceBtnText,
              { color: pressed ? "red" : "black" } // red while pressed, black otherwise
            ]}
          >
            Roll The Dice
          </Text>
        )}
      </Pressable>


    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
