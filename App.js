import { StyleSheet, Text, View } from 'react-native';

 const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>

      </View>

      <View style={styles.midContainer}>
      <Text>Biography...</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text>Qr Code</Text>
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
    backgroundColor:"silver"
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