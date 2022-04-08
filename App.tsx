import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import { Switchs } from './switch';
import { useSwitch } from './switch/hook/useSwitch';
export default function App() {
  const { seleccion } = useSwitch();

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Switchs></Switchs>
      <Button title="Go to Details" onPress={() => {
        seleccion();
      }} />
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
});




