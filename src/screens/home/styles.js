import { StyleSheet } from 'react-native'
import {setValueBasedOnHeight,setValueBasedOnWidth,setFontSize} from '../../utils/deviceDimensions'
const styles = StyleSheet.create({
   container: { backgroundColor: 'white', flex: 1 },
   summerytext: { color: 'black', padding: setValueBasedOnHeight(10), fontWeight: 'bold', fontSize: setFontSize(16) },
   titleText: { borderColor: 'grey', borderWidth: 1, margin: setValueBasedOnHeight(10), paddingLeft: setValueBasedOnWidth(10), borderRadius: setValueBasedOnWidth(2), padding: setValueBasedOnWidth(8)},
   dateContainer: { padding: setValueBasedOnHeight(10), borderColor: 'grey', borderRadius: setValueBasedOnWidth(2), borderWidth: setValueBasedOnWidth(1), flexDirection: 'row', margin: setValueBasedOnHeight(10), justifyContent: 'space-between' },
   dateText: { color: 'grey', alignSelf: 'center' },
   employeeContainer: { flexDirection: 'row', justifyContent: 'space-between', marginRight: setValueBasedOnHeight(10) },
   employeeText: { color: 'black', padding: setValueBasedOnHeight(10), fontWeight: 'bold', fontSize: setFontSize(16) },
   assignContainer: { flexDirection: 'row', alignItems: 'center' },
   assignText: { color: 'blue', padding: setValueBasedOnHeight(10), fontWeight: 'bold', fontSize: setFontSize(16) },
   desTextinput: { borderColor: 'grey', height: setValueBasedOnHeight(100), borderWidth: setValueBasedOnWidth(1), margin: setValueBasedOnHeight(10), paddingLeft: setValueBasedOnHeight(5), borderRadius: setValueBasedOnHeight(5) },
   listContainer: { flexDirection: 'row', margin: setValueBasedOnHeight(10) },
   descriptionText: { color: 'black', padding: setValueBasedOnHeight(10), fontWeight: 'bold', fontSize: setFontSize(16) },
   attachContainer: { flexDirection: 'row', justifyContent: 'space-between', marginRight: setValueBasedOnHeight(10), marginVertical: setValueBasedOnHeight(10) },
   attachText: { color: 'black', padding: setValueBasedOnHeight(10), fontWeight: 'bold', fontSize: setFontSize(16) },
   addContainer: { flexDirection: 'row', alignItems: 'center' },
   addText: { color: 'blue', padding: setValueBasedOnHeight(10), fontWeight: 'bold', fontSize: setFontSize(16) },
   fileContainer: { margin: setValueBasedOnHeight(10), borderWidth: setValueBasedOnWidth(1), borderRadius: setValueBasedOnWidth(2), borderColor: 'grey', padding: setValueBasedOnHeight(10), flexDirection: 'row', justifyContent: 'space-between' },
   viewContainer: { flexDirection: 'row' },
   fileText: { marginLeft: setValueBasedOnHeight(10) },
   roundOverlap: { height: setValueBasedOnWidth(46), width: setValueBasedOnWidth(46), borderColor: 'white', borderWidth: setValueBasedOnWidth(1), borderRadius: setValueBasedOnWidth(23), backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' },
   roundOverlapmargin: { marginLeft: -setValueBasedOnHeight(10) }
})

export default styles;