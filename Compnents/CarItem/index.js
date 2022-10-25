import { View, Text ,ImageBackground } from "react-native";
import StyledBtn from "./StyledBtn";
import styles from "./Style";

const CarItem = (props) => {
  // const img = require("../../assets/images/ModelX.jpeg")
  const {name,tagline,taglineCTA ,image} = props.car;
  return (
    <View>
      <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.img} />
        <View style={styles.title}>
          <Text style={styles.model}>{name}</Text>
          <Text style={styles.money}>{tagline} {''}
          <Text style={styles.CTA}>{taglineCTA}</Text>       
          </Text>
        </View>

        <View style={styles.btnContainer}>
        <StyledBtn type="primary" content={"Custom Order"} onPress={()=>{console.log("fhskj")}}/>
        <StyledBtn type="secondary" content={"Existing Inventory"} onPress={()=>{console.log("fhfsdjhkdkj")}} />
        </View>
      
      </View>   
    </View>
  );
};

export default CarItem;
