import { StyleSheet } from 'react-native'
import {setValueBasedOnHeight,setValueBasedOnWidth,setFontSize} from '../../../utils/deviceDimensions'
const styles = StyleSheet.create({
  container:{backgroundColor:'blue',flexDirection:'row',alignItems:'center',padding:setValueBasedOnHeight(5)},
  nameText:{marginLeft:setValueBasedOnHeight(10),padding:setValueBasedOnHeight(10)},
  titleText:{color:'white',padding:setValueBasedOnHeight(18),fontSize:setFontSize(16), fontWeight:'bold'}
})

export default styles;