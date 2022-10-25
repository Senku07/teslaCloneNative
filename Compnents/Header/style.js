import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        // display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        // paddingTop:"10%",
        paddingLeft:"5%",
        paddingRight:"5%",
        position:"absolute",
        top:30,
        zIndex:100,
        width:"100%"
        
    },
    logo:{
        width:100,
        height:30,
        resizeMode:"contain"
    },
    menu:{
        width:30,
        height:30,
        resizeMode:"contain"
    },
});

export default styles;
