import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Produccion = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('datosGenerales')}
        >
          <Image source={require('../Imagenes/datosGenerales.png')} style={styles.icon} />
          <Text style={styles.cardText}>Datos generales</Text>
        </TouchableOpacity>

        
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('DatosVeterinarios')}
          
        >
          <Image source={require('../Imagenes/tratamiento.jpg')} style={styles.icon} />
          <Text style={styles.cardText}>Datos veterinarios</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
         
        >
          <Image source={require('../Imagenes/vaca22.png')} style={styles.icon} />
          <Text style={styles.cardText}>Reproducción</Text>

        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.sellButton}
        
      >
        <Text style={styles.sellButtonText}>Poner en venta</Text>
      </TouchableOpacity>
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
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  card: {
    width: 140,
    height: 140,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sellButton: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  sellButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});
export default Produccion