import React, { JSX, useState } from "react";
import { Formik } from "formik"
import { View, TextInput, Text, StyleSheet, ScrollView, SafeAreaView, Pressable, Linking, TouchableOpacity } from "react-native"
import * as Yup from 'yup'
import BouncyCheckbox from "react-native-bouncy-checkbox"

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
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  //
  const generatePassordString = (passwordLength: number) => {

    let characterList = ''

    const UpperCaseChars = 'ABCDEFGHIJKLMNOPQRSTVWXYZ'
    const LowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const digitCaseChars = "1234567890"
    const specialCaseChars = '!@#$%^&*()_+'

    if (upperCase) {
      characterList += UpperCaseChars
    }

    if (lowerCase) {
      characterList += LowerCaseChars
    }

    if (numbers) {
      characterList += digitCaseChars
    }

    if (symbols) {
      characterList += specialCaseChars
    }

    const passwordResult = createPassword(characterList, passwordLength)
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
    setNumbers(false)
    setSymbols(false)
    setPassGenerated(false)
  }

  function loadULR() {
    Linking.openURL("https://www.google.com")
  }

  return (
    <View style={styles.InnerText}>

      <ScrollView keyboardShouldPersistTaps="handled">

        <SafeAreaView style={styles.appContainer}>

          <View style={styles.formContainer}>

            <Text style={styles.textContainer}>Password Generator</Text>

            <Formik
              initialValues={{ passwordLength: '' }}
              validationSchema={NumberValidation}
              onSubmit={(values) => {
                console.log(values)
                generatePassordString(+values.passwordLength)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                isValid,
                handleSubmit,
                handleReset,

              }) => (
                <>
                  <View style={styles.viewHolder}>
                    <View style={styles.inputWrapper}>
                      <Text style={styles.leftItem}>Passoword Length: </Text>
                      {(touched.passwordLength && errors.passwordLength && (
                        <Text>{errors.passwordLength}</Text>
                      ))}

                    </View>
                    <TextInput
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex. 8"
                      keyboardType='numeric' />
                    <View style={styles.inputWrapper}>
                      <Text style={styles.leftItem}>Include LowerCase:</Text>
                      <BouncyCheckbox style={styles.rightItem}
                        isChecked={lowerCase}
                        onPress={() => setLowerCase(!lowerCase)}
                        fillColor="#29AB87"
                      />
                    </View>

                    <View style={styles.inputWrapper}>
                      <Text style={styles.leftItem}>Include UpperCase: </Text>
                      <BouncyCheckbox style={styles.rightItem}
                        isChecked={upperCase}
                        onPress={() => setUpperCase(!upperCase)}
                        fillColor="#FC80A5"
                      />
                    </View>

                    <View style={styles.inputWrapper}>
                      <Text style={styles.leftItem}>Include Symbols : </Text>
                      <BouncyCheckbox style={styles.rightItem}
                        isChecked={symbols}
                        onPress={() => setSymbols(!symbols)}
                        fillColor="#C9A0DC"
                      />
                    </View>

                    <View style={styles.inputWrapper}>
                      <Text style={styles.leftItem}>Include Numbers: </Text>
                      <BouncyCheckbox style={styles.rightItem}
                        isChecked={numbers}
                        onPress={() => setNumbers(!numbers)}
                        fillColor="#FED85D"
                      />
                    </View>
                  </View>
                  <View style={styles.formActions}></View>
                  <Pressable
                    disabled={!isValid}
                    onPress={() => handleSubmit}>
                    <Text style={[styles.button, styles.buttonText]}>Generate Passwords</Text>
                  </Pressable>

                  <Pressable
                    disabled={!isValid}
                    onPress={() => handleSubmit}
                    style={({ pressed }) => [
                      styles.button,
                      pressed && styles.buttonPressed, // style when pressed
                      !isValid && styles.disabledButton // optional: style when disabled
                    ]}
                  >
                    <Text style={styles.buttonText}>Generate Passwords</Text>
                  </Pressable>








                  <Pressable
                    onPress={() => { handleReset(), resetPassword }}
                  >
                    <Text style={[styles.button, styles.buttonText]}>Reset Password </Text>
                  </Pressable>

                </>
              )}
            </Formik>

          </View>

        </SafeAreaView>
      </ScrollView>

    </View>
  )
}




export default App

const styles = StyleSheet.create(
  {

    appContainer: {

    },
    formContainer: {

    },

    textContainer: {
      fontWeight: "bold",
      padding: 10,
      fontSize: 25,
      fontStyle: "normal"
    },
    viewHolder: {
      flex: 1,
      paddingHorizontal: 16,
      justifyContent: "flex-start", // vertical stacking
      alignItems: "stretch",        // important for full width rows
    },
    inputWrapper: {
      flexDirection: "row",
      justifyContent: "space-between", // one item to left, one to right
      alignItems: "center",
      marginVertical: 8,
    },
    leftItem: {
      textAlign: "left",
      flex: 1,
    },

    rightItem: {
      textAlign: "right",
      flex: 1,
    },
    inputColumn: {


    },

    formActions: {

    },
    textInput: {

    },

    InnerText: {

    },
    textStyle: {
      fontWeight: "bold",
      fontSize: 20,
      justifyContent: "center",
      alignContent: "center",
      flex: 1,
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginStart: 12,
      marginEnd: 12,
      marginTop: 5
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: "center"
    },

    buttonPressed: {
      backgroundColor: '#45A049', // Slightly darker for pressed state
    },
    disabledButton: {
      backgroundColor: '#ccc', // Gray out when disabled
    },
  }
)
