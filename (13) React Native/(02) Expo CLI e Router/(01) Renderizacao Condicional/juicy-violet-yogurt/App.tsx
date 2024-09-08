import { useState } from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

function App() {
  const [areaShow, setAreaShow] = useState(false)
  
  const handleClick = () => {
    setAreaShow(!areaShow)
  }

  return(
    <SafeAreaView style={ styles.container }>
      <Button title="Aparça / Desapareça" onPress={ handleClick } />

      { areaShow === true && 
        <View style={ styles.area }>
          <Text style={ styles.areaText }>Área secreta</Text>
        </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0
  }, 

  area: {
    margin: 20,
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10
  }, 

  areaText: {
    textAlign: 'center',
    color: '#FFF'
  }
})

export default App