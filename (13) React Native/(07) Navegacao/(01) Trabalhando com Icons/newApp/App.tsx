import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>

      <FontAwesome
        name='home'
        size={35}
        color={'#11118C'}
      />

      <FontAwesome
        name='user'
        size={35}
        color={'#54A300'}
      />

      <Feather
        name='gift'
        size={35}
        color={'#7665FF'}
      />

      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome
          name='youtube'
          size={35}
          color={'#FFF'}
        />
        <Text style={styles.btnText}>Acessar Canal</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnYoutube: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#F00',
    borderRadius: 5
  },

  btnText: {
    paddingLeft: 10,
    color: '#FFF',
    fontWeight: 'bold'
  }
})