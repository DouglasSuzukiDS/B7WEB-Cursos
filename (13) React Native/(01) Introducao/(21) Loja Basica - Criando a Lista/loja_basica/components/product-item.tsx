import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { Product } from '../types/product'

type Props = {
  product: Product
}
export const ProductItem = (props: Props) => {
  const handleAddToCart = () => {
    alert(`Você esta comprando ${ props.product.name } `)
  }

  return(
    <View style={ styles.container }>
      <Image
        source={{ uri: props.product.image }}
        style={ styles.image }
      />

      <View style={ styles.info }>
        <Text style={ styles.name }>{ props.product.name }</Text>
        <Text style={ styles.price }>R$ { props.product.price.toFixed(2) }</Text>
        <Button
          title='Comprar'
          onPress={ handleAddToCart }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20
  },

  image: {
    width: 100,
    height: 100
  },

  info: {
    flex: 1,
    marginLeft: 20
  },

  name: {
    fontWeight: 'bold',
    fontSize: 21,
    marginBottom: 10
  },

  price: {
    color: '#F00',
    fontSize: 16,
    marginBottom: 10
  }
})