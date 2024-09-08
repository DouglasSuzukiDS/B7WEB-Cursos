import { View, Text, Button, SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native';

function App() {

  return(
    <SafeAreaView style={ styles.container }>
      <View style={ styles.azul }></View>
      
      <ScrollView style={ styles.scroll }>
        <View style={ styles.verde }></View>
        <View style={ styles.amarelo }></View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },

  scroll: {
    flex: 1,
    backgroundColor: '#000'
  },

  azul: {
    width: '100%',
    height: 500,
    backgroundColor: '#00F',
  },

  verde: {
    width: '100%',
    height: 500,
    backgroundColor: '#0F0',
  },

  amarelo: {
    width: '100%',
    height: 500,
    backgroundColor: '#FF0',
  }
})

export default App