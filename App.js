import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground } from 'react-native';
import CarItem from './Compnents/CarItem';
import CarList from './Compnents/CarItem/CarList';
import Header from './Compnents/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
     <CarList />
     <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // height:"100%"
  },
 
});
