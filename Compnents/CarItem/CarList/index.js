import {View,Text ,FlatList ,Dimensions} from 'react-native'
import styles from './style';
import cars from './cars';
import CarItem from '..';
const carList = () => {
    // console.log("he;fksj")
    return ( 
        <View style={styles.container}>
            {/* <Text>Hello</Text> */}
            <FlatList 
            data={cars}
            renderItem={(({item}) =>  <CarItem car={item} />  )}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            showsHorizontalScrollIndicator={false}
           />

        </View>
     );
}
 
export default carList;