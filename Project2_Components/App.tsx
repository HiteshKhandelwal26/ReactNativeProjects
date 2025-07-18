import { View, Text, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'

import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import TestCards from './components/TestCards'
import FancyCards from './components/FancyCards'


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView >
      <View>
     <FancyCards/>
      <FlatCards/>
      <ElevatedCards/>
  
   <FancyCards/>
    </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default App