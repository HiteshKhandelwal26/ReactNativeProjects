import { View, Text, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'

import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import TestCards from './components/TestCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView >
      <View>
      <ContactList/>
       <ActionCards/>
      <FancyCards/>
      <FlatCards/>
      <ElevatedCards/>
      
      
   
     
  
    </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default App