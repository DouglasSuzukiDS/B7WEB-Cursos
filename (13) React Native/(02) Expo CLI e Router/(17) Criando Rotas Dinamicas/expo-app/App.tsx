import { View, StyleSheet, Text, Button, StatusBar, Pressable } from 'react-native';

export default function HomeScreen() {
  const handleClick = () => {
    alert('Botão clicado!');
  }
  return (
    <View style={styles.container}>
      <Text>ok</Text>
      
      {/* Utiliza a estilização que você definir. O Button tem estilazação diferente no Android e IOS */}
      <Pressable 
        style={ styles.btn }
        onPress={ handleClick }>
        <Text style={ styles.btnText }>Clique Aqui</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    width: 200,
    height: 40,
    backgroundColor: '#00F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
