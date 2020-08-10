import { StyleSheet } from 'react-native'
import {setValueBasedOnHeight,setValueBasedOnWidth,setFontSize} from '../../../utils/deviceDimensions'
const styles = StyleSheet.create({
  container:{backgroundColor:'blue',padding:setValueBasedOnHeight(15),margin:setValueBasedOnHeight(10),borderRadius:setValueBasedOnHeight(5),justifyContent:'center',alignItems:'center'},
  buttonText:{fontSize:setFontSize(16),fontWeight:'bold',color:'white'}
})

export default styles;