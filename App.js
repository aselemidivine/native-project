import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("Divine");
  const [person, setPerson] = useState({name: "John", age: 40});

  const clickHandler = (e) => {
    setName("Aselemi");
    setPerson({name:"Miah", age: 37});
  };


  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>his name is {person.name} and his age is {person.age}</Text>
      <Text></Text>
    <View style={styles.buttonContainer}>
      <Button title='update state' onPress={clickHandler} />
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
  buttonContainer: {
    
  }
});
