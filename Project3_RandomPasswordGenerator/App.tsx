import React, { JSX, useState } from "react";

import { View, Text, StyleSheet } from "react-native"
import * as Yup from 'yup'


// NumberValidation is basically used to call yup package to validate of type number with min, max along
// with the error msg we want to dispaly
const NumberValidation = Yup.object().shape(
  {
    passwordLength: Yup.number()
      .min(4, 'Min of 4 numbers are required')
      .max(16, 'Max of 16 numbers are required')
      .required("Length is required")
  }
)



function App(): JSX.Element {

  // creating the useStates which can later be used to update the state of the variables whenever the state changes
  // ex: whenever password will change, we will use "updatePassword" to call and update the UI for password.
  // useState() take default value
  const [password, setPassword] = useState('')
  const [isPassGenerated, setPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, useNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  //
  const generatePassordString = (passwordLenth: number) => {

    let characterList = ''

    const UpperCase = 'ABCDEFGHIJKLMNOPQRSTVWXYZ'
    const LowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const digitCase = "1234567890"
    const specialCase = '!@#$%^&*()_+'

    if (upperCase) {
      characterList += upperCase
    }

    if (lowerCase) {
      characterList += lowerCase
    }

    if (numbers) {
      characterList += numbers
    }

    if (symbols) {
      characterList += symbols
    }

    const passwordResult = createPassword(characterList, passwordLenth)
    setPassword(passwordResult)
    setPassGenerated(true)

  }



  //Creating a password method that take character as string and passwordLength as number to generate the password for us
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '' // this is basically the empty string that will hold the final string as password which will be generate
    //from the for loop (I have used "let" because it is mutable unlike const)

    // the below for will run until the passwordLength(16) means 16 times
    for (let i = 0; i < passwordLength; passwordLength++) {
      // Math.random() will generate a random number which will later be multiplied by characters.length
      // which can give us any number out of characters from 0 until the length, could be upper case, lower case, could be numbers. anything
      //Math.round is to get the proper roundof number
      const characterIndex = Math.round(Math.random() * characters.length)

      //to pick the value from chars, now the below line will give us the individual character from the string
      // and keep appending to the result after generating the random char from the character string
      result += characters.charAt(characterIndex)

    }
    return result
  }

  // reseting the password state
  const resetPassword = () => {
      setPassword('')
      setLowerCase(true)
      setUpperCase(false)
      useNumbers(false)
      setSymbols(false)
      setPassGenerated(false)
  }


  return (
    <View style={styles.InnerText}></View>
  )
}




export default App

const styles = StyleSheet.create(
  {
    InnerText: {

    }
  }
)
