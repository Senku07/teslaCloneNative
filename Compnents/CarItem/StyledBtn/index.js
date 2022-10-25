import { View ,Pressable ,  Text } from "react-native";
import styles from "./style";

const StyledBtn = (props) => {
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    const {type,content,onPress} = props;
    // console.warn(type);
    const bgColor = type === 'primary' ? "#171A20CC" : "#FFFFFFA6";
    const textColor = type === "primary" ? "whitesmoke" : "#171A20CC";
    return ( 
        <View style={styles.container}>
            <Pressable
            style={[styles.btn , {backgroundColor:bgColor}]}
            onPress={()=> onPress()}>
                <Text style={[styles.btnText , {color:textColor}]}>{content}</Text>

            </Pressable>
        </View>
     );
}
 
export default StyledBtn;