import { useState } from 'react'
import { View, Text, Button, SafeAreaView, StyleSheet, StatusBar, TextInput } from 'react-native';

function App() {
  const [campo, setCampo] = useState('')

  const mostrar = () => {
    alert(campo)
  }

  return(
    <SafeAreaView style={ styles.container }>
      <TextInput 
        style={ styles.input } 
        value={ campo }
        onChangeText={ t => setCampo(t) }
      />

      <Button title='O que foi digitado?' onPress={ mostrar } />

      <Text>Você digitou: { campo }</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0
  }, 

  input: {
    width: 200,
    height: 50,
    backgroundColor: '#DDD',
    borderRadius: 5,
    padding: 10
  }
})

export default App