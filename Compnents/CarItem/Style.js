import { StyleSheet ,Dimensions } from "react-native";

const styles = StyleSheet.create({

 carContainer:{
    width:'100%',
     height: Dimensions.get('window').height,
    // margin:0
    // backgroundColor:"red"
    //  alignItems:"center",
    // justifyContent:"center"
  },

  title:{
    marginTop:"20%",
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"red"
    
  },
  model:{
    fontSize:40,
    fontWeight:"400",

  },
  money:{
    fontSize:20, 
    fontStyle:"italic",
    color:"grey"
  },
  CTA:{
    textDecorationLine:"underline",
    // fontSize:20
  },
 img:{
  width:"100%",
  // height:Dimensions.get("window").height,
  height:"100%",
  resizeMode:"cover",
  position:"absolute",
 },
 btnContainer:{
  // backgroundColor:"red",
  position:"absolute",
  bottom:40,
  width:"100%"
 }
    })

export default styles