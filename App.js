import { StyleSheet, Text, View, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.image} source={require("./assets/chulito.jpg")}/>
        <Text style={styles.whiteText}>Eduardo Camacho Díaz</Text>
      </View>

      <View style={styles.midContainer}>
      <Text>Mi nombre es Eduardo Camacho Díaz, en la actualidad soy alumno de un ciclo formativo en Salesianos La Cuesta. 
      {"\n\n"}Disfruto mucho estudiando porque me permite mantenerme conectado a la tecnología y a las personas.
      {"\n\n"}¿Qué más se puede pedir?</Text>
      </View>

      <View style={styles.bottomContainer}>
      <QRCode value="https://github.com/Wonternal"/>
      </View>

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
  topContainer: {
    flex: 1,
    width:"100%",
    height: "100%",
    backgroundColor:"silver",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },

  image: {
    height: 75,
    width: 75,
    borderRadius: 50
  },

  whiteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },

  midContainer: {
    flex: 2,
    width:"100%",
    height: "100%",
    backgroundColor:"white",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomContainer: {
    flex: 2,
    width:"100%",
    height: "100%",
    backgroundColor:"white",
    justifyContent: "center",
    alignItems: "center"
  },
});

export default App